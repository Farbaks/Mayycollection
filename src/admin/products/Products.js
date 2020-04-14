import React from 'react';
import '../../assets/style/admin.css';
import AdminSideNav from '../../template/AdminSideNav';
import AdminHeader from '../../template/AdminHeader';

import { Table } from 'antd';
import 'antd/es/table/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/empty/style/index.css';
import 'antd/es/radio/style/index.css';
import 'antd/es/checkbox/style/index.css';
import 'antd/es/dropdown/style/index.css';
import 'antd/es/spin/style/index.css';
import 'antd/es/pagination/style/index.css';
import 'antd/es/tooltip/style/index.css';

const columns = [
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
        title: 'ACTION',
        dataIndex: 'action',
        className: 'columnheader'
    },
];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
  ];

  function showTotal() {
    return `Total ${data.length} items`;
  }

function Products() {
    
    document.getElementById("title").innerHTML="Admin | Products - Mayy Collection";   
    
  
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
                    <div className="fullwidth flex-row2">
                        <div>
                            
                        </div>
                        <a className="mid-cards-link" href="">+ Add new product</a>
                    </div>
                    <div className="fullwidth flex-row overflow">
                    <Table
                        columns={columns}
                        dataSource={data}
                        className='producttable'
                        pagination={{ position: ['bottomCenter'], size:"small", showTotal:showTotal }}
                        rowClassName='tablerow'
                    />
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Products;
