import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, Timestamp } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcCACH7RfrQWpT26_-t9NlEH5vS1L3pu4",
    authDomain: "udemy-db-5c1de.firebaseapp.com",
    projectId: "udemy-db-5c1de",
    storageBucket: "udemy-db-5c1de.appspot.com",
    messagingSenderId: "564790311309",
    appId: "1:564790311309:web:56334301658c2b4c4065c4",
    measurementId: "G-14BKWRG5DH",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export const signInWithEmail = signInWithEmailAndPassword;
export const signUpWithEmail = createUserWithEmailAndPassword;

const provider = new GoogleAuthProvider();
provider.setCustomParameters({});
export const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userId = userAuth.uid;

    // The user in collection of users
    // Source: https://firebase.google.com/docs/firestore/manage-data/add-data
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        const docData = {
            displayName,
            email,
            createdAt,
            ...additionalData,
        };
        console.log("Document data:", docSnap.data());

        try {
            await setDoc(doc(db, "users", userId), docData);
            console.log("No such document! Creating a new document in users collection in firebase db...");
        } catch (error) {
            console.log("error creating user", error.message);
        }
    } else {
        console.log("Existing user logged in");
    }

    return docRef;
};
