import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    addProduct
} from "../actions/productActions";

class AddProduct extends Component {

    state = {
        name: "",
        price: "",
        url: "",
        desc: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, price, url, desc} = this.state;
        this.props.addProduct({
            productName: name,
            productPrice: parseFloat(price),
            productImgURL: url,
            productDescription: desc 
        });

        this.setState({
            name: "",
            price: "",
            url: "",
            desc: ""
        }, () => {
            window.location.reload();
        })

    }

    render() {
        return (
            <div>
                <h2>Add Product</h2>
                    <form onSubmit={this.onSubmit} id="add-product-form">

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

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button type="reset" className="btn btn-light btn-block">
                                    Reset
                                </button>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Create
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
        addProduct: (newProductItem) => dispatch(addProduct(newProductItem))
    }
}

export default connect(null, mapDispatchToProps)(AddProduct);
