import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../../app/store";
import { Category } from "../type";


const initialState: {
  categories: Category[];
  category: Category;
} = {
  categories: [],
  category: {} as Category,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(HYDRATE, (state, action: any) => {
      //   console.log("HYDRATE", state, action);
      //vercnum enq dispachi kanchy,
      return {
        ...state,
        ...action.payload.category,
      };
    });
  },
});
export default categorySlice.reducer;
export const selectCategory = (state: RootState) => state.category;
export const { addCategories, addCategory } = categorySlice.actions;
