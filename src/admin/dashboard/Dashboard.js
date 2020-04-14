import React from 'react';
// import 'bootstrap';
import { Checkbox } from 'antd';
import 'antd/es/checkbox/style/index.css';
import { Timeline }  from 'antd';
import 'antd/es/timeline/style/index.css';

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

function Dashboard() {
    
    document.getElementById("title").innerHTML="Admin | Dashboard - Mayy Collection";   
    
  
    return (
     
    <div className="admin-content">
        <AdminHeader pageTitle = {"Dashboard"}/>
        <div className="admin-bottombar">
            <AdminSideNav />
            <div className="admin-maincontent">
            <p className="top-content-heading">Dashboard</p>
                <div className="fullwidth flex-row">
                    <div className="onequarterwidth small-charts">
                        <div className="small-charts-part">
                            <LineChart width={100} height={60} data={data}>
                                <Line dataKey="pv" stroke="rgb(6,6,65)" strokeWidth={2} dot={false} />
                            </LineChart>
                        </div>
                        <div className="small-charts-part">
                            <p>New Users</p>
                            <p><i className='fas fa-angle-down red'></i> 113</p>
                        </div>
                    </div>
                    <div className="onequarterwidth small-charts">
                        <div className="small-charts-part">
                            <BarChart width={100} height={60} data={data}>
                                <Bar dataKey="uv" fill="yellow" />
                            </BarChart>
                        </div>
                        <div className="small-charts-part">
                            <p>Monthly Sales</p>
                            <p><i className='fas fa-angle-up green'></i> 80%</p>
                        </div>
                    </div>
                    <div className="onequarterwidth small-charts">
                        <div className="small-charts-part">
                            <LineChart width={100} height={60} data={data}>
                                <Line dataKey="pv" stroke="firebrick" strokeWidth={2} dot={false} />
                            </LineChart>
                        </div>
                        <div className="small-charts-part">
                            <p>Impressions</p>
                            <p><i className='fas fa-angle-right blue'></i> 1,657</p>
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
                    <div className="onethirdwidth mid-cards padding1520">
                        <p className="mid-cards-heading margin20">Latest Messages</p>
                        <div className="fullwidth mid-cards-message-list">
                            <div className="fullwidth mid-cards-message-list-item">
                                <p>I want to design a website for you.</p>
                            </div>
                            <div className="fullwidth mid-cards-message-list-item">
                                <p>I have a new job for you.</p>
                            </div>
                            <div className="fullwidth mid-cards-message-list-item">
                                <p>Design Inquires for Mayy Collection.</p>
                            </div>
                            <div className="fullwidth mid-cards-message-list-item">
                                <p>My Order has been lost in transit.</p>
                            </div>
                            <div className="fullwidth mid-cards-message-list-item">
                                <p>Do you have time to talk about the design.</p>
                            </div>
                            <div className="fullwidth mid-cards-message-list-item">
                                <p>Mayy Collection design review.</p>
                            </div>
                        </div>
                        <a className="mid-cards-link" href="">View All</a>
                    </div>
                    <div className="onethirdwidth mid-cards padding1520">
                        <p className="mid-cards-heading">Top Sales</p>
                        <div className="fullwidth mid-cards-pie">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie cy="40%" dataKey="value" isAnimationActive={false} data={data1} outerRadius={85} innerRadius={70} fill="#8884d8">
                                    {
                                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                    }
                                    </Pie>
                                    <Tooltip />
                                    <Legend align='left' iconType='circle'  />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="onethirdwidth mid-cards">
                        <p className="mid-cards-heading padding20" >Calender</p>
                        <Calendar
                        colorPrimary="#9c88ff" // added this
                        calendarClassName="custom-calendar" // and this
                        calendarTodayClassName="custom-today-day" // also this
                        shouldHighlightWeekends
                        />
                    </div>
                </div> 
                <div className="fullwidth flex-row baseline">
                    <div className="twothirdwidth dashboard-tasks">
                        <div className="dashboard-tasks-header">
                             <p>Tasks</p>
                             <p onClick={showTask}>New task</p>
                        </div>
                        <div>

                        </div>
                        <div className="fullwidth dashboard-table-container">
                            <table className=" fullwidth dashboard-task-table">
                                <thead>
                                    <tr id="newtaskfield">
                                        <td></td>
                                        <td>
                                            <input type="text" placeholder="Enter Task name" />
                                        </td>
                                        <td>
                                            <input type="text" placeholder="Enter Task Category" />
                                        </td>
                                        <td>
                                            <img src={process.env.PUBLIC_URL+'/images/addtask.svg'} alt="addtask" />
                                            <img src={process.env.PUBLIC_URL+'/images/hidetask.svg'} alt="hidetask" onClick={hideTask} />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox></Checkbox>
                                        </td>
                                        <td>Create a dashboard</td>
                                        <td><i>Design</i></td>
                                        <td>
                                            <img src={process.env.PUBLIC_URL+'/images/edittask.svg'} alt="edittask" />
                                            <img src={process.env.PUBLIC_URL+'/images/deletetask.svg'} alt="deletetask" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox></Checkbox>
                                        </td>
                                        <td>Edit the created dashboard</td>
                                        <td><i>Design</i></td>
                                        <td>
                                            <img src={process.env.PUBLIC_URL+'/images/edittask.svg'} alt="edittask" />
                                            <img src={process.env.PUBLIC_URL+'/images/deletetask.svg'} alt="deletetask" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox></Checkbox>
                                        </td>
                                        <td>Edit the created dashboard</td>
                                        <td><i>Maintenance</i></td>
                                        <td>
                                            <img src={process.env.PUBLIC_URL+'/images/edittask.svg'} alt="edittask" />
                                            <img src={process.env.PUBLIC_URL+'/images/deletetask.svg'} alt="deletetask" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox></Checkbox>
                                        </td>
                                        <td>Market products to customers</td>
                                        <td><i>Marketing</i></td>
                                        <td>
                                            <img src={process.env.PUBLIC_URL+'/images/edittask.svg'} alt="edittask" />
                                            <img src={process.env.PUBLIC_URL+'/images/deletetask.svg'} alt="deletetask" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox></Checkbox>
                                        </td>
                                        <td>Edit the created dashboard</td>
                                        <td><i>Design</i></td>
                                        <td>
                                            <img src={process.env.PUBLIC_URL+'/images/edittask.svg'} alt="edittask" />
                                            <img src={process.env.PUBLIC_URL+'/images/deletetask.svg'} alt="deletetask" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className="onethirdwidth mid-cards padding1520">
                        <p className="mid-cards-heading margin20" >Recent activities</p>
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
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
