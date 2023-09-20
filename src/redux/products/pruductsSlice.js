import { createSlice } from "@reduxjs/toolkit";
import { products, TotalProducts } from "../../data/Products";

const initialState = {
    products: products,
    totalProducts: TotalProducts
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProducts: state => state
    }
})

export const { getProducts }= productsSlice.actions

export default productsSlice.reducer 