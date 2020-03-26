import React from 'react';
import '../assets/style/UserAccount.css';

function UserSideNav(props) {
    
    document.getElementById("title").innerHTML="Account Information - Mayy Collection"; 
      
    
    function openfilter(n) {
        if (document.getElementById(n+"-list").style.display != "flex") {
            document.getElementById(n+"-list").style.display = "flex";
            document.getElementById(n+"-bar1").style.display = "none";
        }
        else {
            document.getElementById(n+"-list").style.display = "none";
            document.getElementById(n+"-bar1").style.display = "block";
        }
    }
    
    function showfilter() {
        document.getElementById("filter-container").style.display = "flex";
    }
    function hidefilter() {
        document.getElementById("filter-container").style.display = "none";
    }
  
    return (
            <div>
                <div className="user-account-sidebar"  id="filter-container">
                <div className="user-menu-title">
                    <span>Account Menu</span>
                    <div className="cancel" onClick={hidefilter}><div></div></div>
                </div>
                <div className="user-account-sidebar-image">
                    <img src={process.env.PUBLIC_URL+'/images/useravatar.svg'} alt="empty cart" />
                </div>
                <div className="user-account-sidebar-heading">Farouk Bakre</div>
                <a href="/user/account/address" className="user-account-sidebar-link">
                    <div className="user-account-sidebar-link-image">
                        <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user profile" />
                    </div>
                    <span>Address</span>
                </a>
                <a href="/user/account/profile" className="user-account-sidebar-link">
                    <div className="user-account-sidebar-link-image">
                        <img src={process.env.PUBLIC_URL+'/images/user2.svg'} alt="user profile" />
                    </div>
                    <span>Account Information</span>
                </a>
                <a href="/user/account/password" className="user-account-sidebar-link">
                    <div className="user-account-sidebar-link-image">
                        <img src={process.env.PUBLIC_URL+'/images/password.svg'} alt="password" />
                    </div>
                    <span>Password</span>
                </a>
                <a href="/user/order-history" className="user-account-sidebar-link">
                    <div className="user-account-sidebar-link-image">
                        <img src={process.env.PUBLIC_URL+'/images/order2.svg'} alt="order history" />
                    </div>
                    <span>Order History</span>
                </a>
                <a href="/user/custom-orders" className="user-account-sidebar-link">
                    <div className="user-account-sidebar-link-image">
                        <img src={process.env.PUBLIC_URL+'/images/customorder1.svg'} alt="custom order" />
                    </div>
                    <span>Custom Orders</span>
                </a>
                <a href="" className="user-account-sidebar-link">
                    <div className="user-account-sidebar-link-image">
                        <img src={process.env.PUBLIC_URL+'/images/logout.svg'} alt="logout" />
                    </div>
                    <span>Logout</span>
                </a>
            </div>
            <p className="user-heading1 text-center"> {props.pageTitle} </p>
            <span className="user-menu-link" onClick={showfilter}>Account Menu</span>
        </div>
          );
}

export default UserSideNav;
