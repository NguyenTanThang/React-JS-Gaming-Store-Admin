import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteProduct} from "../actions/productActions";

class ProductItem extends Component{

    onDelete = () => {
        this.props.deleteProduct(this.props.productItem._id);
    }

    render(){
        const {_id, productName, productPrice, productImgURL} = this.props.productItem
        return(
            <div className="col-lg-4 col-md-6 col-sm-12 product-item">
                <div className="card">
                    <img className="card-img-top" src={productImgURL} alt={productName}/>
                    <div className="card-body">
                        <h5 className="card-title">{productName}</h5>
                        <p className="card-text">
                            <b>Price: </b> {productPrice}$
                        </p>
                        <Link to={`/products/${_id}`} className="btn btn-light btn-block">View Detail</Link>
                        <Link to={`/edit/${_id}`} className="btn btn-warning btn-block">Edit Product</Link>
                        <button className="mt-2 btn btn-danger btn-block" onClick={this.onDelete}>Delete Product</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (deletedID) => {dispatch(deleteProduct(deletedID))}
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);