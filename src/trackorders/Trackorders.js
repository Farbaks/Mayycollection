import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Trackorders.css';

function Trackorders() {
    
    document.getElementById("title").innerHTML="Track Order - Mayy Collection";   
    
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <p className="cart-heading">Track Your Order</p>
                    <p className="trackorder-subheading">To track your order, please enter your Order ID and email in the fields below and press the "Track" button. 
                            The Order ID was given to you on your receipt and in the confirmaton email you should have received.
                    </p>
                    <div className="trackorder-form">
                        <input type="text" placeholder="Order ID" />
                        <input type="text" placeholder="Billing Email" />
                        <button>Track Order</button>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Trackorders;
