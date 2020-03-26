import React from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import '../assets/style/Orderdetail.css';

function Orderdetail() {
    
    document.getElementById("title").innerHTML="Order Detail - Mayy Collection";   
    
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <p className="cart-heading">Order Detail</p>
                    <div className="order-detail-top">
                        <div className="order-detail-top-1">
                            <p>Order No.: <span>234SJHBS23S</span> (<span>12/02/2020, 11:23</span>)</p>
                            <p>Staus: <span>Delivered</span></p>
                        </div>
                        <div className="order-detail-top-1">
                        <a href=""><span className="reorder"><img src={process.env.PUBLIC_URL+'/images/print.svg'} alt="order" /></span>Print Invoice</a>
                            <a href=""><span className="reorder"><img src={process.env.PUBLIC_URL+'/images/refresh.svg'} alt="order" /></span>Reorder</a>
                        </div>
                        <div className="order-detail-status">
                            <div className="order-detail-status-item">
                                <div className="order-detail-status-item-checked"></div>
                                <div className="order-detail-status-item-image">
                                    <img src={process.env.PUBLIC_URL+'/images/orderplaced.svg'} alt="order" />
                                </div>
                                <p>Order Placed</p>
                            </div>
                            <div className="order-detail-line"></div>
                            <div className="order-detail-status-item">
                                <div className="order-detail-status-item-checked"></div>
                                <div className="order-detail-status-item-image">
                                    <img src={process.env.PUBLIC_URL+'/images/orderpacked.svg'} alt="order" />
                                </div>
                                <p>Order Packed</p>
                            </div>
                            <div className="order-detail-line"></div>
                            <div className="order-detail-status-item">
                                <div className="order-detail-status-item-notchecked"></div>
                                <div className="order-detail-status-item-image">
                                    <img src={process.env.PUBLIC_URL+'/images/shipped.svg'} alt="order" />
                                </div>
                                <p>Order Shipped</p>
                            </div>
                            <div className="order-detail-line"></div>
                            <div className="order-detail-status-item">
                                <div className="order-detail-status-item-notchecked"></div>
                                <div className="order-detail-status-item-image">
                                    <img src={process.env.PUBLIC_URL+'/images/delivered.svg'} alt="order" />
                                </div>
                                <p>Order Delivered</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-detail-top">
                        <div className="order-detail-tab">
                            <p>General</p> 
                        </div>
                        <div className="order-detail-top-2">
                            <p className="order-detail-subheading">Customer Information</p>
                            <p className="order-detail-text">Farouk</p>
                            <p className="order-detail-text">Bakre</p>
                            <p className="order-detail-text">faroukbakre@yahoo.com</p>
                            <p className="order-detail-text">08145251688</p>
                            <p className="order-detail-text">13 Bola Adegbite Street, Odogunyan,</p>
                            <p className="order-detail-text">Ikorodu,</p>
                            <p className="order-detail-text">Lagos,</p>
                            <p className="order-detail-text">Nigeria.</p>
                        </div>
                        <div className="order-detail-top-2">
                            <p className="order-detail-subheading">Product Information</p>
                            <table className="order-detail-product-information">
                                <thead>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="">Plain Casual Beach Shirt</a></td>
                                        <td>₦14,000</td>
                                        <td>4</td>
                                        <td>₦56,000</td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Plain Casual Beach Shirt</a></td>
                                        <td>₦14,000</td>
                                        <td>4</td>
                                        <td>₦56,000</td>
                                    </tr>
                                    <tr>
                                        <td><a href="">Plain Casual Beach Shirt</a></td>
                                        <td>₦14,000</td>
                                        <td>4</td>
                                        <td>₦56,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="order-detail-top-2">
                            <p className="order-detail-subheading">Summary</p>
                            <table className="order-detail-product-information-2">
                                <tbody>
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td>₦168,000</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping:</td>
                                        <td>₦14,000</td>
                                    </tr>
                                    <tr>
                                        <td>Total:</td>
                                        <td>₦182,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Orderdetail;
