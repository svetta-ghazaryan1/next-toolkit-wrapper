import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../type";
import { createProductsAPI, getProductsAPI, getProductsByAPI, updateProductsAPI } from "./productAPI";

const initialState:{
    products: Product[];
    // tipi hamara araji toxy erkrdy vor vercnem arden tvyal pahem
    product: Product;
}={
    products: [],
    product: {} as Product,
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        
    }
})
export default productSlice.reducer;
export const selectProduct = (state: RootState) => state.product;