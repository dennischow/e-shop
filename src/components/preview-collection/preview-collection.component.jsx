import React from "react";

import "./preview-collection.style.scss";

const previewCollection = ({ id, title, items }) => {
    return (
        <div className="preview-collection">
            <h1 className="title">
                {title} - <small>{id}</small>
            </h1>
            <ul className="list">
                {items.map((item) => {
                    return (
                        <li className="list-item" key={item.id}>
                            <a className="add-to-cart" href="#" title="Add to cart">
                                <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                            </a>
                            <div className="footer">
                                <p className="name">{item.name}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default previewCollection;
