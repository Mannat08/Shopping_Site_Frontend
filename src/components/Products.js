import React, { Component } from 'react';
import "../style.css";
import formatCurrency from "../util"

export default class Products extends Component {
    render() {
        let amt=0;
        return (
            <div>
               <ul className="products">
                   {this.props.products.map((product) =>(
                       <li key={product.filename}>
                            <div className ="product">
                               
                        <img src={product.filename} alt={product.title} height="200" width="160"></img>
                                   <p><h3>{product.title}</h3></p>
                              
                               <p>{product.type}</p>
                                
                                  {/* for(let i=0;i<product.rating;i++)
                                   return <span class="fa fa-star checked"></span>  */}
                                   {/* Rating : <span>{ amt = product.rating}</span> */}
                                   {
                                    function() {
                                        let rows = [];
                                        amt=product.rating;
                                        if(amt!==0){for(let i = 0 ;i<amt;i++) {
                                            rows.push(<span className="fa fa-star checked" key={i}></span>);
                                            }
                                            return rows;}
                                            // else {return <span className="fa fa-star unchecked"></span> }
                                            else{for(let i = 0 ;i<5;i++) {
                                                rows.push(<span className="fa fa-star unchecked" ></span>);
                                                }
                                                return rows;}
                                        
                                    }()
                                    }
                                
                               {/*<p>{product.description}</p>*/}
                               <div className="product-price">
                                   <div>Price : {formatCurrency(product.price)}</div><br/>
                                   <button onClick={() => this.props.addToCart(product)} className="button primary">Add To Cart</button><br/>
                               </div>
                           </div>
                           <br/><br/><br/><br/>
                       </li>
                   ))}
                   </ul> 
            </div>
        )
    }
}
