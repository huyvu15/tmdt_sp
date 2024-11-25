import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Paragraph 1: 2:15:10</p>
                <p>Paragraph 2</p>
            </div>
        </div>
    )
}

export default DescriptionBox;