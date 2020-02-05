import React, { Component } from 'react';
import {MAIN_PROXY_URL} from "../config/config";
import axios from "axios";
import {connect} from "react-redux";
import {editProduct} from "../actions/productActions";

class EditProduct extends Component {

    state = {
        name: "",
        price: "",
        url: "",
        desc: ""
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, price, url, desc} = this.state;
        const _id = this.props.match.params.id;
        this.props.editProduct(_id ,{
            productName: name,
            productPrice: parseFloat(price),
            productImgURL: url,
            productDescription: desc 
        });

        setTimeout(() => {
            this.props.history.push(`/products/${_id}`);
        }, 1000)
    }

    componentWillMount(){
        axios.get(`${MAIN_PROXY_URL}/products/${this.props.match.params.id}`)
        .then(response => {
            const {productName, productPrice, productImgURL, productDescription} = response.data.product
            this.setState({
                name: productName,
                price: productPrice,
                url: productImgURL,
                desc: productDescription
            })
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Edit Product</h2>
                    <form onSubmit={this.onSubmit}  id="add-product-form">

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label>Product Name:</label>
                                <input placeholder="Product Name" id="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label>Product Price:</label>
                                <input placeholder="Product Price" id="price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
                            </div>

                            <div className="col-12">
                                <label>Product Image URL:</label>
                                <input placeholder="Product Image URL" id="url" name="img_url" className="form-control" value={this.state.url} onChange={this.onChange}/>
                            </div>

                            <div className="col-12">
                                <label>Product Description:</label>
                                <textarea rows="5" placeholder="Product Description" id="desc" name="product_desc" className="form-control" value={this.state.desc} onChange={this.onChange}></textarea>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Save
                                </button>
                            </div>

                        </div>

                    </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProduct: (id, updatedProduct) => dispatch(editProduct(id, updatedProduct))
    }
}

export default connect(null, mapDispatchToProps)(EditProduct);
