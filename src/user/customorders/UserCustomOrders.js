import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import UserSideNav from '../../template/UserSideNav';
import '../../assets/style/UserAccount.css';
import '../../assets/style/UserOrderHistory.css';

function UserCustomOrders() {
    
    document.getElementById("title").innerHTML="Custom Orders - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Custom Orders"}/>
                        <div className="user-account-maincontent">
                            <p className="user-heading"> Custom Orders </p>
                            <div className="order-detail-top-2">
                                <table className="order-detail-product-information">
                                    <thead>
                                        <th>Order No</th>
                                        <th>Status</th>
                                        <th>Order Date</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>342AF34</td>
                                            <td>Awaiting Quote</td>
                                            <td>-</td>
                                            <td><a href="/user/custom-order-detail">View Items</a></td>
                                        </tr>
                                        <tr>
                                            <td>342AF39</td>
                                            <td>Awaiting Order</td>
                                            <td>-</td>
                                            <td><a href="">View Quote</a> | <a href="">Place Order</a></td>
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
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default UserCustomOrders;
