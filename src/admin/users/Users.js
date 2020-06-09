import React from 'react';
import '../../assets/style/admin.css';
import '../../assets/style/animation.css';
import AdminSideNav from '../../template/AdminSideNav';
import AdminHeader from '../../template/AdminHeader';

import { Table } from 'antd';
import 'antd/es/table/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/empty/style/index.css';
import 'antd/es/dropdown/style/index.css';
import 'antd/es/spin/style/index.css';
import 'antd/es/pagination/style/index.css';
import 'antd/es/progress/style/index.css';
import 'antd/es/tooltip/style/index.css';

import { Input } from 'antd';
import 'antd/es/input/style/index.css';

import { Modal } from 'antd';
import 'antd/es/modal/style/index.css';

const { Search } = Input;




document.getElementById("title").innerHTML="Admin | Users - Mayy Collection";

class Users extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            visible: false ,
            modalSettings:{
                modalTitle:""
            }
        };
    } 

    
    
    showTotal = () => {
        return `Total ${this.data.length} items`;
    }
    
    
    showEditModal = () => {
        console.log("testing");
        this.setState({
          visible: true,
          modalSettings:{
            modalTitle:"Edit User"
          }
        });
    };
    
    
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    columns = [
        {
            title: '',
            dataIndex: 'img',
            className: 'columnheader'
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            className: 'columnheader'
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            className: 'columnheader'
        },
        {
            title: 'PHONE',
            dataIndex: 'phone',
            className: 'columnheader'
        },
        {
            title: 'AGE',
            dataIndex: 'age',
            className: 'columnheader'
        },
        {
            title: 'GENDER',
            dataIndex: 'gender',
            className: 'columnheader'
        },
        {
            title: 'DATE CREATED',
            dataIndex: 'date',
            className: 'columnheader'
        },
        {
            title: 'ACTION',
            dataIndex: 'action',
            className: 'columnheader'
        },
    ];
      
    data = [
        {
            key: '1',
            img: <div className="product-item-image-item">
                    <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
                </div>,
            name: 'Farouk Bakre',
            email: 'faroukbakre@yahoo.com',
            phone: '08145251688',
            age: '23',
            gender: 'Female',
            date: '23/12/2020',
            action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
            <i className="fas fa-trash-alt producticon"></i></div>
        },
        {
            key: '2',
            img: <div className="product-item-image-item">
                    <img src={process.env.PUBLIC_URL+'/images/shirt21.jpg'} alt="empty cart" />
                </div>,
            name: 'Funke Bakre',
            email: 'faroukbakre@gmail.com',
            phone: '08145251688',
            age: '34',
            gender: 'Male',
            date: '23/11/2019',
            action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
            <i className="fas fa-trash-alt producticon"></i></div>
        },
        {
            key: '3',
            img: <div className="product-item-image-item">
                    <img src={process.env.PUBLIC_URL+'/images/shirt18.jpg'} alt="empty cart" />
                </div>,
            name: 'Farouk Bakre',
            email: 'faroukbakre@yahoo.com',
            phone: '08145251688',
            age: '23',
            gender: 'Female',
            date: '23/12/2020',
            action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
            <i className="fas fa-trash-alt producticon"></i></div>
        },
        {
            key: '4',
            img: <div className="product-item-image-item">
                    <img src={process.env.PUBLIC_URL+'/images/shoe2.jpg'} alt="empty cart" />
                </div>,
            name: 'Farouk Bakre',
            email: 'faroukbakre@yahoo.com',
            phone: '08145251688',
            age: '20',
            gender: 'Female',
            date: '23/12/2020',
            action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
            <i className="fas fa-trash-alt producticon"></i></div>
        }
    
    ];

    render () {
        return (
            <div className="admin-content">
                <AdminHeader pageTitle = {"Users"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                        <p className="top-content-heading">Users</p>
                        <div className="fullwidth flex-row">
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Total Users</p>
                                    <p>113</p>
                                </div>
                            </div>
                            {/* <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Completed</p>
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Total Sales</p>
                                    <p>₦10,000</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Cancelled</p>
                                    <p>6</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="fullwidth mid-cards padding1520">
                            <div className="fullwidth flex-row3">
                                <Search
                                placeholder="Search for names, emails"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                                className="inputstyle1"
                                />
                            </div>
                            <div className="fullwidth flex-row overflow">
                                <Table
                                    columns={this.columns}
                                    dataSource={this.data}
                                    className='producttable'
                                    pagination={{ position: ['bottomCenter'], size:"small", showTotal:this.showTotal }}
                                    rowClassName='tablerow'
                                />
                            </div>
                        </div> 
                        <Modal
                            title={this.state.modalSettings.modalTitle}
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            width={600}
                            className="fullwidth product-input"
                        >   
                            <div className="flex-row fullwidth">
                                <label className="formtext">Name:</label>
                                <input type="text" placeholder="Name" className="fullwidth"/>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="flex-row halfwidth">
                                    <label className="formtext">Email:</label>
                                    <input type="email" placeholder="Email" className="fullwidth"/>
                                </div>
                                <div className="flex-row halfwidth">
                                    <label className="formtext">Phone:</label>
                                    <input type="text" placeholder="Phone" className="fullwidth"/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="flex-row halfwidth">
                                    <label className="formtext">Age:</label>
                                    <input type="age" placeholder="Age" className="fullwidth"/>
                                </div>
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Gender:</label>
                                    <select className="fullwidth">
                                        <option>Women</option>
                                        <option>Men</option>
                                    </select>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
