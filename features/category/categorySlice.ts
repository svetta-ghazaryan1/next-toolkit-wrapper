import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Category} from "../type";
import { createCategoriesAPI, getCategoriesAPI, getCategoriessByAPI, updateCategoriesAPI } from "./categoryAPI";

const initialState:{
    categories: Category[];
    category: Category;
}={
    categories: [],
    category: {} as Category,
};
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (build) => {
       
       
    }
})
export default categorySlice.reducer;
export const selectCategory = (state: RootState) => state.category;