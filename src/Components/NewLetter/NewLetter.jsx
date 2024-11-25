import React from "react";
import './NewLetter.css';

const NewLetter = () =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subcribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder="Your Email Id" />
            <button>Subscribe</button>
        </div>
        </div>
    
    )
}

export default NewLetter;