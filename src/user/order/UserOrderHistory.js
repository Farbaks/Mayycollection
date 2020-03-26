import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import UserSideNav from '../../template/UserSideNav';
import '../../assets/style/UserAccount.css';
import '../../assets/style/UserOrderHistory.css';

function UserOrderHistory() {
    
    document.getElementById("title").innerHTML="Order History - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Order History"}/>
                        <div className="user-account-maincontent">
                            <p className="user-heading">Order History</p>
                            <div className="user-account-profile">
                                
                                <div className="fullwidth flex-column align-flex-start">
                                    <div className="fullwidth user-order-item">
                                        <div className="user-order-item-top">
                                            <p>Order no.: <span>3421FRE578S21</span></p>
                                            <p>Order date: <span>23/12/2020, 12:20</span></p>
                                            <p>Total: <span>₦14,000</span></p>
                                            <p>Status: <span>Delivered</span></p>
                                        </div>
                                        <div className="user-order-item-bottom">
                                            <div className="user-order-item-image-list">
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shirt4.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shirt11.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                                                </div>
                                            </div>
                                            <div className="user-order-item-button">
                                                <a href="/user/order-detail">View Order</a>
                                                <a href="">Track Order</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fullwidth user-order-item">
                                        <div className="user-order-item-top">
                                            <p>Order no.: <span>3421FRE578S21</span></p>
                                            <p>Order date: <span>23/12/2020, 12:20</span></p>
                                            <p>Total: <span>₦14,000</span></p>
                                            <p>Status: <span>Delivered</span></p>
                                        </div>
                                        <div className="user-order-item-bottom">
                                            <div className="user-order-item-image-list">
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shoe3.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shirt6.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shirt12.jpg'} alt="empty cart" />
                                                </div>
                                            </div>
                                            <div className="user-order-item-button">
                                                <a href="/user/order-detail">View Order</a>
                                                <a href="">Track Order</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fullwidth user-order-item">
                                        <div className="user-order-item-top">
                                            <p>Order no.: <span>3421FRE578S21</span></p>
                                            <p>Order date: <span>23/12/2020, 12:20</span></p>
                                            <p>Total: <span>₦14,000</span></p>
                                            <p>Status: <span>Delivered</span></p>
                                        </div>
                                        <div className="user-order-item-bottom">
                                            <div className="user-order-item-image-list">
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shirt10.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/shirt14.jpg'} alt="empty cart" />
                                                </div>
                                                <div className="user-order-item-image-item">
                                                    <img src={process.env.PUBLIC_URL+'/images/bag.jpg'} alt="empty cart" />
                                                </div>
                                            </div>
                                            <div className="user-order-item-button">
                                                <a href="/user/order-detail">View Order</a>
                                                <a href="">Track Order</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default UserOrderHistory;
