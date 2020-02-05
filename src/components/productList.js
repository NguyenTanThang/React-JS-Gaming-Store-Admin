import React, {Component} from "react";
import ProductItem from "./productItem";
import {fetchProducts} from "../actions/productActions";
import {connect} from "react-redux";

import AddProduct from "./addProduct";

class ProductList extends Component{

    componentWillMount(){
        this.props.fetchProducts();
    }

    render(){
        
        /*
        let productItems = [];
        if (this.props.productItems !== undefined){
            productItems = this.props.productItems
        }
        */

            return(
                <div className="container">
                    <AddProduct/>
                    <div className="row justify-content-around">
                        {this.props.productItems.map((productItem) => {
                            return <ProductItem key={productItem._id} productItem={productItem}/> 
                        })}
                    </div>
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        productItems: state.productReducers.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {dispatch(fetchProducts())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);