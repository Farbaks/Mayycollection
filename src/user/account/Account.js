import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import UserSideNav from '../../template/UserSideNav';
import '../../assets/style/UserAccount.css';

function Account() {
    
    document.getElementById("title").innerHTML="Account Information - Mayy Collection";   
    
  
    return (
     
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <div className="user-account-div">
                        <UserSideNav pageTitle = {"Account Information"}/>
                        <div className="user-account-maincontent">
                            <p className="user-heading">Account Information</p>
                            <div className="user-account-profile">
                                <div className="fullwidth flex-row align-flex-start">
                                    <div className="onethirdwidth flex-column">
                                        <div className="user-profile-picture">
                                            <img src={process.env.PUBLIC_URL+'/images/useravatar.svg'} alt="empty cart" />
                                        </div>
                                        <div className="user-profile-button">
                                            <button>Edit</button>
                                            <button>Remove Picture</button>
                                        </div>
                                    </div>
                                    <div className="twothirdwidth flex-row">
                                        <label>About Me</label>
                                        <textarea />
                                    </div>
                                </div>
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>First name</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="halfwidth flex-row">
                                        <label>Last name</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="fullwidth flex-row">
                                    <div className="halfwidth flex-row">
                                        <label>Email</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="halfwidth flex-row">
                                        <label>Phone number</label>
                                        <input type="text"/>
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

export default Account;
