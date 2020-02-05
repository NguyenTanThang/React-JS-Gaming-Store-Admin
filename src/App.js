import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "@popperjs/core/dist/cjs/popper";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ProductList from "./components/productList";
import SingleProductItem from "./components/singleProductItem";
import EditProduct from "./components/editProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={ProductList} />
        <Route path="/products/:id" component={SingleProductItem} />
        <Route path="/edit/:id" component={EditProduct} />
      </Router>
    </div>
  );
}

export default App;
