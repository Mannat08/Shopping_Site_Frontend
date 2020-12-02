import React, { useState } from 'react'
import "../style.css"
import formatCurrency from "../util"
import {useHistory} from "react-router-dom";

export default function Cart (props) {
   
    const [showCheckOut, setShowCheckout] = useState(false);
    
        const checkout = () =>history.push("/checkout");
        const {cartItems} = props;
        const history = useHistory();
        return (
            <div>
                {cartItems.length === 0 ? ( <div className="cart cart-header">Cart is empty</div>
                ):(
                <div className="cart cart-header">You have {cartItems.length} in the cart{"."}</div>
                )}
                <div className="cart">
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.filename}>
                            <div className="each-cart">
                            <img src={item.filename} alt={item.title} height="70" width="120"></img>
                               <div>{item.title} </div>
                               <div className="right">
                                   {formatCurrency(item.price)} x {item.count} {" "}
                               <button className="button" onClick={()=>props.removeFromCart(item)}>
                                   Remove
                               </button>
                               </div>
                               
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 && (
                    <div className="cart">
                    <div className="total">
                        <div>
                            <h2>Total:{" "}
                            {formatCurrency(cartItems.reduce((a,c) => a + (c.price * c.count),0))}
                            </h2></div>
                        <button onClick={checkout} className="button primary">Checkout</button>
                    </div>
                </div>
            )}
            
            </div>
        );
    
}

