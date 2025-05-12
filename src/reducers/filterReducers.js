import { Rating } from "../components";

export const filterReducers = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "PRODUCT_LIST":
            return {productList: payload.products};
        case "SORT_BY":
            return{...state, sortby: payload};
        case "RATINGS":
            return {...state, rating: payload.rating};
        case "BEST_SELLERS_ONLY":
            return {...state, bestSellerOnly: payload.bestSellerOnly};
        case "ONLY_IN_STOCK":
            return {...state, onlyInStock: payload.onlyInStock}
        case "CLEAR_FILTER":
            return{
                ...state, onlyInStock: false,
                bestSellerOnly: false,
                rating: null,
                sortby: null
            } 
    }
}