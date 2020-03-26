import React from 'react';
import Header from '../../../template/Header';
import Footer from '../../../template/Footer';
import UserSideNav from '../../../template/UserSideNav';
import '../../../assets/style/UserAccount.css';
import '../../../assets/style/UserOrderHistory.css';

function UserOrderDetail() {
    
    document.getElementById("title").innerHTML="Order History - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Order Details"}/>
                        <div className="user-account-maincontent">
                            <p className="user-heading">Order Details</p>
                            <div className="user-order-item-top">
                                <p>Order no.: <span>3421FRE578S21</span></p>
                                <p>Order date: <span>23/12/2020, 12:20</span></p>
                                <p>Status: <span>Delivered</span></p>
                            </div>
                            
                            <p className="user-subtitle"><span>4</span> ITEMS</p>
                            <div className="user-account-profile">
                                <div className="fullwidth flex-row align-flex-start">
                                    <div className="user-order-product-list">
                                        <div className="user-order-product-item">
                                            <a href="" className="user-order-product-item-image">
                                                <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                                            </a>
                                            <div className="user-order-items-card-detail">
                                                <a href="" className="user-order-items-card-name">
                                                    ASOS DESIGN regular stripe shirt in navy and brown
                                                </a>
                                                <div className="saved-items-card-price">
                                                    <p className="sale-price">₦4,000</p>
                                                    <p className="normal-price">₦5,900</p>
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    Black
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    L
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-order-product-item">
                                            <a href="" className="user-order-product-item-image">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt18.jpg'} alt="empty cart" />
                                            </a>
                                            <div className="user-order-items-card-detail">
                                                <a href="" className="user-order-items-card-name">
                                                    ASOS DESIGN regular stripe shirt in navy and brown
                                                </a>
                                                <div className="saved-items-card-price">
                                                    <p className="sale-price">₦4,000</p>
                                                    <p className="normal-price">₦5,900</p>
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    Black
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    L
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-order-product-item">
                                            <a href="" className="user-order-product-item-image">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt19.jpg'} alt="empty cart" />
                                            </a>
                                            <div className="user-order-items-card-detail">
                                                <a href="" className="user-order-items-card-name">
                                                    ASOS DESIGN regular stripe shirt in navy and brown
                                                </a>
                                                <div className="saved-items-card-price">
                                                    <p className="sale-price">₦4,000</p>
                                                    <p className="normal-price">₦5,900</p>
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    Black
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    L
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="user-order-product-item">
                                            <a href="" className="user-order-product-item-image">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt18.jpg'} alt="empty cart" />
                                            </a>
                                            <div className="user-order-items-card-detail">
                                                <a href="" className="user-order-items-card-name">
                                                    ASOS DESIGN regular stripe shirt in navy and brown
                                                </a>
                                                <div className="saved-items-card-price">
                                                    <p className="sale-price">₦4,000</p>
                                                    <p className="normal-price">₦5,900</p>
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    Black
                                                </div>
                                                <div className="user-order-items-card-name card-line">
                                                    L
                                                </div>
                                            </div>
                                        </div>                                   
                                    </div>  
                                    <div className="user-order-product-side">
                                        <div className="">
                                            <p className="order-detail-subheading">Shipping Information</p>
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
                                                        <td>Discount:</td>
                                                        <td>-₦14,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total:</td>
                                                        <td><b>₦182,000</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default UserOrderDetail;
