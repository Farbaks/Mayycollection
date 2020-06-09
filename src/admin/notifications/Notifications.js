import React from 'react';
import '../../assets/style/admin.css';
import '../../assets/style/animation.css';
import AdminSideNav from '../../template/AdminSideNav';
import AdminHeader from '../../template/AdminHeader';

import { Tabs } from 'antd';
import 'antd/es/tabs/style/index.css';
import { Timeline }  from 'antd';
import 'antd/es/timeline/style/index.css';

const { TabPane } = Tabs;



document.getElementById("title").innerHTML="Admin | Notifications - Mayy Collection";

class Notifications extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            visible: false ,
            modalSettings:{
                modalTitle:"Add New Coupon"
            }
        };
    } 

    callback(key) {
        console.log(key);
    }
    
    render () {
        return (
            <div className="admin-content">
                <AdminHeader pageTitle = {"Notifications"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                        {/* <p className="top-content-heading">Notifications</p> */}
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab="Notifications" key="1">
                                <div className="fullwidth mid-cards">
                                    <div className="notification-item flex-row6">
                                        <div className="flex-row6">
                                            <div className="notification-item-image-item">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt4.jpg'} alt="empty cart" />
                                            </div>
                                            <div className="notification-item-text">
                                                <p>ASOS Casual Shirt was added</p>
                                                <i>Product</i>
                                            </div>
                                        </div>
                                        <div className="notification-item-text">
                                            <p>23/2/2020</p>
                                        </div>
                                    </div>
                                    <div className="notification-item flex-row6">
                                        <div className="flex-row6">
                                            <div className="notification-item-image-item">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt18.jpg'} alt="empty cart" />
                                            </div>
                                            <div className="notification-item-text">
                                                <p>ASOS Casual Shirt was added</p>
                                                <i>Product</i>
                                            </div>
                                        </div>
                                        <div className="notification-item-text">
                                            <p>23/2/2020</p>
                                        </div>
                                    </div>
                                    <div className="notification-item flex-row6">
                                        <div className="flex-row6">
                                            <div className="notification-item-image-item">
                                                <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                                            </div>
                                            <div className="notification-item-text">
                                                <p>ASOS Casual Shirt was added</p>
                                                <i>Product</i>
                                            </div>
                                        </div>
                                        <div className="notification-item-text">
                                            <p>23/2/2020</p>
                                        </div>
                                    </div>
                                    <div className="notification-item flex-row6">
                                        <div className="flex-row6">
                                            <div className="notification-item-image-item">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt8.jpg'} alt="empty cart" />
                                            </div>
                                            <div className="notification-item-text">
                                                <p>ASOS Casual Shirt was added</p>
                                                <i>Product</i>
                                            </div>
                                        </div>
                                        <div className="notification-item-text">
                                            <p>23/2/2020</p>
                                        </div>
                                    </div>
                                    <div className="notification-item flex-row6">
                                        <div className="flex-row6">
                                            <div className="notification-item-image-item">
                                                <img src={process.env.PUBLIC_URL+'/images/shirt4.jpg'} alt="empty cart" />
                                            </div>
                                            <div className="notification-item-text">
                                                <p>ASOS Casual Shirt was added</p>
                                                <i>Product</i>
                                            </div>
                                        </div>
                                        <div className="notification-item-text">
                                            <p>23/2/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Activities" key="2">
                                <div className="fullwidth mid-cards padding1520">
                                <Timeline>
                                    <Timeline.Item>
                                        <p className="timeline-date">2018-03-01</p>
                                        <p className="timeline-content">Your order starts processing</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <p className="timeline-date">2018-03-02</p>
                                        <p className="timeline-content">Order out of stock</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <p className="timeline-date">2018-03-10</p>
                                        <p className="timeline-content">Arrival</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <p className="timeline-date">2018-03-12</p>
                                        <p className="timeline-content">Order out of the library</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <p className="timeline-date">2018-03-15</p>
                                        <p className="timeline-content">Sending you a piece</p>
                                    </Timeline.Item>
                                </Timeline>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notifications;
