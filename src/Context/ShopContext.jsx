import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import all_product from "../Components/Assets/all_product";


const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < 300+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
    // const [all_product, setAllProduct] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:4000/allproduct')
    //     .then((res)=>res.json())
    //     .then((data)=>setAllProduct(data))

    //     if(localStorage.getItem('auth-token')){
    //         fetch('http://localhost:4000/getcart',{
    //             method:"POST",
    //             headers:{
    //                 Accept:'application/form-data',
    //                 'auth-token':`${localStorage.getItem('auth-token')}`,
    //                 'Content-type':'application/json'
    //             },
    //             body:"",
    //         }).then((res)=>res.json())
    //         .then((data)=>setCartItems(data))
    //     }
    // },[])
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    "Content-Type":'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    "Content-Type":'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount =() => {
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export {ShopContext};
export default ShopContextProvider;