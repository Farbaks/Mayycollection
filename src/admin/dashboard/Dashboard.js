import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    AreaChart, Area, BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import '../../assets/style/admin.css';
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
  
function Dashboard() {
    
    document.getElementById("title").innerHTML="Dashboard - Mayy Collection";   
    
  
    return (
     
    <div className="admin-content">
        <div className="admin-topbar">
            <div className="admin-topbar-image-container">
                <div className="admin-topbar-image">
                    <img src={process.env.PUBLIC_URL+'/logo.png'} alt="logo" />
                </div>
            </div>
            <div className="page-title">
                <p>Dashboard</p>
                <div className="topbar-right">
                    <a href=" " className="topbar-icons">
                        <div className="topbar-icons-image">
                            <img src={process.env.PUBLIC_URL+'/images/newmessages.svg'} alt="messages" />
                        </div>
                        <div className="topbar-icon-number">10</div>
                    </a>
                    <a href=" " className="topbar-icons">
                        <div className="topbar-icons-image">
                            <img src={process.env.PUBLIC_URL+'/images/notification.svg'} alt="messages" />
                        </div>
                        <div className="topbar-icon-number">987</div>
                    </a>
                    <div className="topbar-admin-picture">
                        <div className="topbar-admin-avatar">
                            <p>FB</p>
                        </div>
                        <div className="topbar-admin-name">
                            <p>Farouk Bakre</p>
                            <p>Admin</p>
                        </div>
                    </div> 
                </div>
                
            </div>
            
        </div>
        <div className="admin-bottombar">
            <AdminHeader />
            <div className="admin-maincontent">
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
                <div className="fullwidth flex-row">
                    <div className="onethirdwidth mid-cards">
                        <p className="mid-cards-heading">Latest Messages</p>
                        <div className="mid-cards-message-list">
                        
                        </div>
                    </div>
                    <div className="onethirdwidth mid-cards">
                        <p className="mid-cards-heading">Top Sales</p>
                    </div>
                    <div className="onethirdwidth mid-cards">
                        <p className="mid-cards-heading">Calender</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
