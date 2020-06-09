import React from 'react';
// import 'bootstrap';
import { Checkbox } from 'antd';
import 'antd/es/checkbox/style/index.css';
import { Timeline }  from 'antd';
import 'antd/es/timeline/style/index.css';
import { Table } from 'antd';
import 'antd/es/table/style/index.css';

import {
    PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell
  } from 'recharts';
  import "react-modern-calendar-datepicker/lib/DatePicker.css";
  import { Calendar } from "react-modern-calendar-datepicker";
  
import '../../assets/style/admin.css';
import AdminSideNav from '../../template/AdminSideNav';
import AdminHeader from '../../template/AdminHeader';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];
const data1 = [
    { name: 'Asos Design T-shirt', value: 400 }, { name: 'Aztech Blue Lightning Cap', value: 300 },
    { name: 'Aztech Camo T-shirt', value: 300 }, { name: 'Mayy Collection Beach Sandals', value: 200 },
    { name: 'H & M Casual Shirt', value: 278 },
];



function hideTask() {
    let taskField = document.getElementById('newtaskfield');
    taskField.style.display = "none";
}
function showTask() {
    let taskField = document.getElementById('newtaskfield');
    taskField.style.display = "contents";
}
  
const COLORS = ['#0088FE', '#FF1082', '#FFBB28', '#FF8042', '#00C49F'];

document.getElementById("title").innerHTML="Admin | Report - Mayy Collection";   


class Report extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            visible: false ,
            modalSettings:{
                modalTitle:""
            }
        };
    } 

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
        }
    ];
      
    data = [
        {
            key:1,
            orderId: "2341",
            orderedBy: "Bakre Farouk",
            orderDate:"22/04/2020",
            numberOfItems:"12",
            totalPrice: "₦50,000"
        },
        {
            key:2,
            orderId: "2391",
            orderedBy: "Funke Akindele",
            orderDate:"12/09/2020",
            numberOfItems:"3",
            totalPrice: "₦234,000"
        },
        {
            key:3,
            orderId: "2342",
            orderedBy: "Bakre Farouk",
            orderDate:"22/04/2021",
            numberOfItems:"10",
            totalPrice: "₦10,000"
        },
        {
            key:4,
            orderId: "2342",
            orderedBy: "Fuad Adedeji",
            orderDate:"22/04/2021",
            numberOfItems:"10",
            totalPrice: "₦12,450"
        },
        {
            key:5,
            orderId: "2342",
            orderedBy: "Fuad Adedeji",
            orderDate:"22/04/2021",
            numberOfItems:"10",
            totalPrice: "₦12,450"
        }
    ];

    columns1 = [
        {
            title: 'Product Name',
            dataIndex: 'productName',
            className: 'columnheader'
        },
        {
            title: 'PRICE',
            dataIndex: 'price',
            className: 'columnheader'
        },
        {
            title: 'NUMBER SOLD',
            dataIndex: 'numberSold',
            className: 'columnheader'
        },
        {
            title: 'SALES',
            dataIndex: 'sales',
            className: 'columnheader'
        }
        
    ];
      
    data1 = [
        {
            key:1,
            productName: "ASOS Casual T-shirt",
            price:"₦50,000",
            numberSold:"12",
            sales:"₦600,000"
        },
        {
            key:2,
            productName: "ASOS Casual Beach T-shirt",
            price:"₦5,000",
            numberSold:"12",
            sales:"₦60,000"
        },
        {
            key:3,
            productName: "AZTECH Polo Shirt",
            price:"₦6,500",
            numberSold:"112",
            sales:"₦7,320,000"
        },
        {
            key:4,
            productName: "AZTECH Lightning Baseball Cap",
            price:"₦5,000",
            numberSold:"8",
            sales:"₦40,000"
        },
        {
            key:5,
            productName: "ASOS Casual T-shirt",
            price:"₦50,000",
            numberSold:"12",
            sales:"₦60,000"
        }
    ];

    
    
    render () {
        return (
        
            <div className="admin-content">
                <AdminHeader pageTitle = {"Report"}/>
                <div className="admin-bottombar">
                    <AdminSideNav />
                    <div className="admin-maincontent">
                    <p className="top-content-heading">Report</p>
                        <div className="fullwidth flex-row">
                            <div className="onequarterwidth small-charts">
                                <div className="small-charts-part">
                                    <LineChart width={100} height={60} data={data}>
                                        <Line dataKey="pv" stroke="rgb(41, 122, 206)" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </div>
                                <div className="small-charts-part">
                                    <p>Orders</p>
                                    <p>113</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="small-charts-part">
                                    <BarChart width={100} height={60} data={data}>
                                        <Bar dataKey="uv" fill="rgb(188, 13, 34)" />
                                    </BarChart>
                                </div>
                                <div className="small-charts-part">
                                    <p>Customers</p>
                                    <p>800</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="small-charts-part">
                                    <LineChart width={100} height={60} data={data}>
                                        <Line dataKey="pv" stroke="rgb(238, 198, 20)" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </div>
                                <div className="small-charts-part">
                                    <p>Products</p>
                                    <p>1,657</p>
                                </div>
                            </div>
                            <div className="onequarterwidth small-charts">
                                <div className="small-charts-part">
                                    <AreaChart width={100} height={60} data={data} >
                                        <Area type="monotone" dataKey="uv" stroke="rgb(144,238,144)" fill="rgb(144,238,144)" />
                                    </AreaChart>
                                </div>
                                <div className="small-charts-part">
                                    <p>Revenue</p>
                                    <p><i className='fas fa-angle-up green'></i>₦<span>119,000</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="fullwidth flex-row baseline">
                            <div className="halfwidth mid-cards height400 padding1520">
                                <p className="mid-cards-heading margin20">Sales</p>
                                <div className="fullwidth mid-cards-pie">
                                    <ResponsiveContainer>
                                        <AreaChart width={100} height={250} data={data}
                                        margin={{ top: 10, right: 15, left: -15, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.4}/>
                                                    <stop offset="35%" stopColor="#82ca9d" stopOpacity={0.1}/>
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"dot={{ stroke: '#82ca9d', strokeWidth: 2 }} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="halfwidth mid-cards height400 padding1520">
                                <p className="mid-cards-heading margin20">Orders</p>
                                <div className="fullwidth mid-cards-pie">
                                    <ResponsiveContainer>
                                        <BarChart width={100} height={250} data={data}
                                        margin={{ top: 10, right: 15, left: -15, bottom: 0 }}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fillOpacity={1} fill="rgb(47, 80, 153)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div> 
                        <div className="fullwidth flex-row baseline">
                            <div className="twothirdwidth mid-cards padding1520">
                                <p className="mid-cards-heading">Top Orders</p>
                                <div className="fullwidth flex-row overflow">
                                    <Table
                                        columns={this.columns}
                                        dataSource={this.data}
                                        className='producttable'
                                        rowClassName='tablerow'
                                        pagination={false}
                                    />
                                </div>
                            </div>
                            <div className="onethirdwidth mid-cards padding1520">
                                <p className="mid-cards-heading">Top Sales By Category</p>
                                <div className="fullwidth mid-cards-pie">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie cy="40%" dataKey="value" isAnimationActive={false} data={data1} outerRadius={85} innerRadius={0} fill="#8884d8">
                                            {
                                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                            }
                                            </Pie>
                                            <Tooltip />
                                            <Legend align='left' iconType='square'  />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="fullwidth flex-row baseline">
                            <div className="onethirdwidth mid-cards ">
                                <p className="mid-cards-heading padding1520">Impression</p>
                                <div className="fullwidth mid-cards-pie">
                                    <ResponsiveContainer>
                                        <AreaChart width={100} height={100} data={data}
                                        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
                                            <defs>
                                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="orange" stopOpacity={0.15}/>
                                                    <stop offset="55%" stopColor="orange" stopOpacity={0.1}/>
                                                    <stop offset="80%" stopColor="orange" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <Tooltip />
                                            <Legend />
                                            <Area type="basis" dataKey="pv" stroke="orange" fillOpacity={1} fill="url(#colorPv2)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="twothirdwidth mid-cards padding1520">
                                <p className="mid-cards-heading">Top Products</p>
                                <div className="fullwidth flex-row overflow">
                                    <Table
                                        columns={this.columns1}
                                        dataSource={this.data1}
                                        className='producttable'
                                        rowClassName='tablerow'
                                        pagination={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Report;
