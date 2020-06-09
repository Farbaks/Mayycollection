import React from 'react';
import Header from '../../template/Header';
import Footer from '../../template/Footer';
import '../../assets/style/Trackorders.css';

function Forgotpassword() {
    
    document.getElementById("title").innerHTML="Forgot password - Mayy Collection";   
    
  
    return (
    
    <div>
        <Header/>
            <div className="content">
                <div className="cart">
                    <p className="cart-heading">Forgot password</p>
                    <p className="trackorder-subheading">
                        Enter Email to receive password reset link.
                    </p>
                    <div className="trackorder-form">
                        <input type="email" placeholder="Email" />
                        <button>Reset Password</button>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Forgotpassword;
