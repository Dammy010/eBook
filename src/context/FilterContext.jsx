import { createContext, useContext, useReducer } from "react";
import { filterReducers } from "../reducers";


const filterInitialState = {
    productList: [],
    onlyInStore: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducers, filterInitialState)
    const inittialProducts = (products) => {
        
        dispatch({
            type: 'PRODUCT_LIST',
            payload: {
                products: products
            }
        })
    }

    const bestSellerOnly = (products) => {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products
    }
    
    const sort = (products) => {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        if (state. sortBy === "hightolow") {
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }
        return products
    }


    const inStock = (products) => {
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }

    const ratings = (products) => {
        if (state.ratings === '4STARSABOVE') {
            return products.filter(product => product.rating >= 4)
        } if (state.ratings === '3STARSABOVE') {
            return products.filter(product => product.rating >= 3)
        } if (state.ratings === '2STARSABOVE') {
            return products.filter(product => product.rating >= 2)
        } if (state.ratings === '1STARSABOVE') {
            return products.filter(product => product.rating >= 1)
        }
            return products
    }

    const filterdProductList = ratings(sort(inStock(bestSellerOnly(state.productList))));

    
    const value = {
        state,
        dispatch,
        products: filterdProductList,
        inittialProducts
    }


    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )

}


export const useFilter = () => {
   const context = useContext(FilterContext)

    return context
}