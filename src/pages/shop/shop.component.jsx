import React, { useState } from "react";

import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component.jsx";

const ShopPage = () => {
    const collections = SHOP_DATA;

    return (
        <div className="shop">
            <div className="container">
                <h1>Shop Page</h1>
                {collections.map((collection) => {
                    return <PreviewCollection key={collection.id} {...collection} />;
                })}
            </div>
        </div>
    );
};

export default ShopPage;
