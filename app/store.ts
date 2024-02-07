import categoryReducer from "@/features/category/categorySlice";
import productReducer from "@/features/product/productSlice";
import userReducer from "@/features/user/userSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import axios from "axios";
import { createWrapper } from "next-redux-wrapper";

export const store = ()=>configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

// console.log(store);

export type AppStore = ReturnType<typeof store>;
//app store irmej parunakum e stor metodi veradardzrac obyekty

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(store);



export const myAxios = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

// https://github.com/kirill-konshin/next-redux-wrapper wrapper ogtvelu hamar