import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import UserSideNav from '../../template/UserSideNav';
import '../../assets/style/UserAccount.css';

function Address() {
    
    document.getElementById("title").innerHTML="Address - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Address"}/>
                        <div className="user-account-maincontent">
                            <p className="user-heading">Address</p>
                            <div className="user-account-profile">
                                <div className="fullwidth flex-row">
                                    <label>Address</label>
                                    <input type="text"/>
                                </div>
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>Country</label>
                                        <select>
                                            <option>Nigeria</option>
                                        </select>
                                    </div>
                                    <div className="halfwidth flex-row">
                                        <label>State</label>
                                        <select>
                                            <option>Lagos</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>City</label>
                                        <select>
                                            <option>Ikorodu</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="user-account-button-container">
                                    <button>Reset</button>
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

export default Address;
