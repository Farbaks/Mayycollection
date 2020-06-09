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

import { Radio } from 'antd';
import 'antd/es/radio/style/index.css';

const { Search } = Input;




document.getElementById("title").innerHTML="Admin | Coupons - Mayy Collection";

class Coupons extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            visible: false ,
            fileList: [
                {
                  uid: '-1',
                  name: 'image.png',
                  status: 'done',
                  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                  uid: '-2',
                  name: 'image.png',
                  status: 'done',
                  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }
            ],
            modalSettings:{
                modalTitle:"Add New Coupon"
            }
        };
    } 

    
    
    showTotal = () => {
        return `Total ${this.data.length} items`;
    }
    
    showNewModal = () => {
        this.setState({
          visible: true,
          modalSettings:{
            modalTitle:"Add New Coupon"
          }
        });
    };
    showEditModal = () => {
        console.log("testing");
        this.setState({
          visible: true,
          modalSettings:{
            modalTitle:"Edit Coupon"
          }
        });
    };
    
    handleChange = ({ fileList }) => this.setState({ fileList });
    
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
            title: 'COUPON NAME',
            dataIndex: 'name',
            className: 'columnheader'
        },
        {
            title: 'COUPONID',
            dataIndex: 'couponid',
            className: 'columnheader'
        },
        {
            title: 'TYPE',
            dataIndex: 'type',
            className: 'columnheader'
        },
        {
            title: 'AMOUNT',
            dataIndex: 'amount',
            className: 'columnheader'
        },
        {
            title: 'DESCRIPTION',
            dataIndex: 'description',
            className: 'columnheader'
        },
        {
            title: 'LIMIT',
            dataIndex: 'limit',
            className: 'columnheader'
        },
        {
            title: 'EXPIRY',
            dataIndex: 'expiry',
            className: 'columnheader'
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            className: 'columnheader'
        },
        {
            title: 'ACTIONS',
            dataIndex: 'action',
            className: 'columnheader'
        },
    ];
      
    data = [
    {
        key: '1',
        name: 'MOTHERSDAY20',
        couponid: '00043',
        type:'Percentage',
        amount: '20',
        description:'Coupons for all mothers to enjoy their day.',
        limit:'4000',
        expiry: '22/2/2020',
        status: <div className="flex-row5"><div className="status bg-green"></div>Active</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
        <i className="fas fa-trash-alt producticon"></i></div>
    },
    {
        key: '2',
        name: 'FATHERSDAY35',
        couponid: '00043',
        type:'Price',
        amount: '20000',
        description:'Coupons for all fathers to enjoy their day.',
        limit:'400',
        expiry: '22/2/2020',
        status: <div className="flex-row5"><div className="status bg-orange"></div>Inactive</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
        <i className="fas fa-trash-alt producticon"></i></div>
    },
    {
        key: '3',
        name: 'BLVCKFRIDAY1',
        couponid: '00043',
        type:'Percentage',
        amount: '70',
        description:'Spend like no tommorow.',
        limit:'400',
        expiry: '22/2/2020',
        status: <div className="flex-row5"><div className="status bg-red"></div>Expired</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
        <i className="fas fa-trash-alt producticon"></i></div>
    },
    
    
    ];

    render () {
        return (
            <div className="admin-content">
                <AdminHeader pageTitle = {"Coupons"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                        <p className="top-content-heading">Coupons</p>
                        <div className="fullwidth flex-row">
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Total Coupons</p>
                                    <p>113</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Active Coupons</p>
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Expired Coupons</p>
                                    <p>453</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Categories</p>
                                    <p>6</p>
                                </div>
                            </div>
                        </div>
                        <div className="fullwidth mid-cards padding1520">
                            <div className="fullwidth flex-row3">
                            <button className="mid-cards-link1" onClick={this.showNewModal}>+ Add new coupon</button>
                                <Search
                                placeholder="Search for names, coupon id"
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
                                <label className="formtext">Name of Coupon:</label>
                                <input type="text" placeholder="Coupon name" className="fullwidth"/>
                            </div>
                            <div className="flex-row fullwidth">
                                <label className="formtext">Coupon description:</label>
                                <textarea type="text" placeholder="Coupon description" className="fullwidth"></textarea>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Type:</label>
                                    <select className="fullwidth">
                                        <option>Select type</option>
                                        <option>Percentage</option>
                                        <option>Price</option>
                                    </select>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Amount:</label>
                                    <input type="number" placeholder="Amount" className="fullwidth"/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">User Limit(Leave empty if no limit):</label>
                                    <input type="number" placeholder="Product's selling price" className="fullwidth"/>
                                </div>
                                <br/>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Start Date:</label>
                                    <input type="date" placeholder="Start date" className="fullwidth"/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Expiry Date:</label>
                                    <input type="date" placeholder="Expiry date" className="fullwidth"/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Status:</label>
                                    <select className="fullwidth">
                                        <option>Select status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <br/>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coupons;
