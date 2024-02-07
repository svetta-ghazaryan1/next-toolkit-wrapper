import { createAsyncThunk } from "@reduxjs/toolkit";
import { Produced } from "immer/dist/internal";
import { Category, Product } from "../type";
import { myAxios } from "@/app/store";

export const getCategoriesAPI = createAsyncThunk("get Categories", async () => {
  const { data } = await myAxios.get("categories");
  return data;
});

export const getCategoriessByAPI = createAsyncThunk(
  "get Categories by id",
  async (id: number) => {
    const { data } = await myAxios.get("categories/" + id);
    return data;
  }
);

export const createCategoriesAPI = createAsyncThunk(
  "post Categories",
  async (obj: Category) => {
    const { data } = await myAxios.post("categories", obj);
    return data;
  }
);

export const updateCategoriesAPI = createAsyncThunk(
  "update Categories",
  async ({ id, obj }: { id: number; obj: { name: string } }) => {
    const { data } = await myAxios.put("categories/" + id, obj);
    return data;
  }
);

export const deleteCategoriesAPI = createAsyncThunk(
  "delete Categories",
  async (id: number) => {
    const { data } = await myAxios.delete("categories/" + id);
    return data;
  }
);