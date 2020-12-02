import React,{useEffect,useContext,useState} from 'react'
import {useHistory} from "react-router-dom"
import UserContext from '../../context/UserContext';
import {product}  from "../../data.js";
import "../../style.css"
import Cart from '../Cart';
import Products from '../Products';


export default function Home() {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    const data = product;
    const [products,setProducts]=useState(data);
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
    useEffect(()=>{
        if(!userData) history.push("/login");
    });
    return (
        <div className="grid-container">
          <div className ="content">
              <div className="main">
                <div className="assemble-products">
                <Products products={products} addToCart={addToCart}></Products>
                </div>
              </div>

          </div>
         
        </div>
    )
}
