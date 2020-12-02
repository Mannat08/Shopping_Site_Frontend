import React,{useState} from 'react'
import Cart from "../Cart"
import {useHistory} from "react-router-dom";

export default function MyCart() {

    let [cartItems, setCartItems] = useState(localStorage.getItem("cartItems")?
        JSON.parse(localStorage.getItem("cartItems")): []); 


    const removeFromCart = (product) =>{
        cartItems= cartItems.slice();
        setCartItems(cartItems.filter(x => x.filename !== product.filename));
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x.filename !== product.filename)));
        
    }
    const addToCart = (product) => {
        cartItems= cartItems.slice();
       let alreadyInCart= false;
       cartItems.forEach(item => {
           if(item.filename === product.filename) {
               item.count++;
               alreadyInCart = true;
           }
       });

       if(!alreadyInCart)
       {
           cartItems.push({...product, count : 1});
       }
       setCartItems(cartItems);
       localStorage.setItem("cartItems", JSON.stringify(cartItems));
   };
    return (
        <div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>

        </div>
    )
}
