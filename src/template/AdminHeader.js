import React from 'react';
import '../assets/style/admin.css';

function AdminHeader() {
    
    return (
     
    <div className="admin-sidebar">
        <div className="fullwidth">
            <p className="admin-menu-heading">DASHBOARD MENU</p>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-home.svg'} alt="logo" />
                </div>
                <p>Dashboard</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-products.svg'} alt="logo" />
                </div>
                <p>Products</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-category.svg'} alt="logo" />
                </div>
                <p>Categories</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-order.svg'} alt="logo" />
                </div>
                <p>Orders</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-customorder.svg'} alt="logo" />
                </div>
                <p>Custom Orders</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-user.svg'} alt="logo" />
                </div>
                <p>Customers</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-messages.svg'} alt="logo" />
                </div>
                <p>Messages</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-report.svg'} alt="logo" />
                </div>
                <p>Report</p>
            </a>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-marketing.svg'} alt="logo" />
                </div>
                <p>Marketing</p>
            </a>
        </div>
        <div className="fullwidth">
            <p className="admin-menu-heading">ACCOUNT</p>
            <a href="" className="admin-sidebar-link">
                <div className="admin-sidebar-link-image">
                    <img src={process.env.PUBLIC_URL+'/images/admin-account.svg'} alt="logo" />
                </div>
                <p>Settings</p>
            </a>
            
        </div>

    </div>

  );
}

export default AdminHeader;
