import React from 'react';
import '../../assets/style/admin.css';
import '../../assets/style/animation.css';
import AdminSideNav from '../../template/AdminSideNav';
import AdminHeader from '../../template/AdminHeader';

import { Tabs } from 'antd';
import 'antd/es/tabs/style/index.css';
import { Upload, message, Button } from 'antd';
import 'antd/es/upload/style/index.css';
import 'antd/es/button/style/index.css';

const { TabPane } = Tabs;



document.getElementById("title").innerHTML="Admin | Account - Mayy Collection";

class Account extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            visible: false ,
            modalSettings:{
                modalTitle:"Add New Coupon"
            },
            uploadSettings: {

            }
        };
    } 

    callback(key) {
        console.log(key);
    }
    
    render () {
        return (
            <div className="admin-content">
                <AdminHeader pageTitle = {"Account"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                        {/* <p className="top-content-heading">Account</p> */}
                        <div className="fullwidth mid-cards padding-side20">
                            <Tabs defaultActiveKey="1" onChange={this.callback} className="fullwidth">
                                <TabPane tab="Account" key="1">
                                    <div className="fullwidth mid-cards  padding1520">
                                        <div className="fullwidth flex-row5">
                                            <div className="admin-account-image">
                                                <img src={process.env.PUBLIC_URL+'/images/useravatar.svg'} alt="empty cart" />
                                            </div>
                                            <div className="notification-item-text">
                                                <p>Bakre Farouk</p>
                                                <p>faroukbakre@yahoo.com</p>
                                                <p>08145251688</p>
                                                <br/>
                                                <Upload>
                                                    <Button>
                                                    Change Avatar
                                                    </Button>
                                                </Upload>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="fullwidth product-input">
                                            <div className="fullwidth flex-row3">
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">First Name:</label>
                                                    <input type="text" placeholder="First Name" className="fullwidth"/>
                                                </div>
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">Last Name:</label>
                                                    <input type="text" placeholder="Last Name" className="fullwidth"/>
                                                </div>
                                            </div>
                                            <div className="fullwidth flex-row3">
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">Email:</label>
                                                    <input type="text" placeholder="Email" className="fullwidth"/>
                                                </div>
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">Telephone:</label>
                                                    <input type="text" placeholder="Telephone" className="fullwidth"/>
                                                </div>
                                            </div>
                                            <div className="flex-row fullwidth">
                                                <label className="formtext">Address:</label>
                                                <input type="text" placeholder="Address" className="fullwidth"/>
                                            </div>
                                            <div className="fullwidth flex-row3">
                                                <div className="onethirdwidth flex-row">
                                                    <label className="formtext">Country:</label>
                                                    <select className="fullwidth">
                                                        <option>Nigeria</option>
                                                    </select>
                                                </div>
                                                <div className="onethirdwidth flex-row">
                                                    <label className="formtext">State:</label>
                                                    <select className="fullwidth">
                                                        <option>Lagos</option>
                                                    </select>
                                                </div>
                                                <div className="onethirdwidth flex-row">
                                                    <label className="formtext">City:</label>
                                                    <select className="fullwidth">
                                                        <option>Ikorodu</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="fullwidth admin-account-button-container">
                                                <button>Reset</button>
                                                <button>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Password" key="2">
                                    <div className="fullwidth mid-cards">
                                        <div className="fullwidth product-input">
                                            <div className="fullwidth flex-column2">
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">Old Password:</label>
                                                    <input type="password" placeholder="Old Password" className="fullwidth"/>
                                                </div>
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">New Password:</label>
                                                    <input type="password" placeholder="New Password" className="fullwidth"/>
                                                </div>
                                                <div className="flex-row halfwidth">
                                                    <label className="formtext">Reset Password:</label>
                                                    <input type="password" placeholder="Reset Password" className="fullwidth"/>
                                                </div>
                                            </div>
                                            <div className="fullwidth admin-account-button-container">
                                                <button>Reset</button>
                                                <button>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
