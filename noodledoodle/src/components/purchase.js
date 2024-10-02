import React from "react";

const titleStyle = {
    fontFamily: 'fantasy',
    fontSize: '36px',
    textAlign: 'center'
};

const purchase = () => {
    let title = "purchase page";

    return (
        <div>
            <h1 style={titleStyle}>{title}</h1> 
        </div>
    );
};

export default purchase;

