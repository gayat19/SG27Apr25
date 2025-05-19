// import { createSlice } from "@reduxjs/toolkit";


// const userSlice = createSlice({
//     name:"users",
//     initialState:["ramu","somu"],
//     reducers:{
//         addUser:(state,action:any)=>{
//             state.push(action.payload)
//         },
//         deleteUser:(state,action:any)=>{
//             let idx = -1;
//             for (let index = 0; index < state.length; index++) {
//                 if(state[index]==action.payload){
//                     idx=index;
//                     break;
//                 }
//             }
//             if(idx>=0)
//                 state.splice(idx,1);
//         }
//     }
// });

// export default userSlice.reducer;
// export const {addUser,deleteUser} =userSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

export const addUser = createAsyncThunk("users/addUser", async (newUser: Omit<User, "id">) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data.push(action.payload);
      });
  },
});

export default userSlice.reducer;