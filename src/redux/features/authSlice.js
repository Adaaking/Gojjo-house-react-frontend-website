import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (formData,{ rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/user/register", formData);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/user/login", formData);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("profile")) || null,
    message:'',
    loading:false
  },
  reducers: {},
  extraReducers: {
    [signUp.pending || signIn.pending ]: (state,{payload}) => {
         state.loading=true
        console.log('pending')
    },
    [signUp.fulfilled || signIn.fulfilled]: (state,{payload}) => {
        state.user = localStorage.setItem('profile',JSON.stringify(payload))
        state.loading = false
    },
    [signUp.rejected || signIn.rejected]: (state,{payload}) => {
       console.log(payload)
       state.loading = false
    },


//     [signIn.pending]: (state,{payload}) => {
//       state.loading=true
//      console.log('pending')
//  },
//  [signI.fulfilled]: (state,{payload}) => {
//      state.user = localStorage.setItem('profile',JSON.stringify(payload))
//      state.loading = false
//  },
//  [signIn.rejected]: (state,{payload}) => {
//     console.log(payload)
//     state.loading = false
//  }
  },
});

export default authSlice;