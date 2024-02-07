import { useAppSelector } from "@/app/hooks";
import { wrapper } from "@/app/store";
import { getuserAPI } from "@/features/user/userAPI";
import { addUsers, selectUser } from "@/features/user/userSlice";
import React from "react";

export default function Users() {
  const { users } = useAppSelector(selectUser);
  console.log(users);

  return <div>Users</div>;
}

export const getStaticProps = wrapper.getStaticProps(
  (store): any =>
    async () => {
      // console.log("=>", store);
      const users = await store.dispatch(getuserAPI()).unwrap();
      //store.dispachi mijocov ejin bacelun zugaher, kanchum enq mer metodnery
      console.log("====>", users);
      store.dispatch(addUsers(users));
      //
    }
);
