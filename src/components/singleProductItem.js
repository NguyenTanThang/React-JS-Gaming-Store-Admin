import React, {Component}  from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {MAIN_PROXY_URL} from "../config/config";
import axios from "axios";
import {deleteProduct} from "../actions/productActions";

class SingleProductItem extends Component{

    state = {
        productItem: {}
    }

    componentWillMount(){
        axios.get(`${MAIN_PROXY_URL}/products/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                productItem: response.data.product
            })
        })
    }

    onDelete = () => {
        this.props.deleteProduct(this.props.match.params.id);
        this.props.history.push("/");
    }

    render(){
       
            const {_id, productName, productPrice, productDescription, productImgURL} = this.state.productItem;
            return(
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <img src={productImgURL} 
                            alt={productName}
                            className="img-fluid" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4><b>Name: </b>{productName}</h4>
                            <h4><b>Price: </b>{productPrice}</h4>
                            <p>{productDescription}</p>
                            <ul className="d-flex">
                                <li>
                                    <Link to="/" className="btn btn-light">Go Back</Link>
                                </li>
                                <li>
                                    <Link to={`/edit/${_id}`} className="btn btn-warning ml-2">Edit Product</Link>
                                </li>
                                <li>
                                    
                                    <button className="ml-2 btn btn-danger" onClick={this.onDelete}>Delete Product</button>
                                </li>
                            </ul>
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

export default connect(null, mapDispatchToProps)(SingleProductItem);