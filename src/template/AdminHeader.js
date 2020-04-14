import React from 'react';
import '../assets/style/UserAccount.css';



function AdminHeader(props) {
    
    function open(){
        let b2 = document.getElementById('b2');
        let b3 = document.getElementById('b3');
        let menuContent = document.getElementById('smenucontent');
        
        b2.style.width = "70%";
        b3.style.width = "85%";
        menuContent.style.left = "0%";
    }
    
    function showMenu() {
        let menuContent = document.getElementById('smenucontent');
        if(menuContent.style.left === "0%") {
            
            let b2 = document.getElementById('b2');
            let b3 = document.getElementById('b3');
            
            b2.style.width = "100%";
            b3.style.width = "75%";
            
            menuContent.style.left = "-100%";
        }
        else {
            open();
        }
    }  
    return (
        <div className="admin-topbar">
            <div className="admin-topbar-image-container">
                <div className="Header-sidemenu-button" onClick={showMenu}>
                    <div className="bar1" id="b2"></div>
                    <div className="bar2" id="b3"></div>
                </div>
                <div className="admin-topbar-image">
                    <img src={process.env.PUBLIC_URL+'/logo.png'} alt="logo" />
                </div>
            </div>
            <div className="page-title">
                <p className="page-title-heading">{props.pageTitle}</p>
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
                        {/* <div className="topbar-admin-name">
                            <p>Farouk Bakre</p>
                            <p>Admin</p>
                        </div> */}
                    </div> 
                </div>
                
            </div>
            
        </div>
      );
}

export default AdminHeader;
