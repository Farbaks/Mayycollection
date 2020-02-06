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
import Search from './search/Search';

function App() {
  return (
    <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Home} />
       <Route exact path="/product/" component={Product} />
       <Route exact path="/bag/" component={Bag} />
       <Route exact path="/search/" component={Search} />
      </Router>
  );
}

export default App;
