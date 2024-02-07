import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "../type";

const initialState: {
  users: User[];
  user: User;
} = {
  users: [],
  user: {} as User,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //obyekti amen mi dashi hamar gum enq  eragrman metod  ,sa misht grum enq inchqan dasht etqan metod
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(HYDRATE, (state, action: any) => {
    //   console.log("HYDRATE", state, action);
    //vercnum enq dispachi kanchy,
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});
export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
export const {addUser, addUsers} = userSlice.actions
