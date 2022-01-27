import React from "react";

import Layout from "../../components/layout/layout.component";

import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component.jsx";

const ShopPage = () => {
    const collections = SHOP_DATA;

    return (
        <Layout hasHeader={true} hasFooter={true}>
            <div className="shop">
                <div className="container">
                    <h1>Shop Page</h1>
                    {collections.map((collection) => {
                        return <PreviewCollection key={collection.id} {...collection} />;
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default ShopPage;
