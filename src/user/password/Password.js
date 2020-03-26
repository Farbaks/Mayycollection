import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import UserSideNav from '../../template/UserSideNav';
import '../../assets/style/UserAccount.css';

function Password() {
    
    document.getElementById("title").innerHTML="Account Password - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Account Password"}/>
                        <div className="user-account-maincontent">
                            <p className="user-heading">Account Password</p>
                            <div className="user-account-profile">
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>Old Password</label>
                                        <input type="password"/>
                                    </div>
                                </div>
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>New Password</label>
                                        <input type="password"/>
                                    </div>
                                </div>
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>Re-enter Password</label>
                                        <input type="password"/>
                                    </div>
                                </div>
                                <div className="user-account-button-container">
                                    <button>Cancel</button>
                                    <button>Save</button>
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

export default Password;
