import React from "react";

import "./menu-item.style.scss";

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <div
                className="overlay"
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}
            ></div>
            <div className="content">
                <p className="title">
                    <strong>{props.title}</strong>
                </p>
                <p className="subtitle">{props.imageUrl}</p>
            </div>
        </div>
    );
};

export default MenuItem;
