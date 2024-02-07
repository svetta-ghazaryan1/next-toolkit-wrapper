import { myAxios } from "@/app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Updateuser, User } from "../type";

export const createUserAPI = createAsyncThunk(
  "post users",
  async (obj: User) => {
    const { data } = await myAxios.post("users", obj);
    return data;
  }
);

export const updateUserAPI = createAsyncThunk(
  "update User",
  async ({ id, obj }: { id: number; obj: Updateuser }) => {
    const { data } = await myAxios.put("users/" + id, obj);
    return data;
  }
);

export const deleteCategoriesAPI = createAsyncThunk(
  "delete users",
  async (id: number) => {
    const { data } = await myAxios.delete("users/" + id);
    return data;
  }
);

export const getuserAPI = createAsyncThunk("get users", async () => {
  const { data } = await myAxios.get("users");
  return data;
});

export const getUserByAPI = createAsyncThunk(
  "get users by id",
  async (id: number) => {
    const { data } = await myAxios.get("users/" + id);
    return data;
  }
);
