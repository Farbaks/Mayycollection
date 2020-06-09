import React from 'react';
import Header from './template/Header';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Home';
import Product from './product/Product';
import Bag from './bag/Bag';
import Checkout from './checkout/Checkout';
import Search from './search/Search';
import Customorder from './customorder/Customorder';
import Saveditems from './saveditems/Saveditems';
import Trackorders from './trackorders/Trackorders';
import Orderdetail from './orderdetail/Orderdetail';

// User pages
import Address from './user/address/Address';
import Account from './user/account/Account';
import Password from './user/password/Password';
import UserOrderHistory from './user/order/UserOrderHistory';
import UserOrderDetail from './user/order/order-detail/UserOrderDetail';
import UserCustomOrders from './user/customorders/UserCustomOrders';
import UserCustomItems from './user/customorders/UserCustomItems';
import Signin from './user/signin/Signin';
import Signup from './user/signup/Signup';
import Forgotpassword from './user/forgotpassword/Forgotpassword';

// Admin pages
import Dashboard from './admin/dashboard/Dashboard';
import Products from './admin/products/Products';
import AdminOrders from './admin/orders/Orders';
import AdminCustomOrders from './admin/customorders/Customorders';
import AdminCustomUsers from './admin/users/Users';
import AdminCustomReport from './admin/report/Report';
import AdminCustomCoupons from './admin/coupons/Coupons';
import AdminCustomNotifications from './admin/notifications/Notifications';
import AdminCustomAccount from './admin/account/Account';
import AdminSignin from './admin/signin/Signin';
import AdminSignup from './admin/signup/Signup';
import AdminForgotpassword from './admin/forgotpassword/Forgotpassword';

function App() {
  return (
    <Router>

       {/*All our Routes goes here!*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/product/" component={Product} />
        <Route exact path="/bag/" component={Bag} />
        <Route exact path="/checkout/" component={Checkout} />
        <Route exact path="/search/" component={Search} />
        <Route exact path="/custom-order" component={Customorder} />
        <Route exact path="/saved-items" component={Saveditems} />
        <Route exact path="/track-orders" component={Trackorders} />
        <Route exact path="/order-detail" component={Orderdetail} />

       {/* User account pages */}
        <Route exact path="/user/account/address" component={Address} />
        <Route exact path="/user/account" component={Account} />
        <Route exact path="/user/account/profile" component={Account} />
        <Route exact path="/user/account/password" component={Password} />
        <Route exact path="/user/order-history" component={UserOrderHistory} />
        <Route exact path="/user/order-detail" component={UserOrderDetail} />
        <Route exact path="/user/custom-orders" component={UserCustomOrders} />
        <Route exact path="/user/custom-order-detail" component={UserCustomItems} />
        <Route exact path="/user/signin" component={Signin} />
        <Route exact path="/user/signup" component={Signup} />
        <Route exact path="/user/forgotpassword" component={Forgotpassword} />

        {/* Admin pages */}
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/products" component={Products} />
        <Route exact path="/admin/orders" component={AdminOrders} />
        <Route exact path="/admin/custom-orders" component={AdminCustomOrders} />
        <Route exact path="/admin/users" component={AdminCustomUsers} />
        <Route exact path="/admin/report" component={AdminCustomReport} />
        <Route exact path="/admin/coupons" component={AdminCustomCoupons} />
        <Route exact path="/admin/notifications" component={AdminCustomNotifications} />
        <Route exact path="/admin/account" component={AdminCustomAccount} />
        <Route exact path="/admin/signin" component={AdminSignin} />
        <Route exact path="/admin/signup" component={AdminSignup} />
        <Route exact path="/admin/forgotpassword" component={AdminForgotpassword} />
    </Router>
  );
}

export default App;
