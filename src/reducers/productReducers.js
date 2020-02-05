import {
    FETCH_PRODUCTS,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
} from "../actions/types";

const initialState = {
    products: []
}

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
            break;
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload.createdProduct]
            }
            break;
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item._id === action.payload.updatedProduct) {
                        return action.payload.updatedProduct;
                    }
                    return item;
                })
            }
            break;
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => {
                    return item._id !== action.payload.deletedProduct._id;
                })
            }
            break;
        default:
            return state;
            break;
    }
}

export default productReducers;