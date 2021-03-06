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




document.getElementById("title").innerHTML="Admin | Products - Mayy Collection";

class Products extends React.Component {
    
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
                modalTitle:"Add New Product"
            }
        };
    } 

    
    
    showTotal = () => {
        return `Total ${this.data.length} items`;
    }
    
    showNewModal = () => {
        console.log("testing 1");
        this.setState({
          visible: true,
          modalSettings:{
            modalTitle:"Add New Product"
          }
        });
    };
    showEditModal = () => {
        console.log("testing");
        this.setState({
          visible: true,
          modalSettings:{
            modalTitle:"Edit Product"
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
            title: 'PRODUCTID',
            dataIndex: 'productid',
            className: 'columnheader'
        },
        {
            title: 'CATEGORY',
            dataIndex: 'category',
            className: 'columnheader'
        },
        {
            title: 'SIZE',
            dataIndex: 'size',
            className: 'columnheader'
        },
        {
            title: 'COLOR',
            dataIndex: 'color',
            className: 'columnheader'
        },
        {
            title: 'QUANTITY',
            dataIndex: 'quantity',
            className: 'columnheader'
        },
        {
            title: 'PRICE',
            dataIndex: 'price',
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
        img: <div className="product-item-image-item">
                <img src={process.env.PUBLIC_URL+'/images/shoe4.jpg'} alt="empty cart" />
            </div>,
        name: 'ASOS Design Chelsea boots',
        productid: '00043',
        category: 'Men\'s Shoes',
        size: 'Medium',
        color: 'Black',
        quantity: '12',
        price: '₦5,000',
        status: 'Active',
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
        <i className="fas fa-trash-alt producticon"></i></div>
    },
    {
        key: '2',
        img: <div className="product-item-image-item">
                    <img src={process.env.PUBLIC_URL+'/images/shirt4.jpg'} alt="empty cart" />
                </div>,
        name: 'ASOS Design Polo Shirt',
        productid: '00053',
        category: 'Women\'s Shoes',
        size: 'Medium',
        color: 'Black',
        quantity: '12',
        price: '₦5,000',
        status: 'Active',
        action: <div><i className="fas fa-edit editicon producticon" onClick={this.showEditModal}></i>
        <i className="fas fa-trash-alt producticon" ></i></div>
    },
    {
        key: '3',
        img: <div className="product-item-image-item">
                    <img src={process.env.PUBLIC_URL+'/images/shirt9.jpg'} alt="empty cart" />
                </div>,
        name: 'AZTECH Polo Shirt',
        productid: '00043',
        category: `Men's Polos`,
        size: 'Medium',
        color: 'Black',
        quantity: '12',
        price: '₦5,000',
        status: 'Active',
        action: <div><i className="fas fa-edit editicon producticon"  onClick={this.showEditModal}></i>
        <i className="fas fa-trash-alt producticon" ></i></div>
    },
    
    
    ];

    render () {
        const uploadButton = (
            <div className="margin">
              <PlusOutlined />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        return (
            <div className="admin-content">
                <AdminHeader pageTitle = {"Products"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                        <p className="top-content-heading">Products</p>
                        <div className="fullwidth flex-row">
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Total Products</p>
                                    <p>113</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Out of stock</p>
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="fullwidth product-info">
                                    <p>Total Items</p>
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
                            <button className="mid-cards-link1" onClick={this.showNewModal}>+ Add new product</button>
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
                            title={this.state.modalSettings.modalTitle}
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            width={600}
                            className="fullwidth product-input"
                        >
                            <div className="flex-row fullwidth">
                                <label className="formtext">Name of product:</label>
                                <input type="text" placeholder="Product name" className="fullwidth"/>
                            </div>
                            <div className="flex-row fullwidth">
                                <label className="formtext">Product description:</label>
                                <textarea type="text" placeholder="Product description" className="fullwidth"></textarea>
                            </div>
                            <div className="flex-row3 fullwidth">
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Category:</label>
                                    <input type="text" placeholder="Category" className="fullwidth"/>
                                </div>
                                <div className="halfwidth flex-column2">
                                    <label className="formtext">Gender:</label>
                                    <Radio.Group>
                                        <Radio value={1}>Men</Radio>
                                        <Radio value={2}>Women</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Size:</label>
                                    <input type="text" placeholder="Size" className="fullwidth"/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Color:</label>
                                    <input type="text" placeholder="Color" className="fullwidth"/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Quantity:</label>
                                    <input type="number" placeholder="Quantity" className="fullwidth"/>
                                </div>
                            </div>
                            <div className="fullwidth flex-row3">
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Cost:</label>
                                    <input type="text" placeholder="Cost of product" className="fullwidth"/>
                                </div>
                                <div className="onethirdwidth flex-column2">
                                    <label className="formtext">Sale Price:</label>
                                    <input type="text" placeholder="Product's selling price" className="fullwidth"/>
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
                            <div className="fullwidth flex-row">
                                <label className="formtext">Product Images:</label>
                                <Upload
                                listType="picture-card"
                                fileList={this.state.fileList}
                                onChange={this.handleChange}
                                >
                                {this.state.fileList.length >= 2 ? null : uploadButton}
                                </Upload>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
