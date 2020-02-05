import {
    FETCH_PRODUCTS,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
} from "./types";
import {MAIN_PROXY_URL} from "../config/config";
import axios from "axios";

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get(`${MAIN_PROXY_URL}/products`)
        .then(response => {
            return dispatch({
                type: FETCH_PRODUCTS,
                payload: {
                    products: response.data.products
                }
            })
        })
    }
}

export const deleteProduct = (deletedID) => {
    return (dispatch) => {
        axios.delete(`${MAIN_PROXY_URL}/products/delete/${deletedID}`)
        .then(response => {
            return dispatch({
                type: DELETE_PRODUCT,
                payload: {
                    deletedProduct: response.data.deletedProduct
                }
            })
        })
    }
}

export const editProduct = (updatedID, updatedProductItem) => {
    return (dispatch) => {
        axios.put(`${MAIN_PROXY_URL}/products/edit/${updatedID}`, updatedProductItem)
        .then(response => {
            return dispatch({
                type: EDIT_PRODUCT,
                payload: {
                    updatedProduct: response.data.updatedProduct
                }
            })
        })
    }
}

export const addProduct = (newProductItem) => {
    return (dispatch) => {
        axios.post(`${MAIN_PROXY_URL}/products/add`, newProductItem)
        .then(response => {
            console.log(response.data);
            return dispatch({
                type: ADD_PRODUCT,
                payload: {
                    createdProduct: response.data.createdProduct
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}