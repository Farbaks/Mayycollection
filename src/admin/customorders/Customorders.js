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

import { Upload } from 'antd';
import 'antd/es/upload/style/index.css';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;




document.getElementById("title").innerHTML="Admin | Custom Orders - Mayy Collection";

class Customorders extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            orderModalSettings:{
                modalTitle:"",
                visible: false
            },
            quoteModalSettings:{
                modalTitle:"",
                visible: false
            }
        };
    } 

    
    
    showTotal = () => {
        return `Total ${this.data.length} items`;
    }
    
    
    showOrderEditModal = () => {
        this.setState({
          orderModalSettings:{
            modalTitle:"Edit Order",
            visible: true,
          }
        });
    };

    showQuoteEditModal = () => {
        this.setState({
          quoteModalSettings:{
            modalTitle:"Edit Quote",
            visible: true,
          }
        });
    };
    
    showQuoteNewModal = () => {
        this.setState({
          quoteModalSettings:{
            modalTitle:"Create Quote",
            visible: true,
          }
        });
    };

    handleOrderOk = e => {
        console.log(e);
        this.setState({
            orderModalSettings:{
                visible: false
              }
        });
    };
    
    handleOrderCancel = e => {
        this.setState({
            orderModalSettings:{
                visible: false
              }
        });
    };

    handleQuoteOk = e => {
        console.log(e);
        this.setState({
                quoteModalSettings:{
                visible: false
              }
        });
    };
    
    handleQuoteCancel = e => {
        this.setState({
                quoteModalSettings:{
                visible: false
              }
        });
    };

    columns = [
        {
            title: 'ORDER ID',
            dataIndex: 'orderId',
            className: 'columnheader'
        },
        {
            title: 'ORDERED BY',
            dataIndex: 'orderedBy',
            className: 'columnheader'
        },
        {
            title: 'ORDER DATE',
            dataIndex: 'orderDate',
            className: 'columnheader'
        },
        {
            title: 'NUMBER OF ITEMS',
            dataIndex: 'numberOfItems',
            className: 'columnheader'
        },
        {
            title: 'TOTAL PRICE',
            dataIndex: 'totalPrice',
            className: 'columnheader'
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
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
        key:1,
        orderId: "2341",
        orderedBy: "Bakre Farouk",
        orderDate:"22/04/2020",
        numberOfItems:"12",
        totalPrice: "₦50,000",
        status: <div className="flex-row5"><div className="status bg-green"></div>Completed</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showOrderEditModal}></i>
        <i className="fas fa-eye producticon"></i><button className="admin-btn" onClick={this.showQuoteNewModal}>Create Quote</button></div>
    },
    {
        key:2,
        orderId: "2391",
        orderedBy: "Funke Akindele",
        orderDate:"12/09/2020",
        numberOfItems:"3",
        totalPrice: "₦234,000",
        status: <div className="flex-row5"><div className="status bg-orange"></div>Order Placed</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showOrderEditModal}></i>
        <i className="fas fa-eye producticon"></i><button className="admin-btn" onClick={this.showQuoteNewModal}>Create Quote</button></div>
    },
    {
        key:3,
        orderId: "2342",
        orderedBy: "Bakre Farouk",
        orderDate:"22/04/2021",
        numberOfItems:"10",
        totalPrice: "₦10,000",
        status: <div className="flex-row5"><div className="status bg-orange"></div>Shipping</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showOrderEditModal}></i>
        <i className="fas fa-eye producticon"></i><button className="admin-btn" onClick={this.showQuoteEditModal}>Edit Quote</button></div>
    },
    {
        key:4,
        orderId: "2342",
        orderedBy: "Fuad Adedeji",
        orderDate:"22/04/2021",
        numberOfItems:"10",
        totalPrice: "₦12,450",
        status: <div className="flex-row5"><div className="status bg-red"></div>Cancelled</div>,
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showOrderEditModal}></i>
        <i className="fas fa-eye producticon"></i><button className="admin-btn" onClick={this.showQuoteEditModal}>Edit Quote</button></div>
    }
    
    ];

    render () {
        return (
            <div className="admin-content">
                <AdminHeader pageTitle = {"Custom Orders"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                        <p className="top-content-heading">Custom Orders</p>
                        <div className="fullwidth flex-row">
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Total Orders</p>
                                    <p>113</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
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
                            </div>
                        </div>
                        <div className="fullwidth mid-cards padding1520">
                            <div className="fullwidth flex-row3">
                                <Search
                                placeholder="Search for items, categories, sizes, productid"
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
                            title={this.state.orderModalSettings.modalTitle}
                            visible={this.state.orderModalSettings.visible}
                            onOk={this.handleOrderOk}
                            onCancel={this.handleOrderCancel}
                            width={600}
                            className="fullwidth product-input"
                        >   
                            <div className="fullwidth flex-row3">
                                <div className="flex-row onequarterwidth">
                                    <label className="formtext">OrderID:</label>
                                    <input type="text" placeholder="OrderID" className="fullwidth" disabled/>
                                </div>
                                <div className="flex-row threequarterwidth">
                                    <label className="formtext">Ordered by:</label>
                                    <input type="text" placeholder="Ordered by" className="fullwidth" disabled/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Order Date:</label>
                                    <input type="date" placeholder="Date" className="fullwidth" disabled/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Number of Items:</label>
                                    <input type="number" placeholder="Number of items" className="fullwidth" disabled/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Total Price:</label>
                                    <input type="text" placeholder="Price" className="fullwidth" disabled/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Status:</label>
                                    <select className="fullwidth">
                                        <option>Select status</option>
                                        <option>Order Placed</option>
                                        <option>Order Packed</option>
                                        <option>Shipped</option>
                                        <option>Completed</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>
                                <br/>
                            </div>
                        </Modal>
                        <Modal
                            title={this.state.quoteModalSettings.modalTitle}
                            visible={this.state.quoteModalSettings.visible}
                            onOk={this.handleQuoteOk}
                            onCancel={this.handleQuoteCancel}
                            width={600}
                            className="fullwidth product-input"
                        >   
                            <div className="fullwidth flex-row3">
                                <div className="flex-row fullwidth">
                                    <label className="formtext">Ordered By:</label>
                                    <input type="text" placeholder="Ordered by" className="fullwidth" disabled/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="flex-row halfwidth">
                                    <label className="formtext">Email:</label>
                                    <input type="text" placeholder="mail" className="fullwidth" disabled/>
                                </div>
                                <div className="flex-row halfwidth">
                                    <label className="formtext">Telephone:</label>
                                    <input type="text" placeholder="Telephone" className="fullwidth" disabled/>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="fullwidth flex-row3">
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Product Name:</label>
                                    <input type="text" placeholder="Product Name" className="fullwidth" disabled/>
                                </div>
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Category:</label>
                                    <input type="text" placeholder="Category" className="fullwidth" disabled/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Size:</label>
                                    <input type="text" placeholder="Size" className="fullwidth" disabled/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Color:</label>
                                    <input type="text" placeholder="Color" className="fullwidth" disabled/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Quantity:</label>
                                    <input type="number" placeholder="Quantity" className="fullwidth" disabled/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Unit Price:</label>
                                    <input type="text" placeholder="Unit Price" className="fullwidth" readonly/>
                                </div>
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Subtotal:</label>
                                    <input type="text" placeholder="Category" className="fullwidth" value="3244" readonly/>
                                </div>
                            </div>
                            {/* <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Status:</label>
                                    <select className="fullwidth">
                                        <option>Select status</option>
                                        <option>Order Placed</option>
                                        <option>Order Packed</option>
                                        <option>Shipped</option>
                                        <option>Completed</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>
                                <br/>
                            </div> */}
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customorders;
