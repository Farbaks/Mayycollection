import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import UserSideNav from '../../template/UserSideNav';
import '../../assets/style/UserAccount.css';
import '../../assets/style/UserOrderHistory.css';

function UserCustomItems() {
    
    document.getElementById("title").innerHTML="Custom Order Detail - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Custom Order Detail"} />
                        <div className="user-account-maincontent">
                            <p className="user-heading"> Custom Order Detail </p>
                            <div className="user-order-item-top">
                                <p>Order no.: <span>3421FRE578S21</span></p>
                                <p>Order date:  <span>-</span></p>
                                <p>Status: <span>Awaiting Quote</span></p>
                            </div>
                            <p className="user-subtitle"><span>4</span> ITEMS</p>
                            <div className="order-detail-top-2">
                                <table className="order-detail-product-information">
                                    <thead>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Color</th>
                                        <th>Quantity</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="">Plain Casual Beach Shirt</a></td>
                                            <td>Polos</td>
                                            <td>Red</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td><a href="">Plain Casual Beach Shirt</a></td>
                                            <td>T-shirt</td>
                                            <td>White</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><a href="">Plain Casual Beach Shirt</a></td>
                                            <td>Sweater</td>
                                            <td>Pink</td>
                                            <td>8</td>
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

export default UserCustomItems;
