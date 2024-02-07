import { myAxios } from "@/app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../type";

export const getProductsAPI = createAsyncThunk(
    "get Products", 
     async () => {
     const { data } = await myAxios.get("products");
     return data;
});
export const getProductsByAPI = createAsyncThunk(
    "get Products by id", 
     async (id:number) => {
     const { data } = await myAxios.get("products/"+id);
     return data;
});
export const createProductsAPI = createAsyncThunk(
    "post Products", 
     async (obj:Product) => {
     const { data } = await myAxios.post("products", obj);
     return data;
});
export const updateProductsAPI = createAsyncThunk(
    "update Products", 
     async ({id, obj}:{id:number, obj:{title:string, price:number}}) => {
     const { data } = await myAxios.put("products/"+id, obj);
     return data;
});
export const deleteProductsAPI = createAsyncThunk(
    "delete Products", 
     async (id:number) => {
     const { data } = await myAxios.delete("products/"+id);
     return data;
});

export const getCategoriessByAPI = createAsyncThunk(
    "get Categories by id",
    async (id: number) => {
      const { data } = await myAxios.get("users/" + id);
      return data;
    }
  );