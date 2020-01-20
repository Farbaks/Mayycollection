import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Bag.css';

function Bag() {
  
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite:true,
        arrows:true,
        onChange:(oldIndex, newIndex) => {
            // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }
  
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="noitemincart">
                    <div className="noitem-image">
                        <img src={process.env.PUBLIC_URL+'/images/emptycart.svg'} alt="empty cart" />
                    </div>
                    <p>Oh no, your bag is empty. <a href="/">Start shopping!</a></p>
                </div>
                <div className="cart">
                    <p className="cart-heading">SHOPPING BAG</p>
                    <div className="cart-content">
                        <div className="cart-content-1">
                            
                        </div>
                        <div className="cart-content-2">
                            <p className="cart-subheading">SHOPPING BAG TOTAL</p>
                            <div className="coupon">
                                <p>ADD A COUPON CODE</p>
                                <div className="enter-coupon">
                                    <input type="text" />
                                    <button>ADD</button>
                                </div>
                            </div>
                            <div className="price">
                                <p>Sub total:</p>
                                <p>₦4000</p>
                            </div>
                            <div className="price">
                                <p>Delivery:</p>
                                <p>₦4000</p>
                            </div>
                            <br/>
                            <div className="price">
                                <p>Total:</p>
                                <p>₦8000</p>
                            </div>
                            <button className="checkout">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Bag;
