import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { homeService } from "./homeService";

const initialState = {
  homes: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const createHome = createAsyncThunk(
  "home/create",
  async (homeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return homeService.createHome(homeData, token);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getHomes = createAsyncThunk("home/getHomes", async (thunkAPI) => {
  try {
    return homeService.getHomes();
  } catch (error) {
    console.log(error);
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHome.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createHome.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getHomes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getHomes.fulfilled, (state, action) => {
        state.homes = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getHomes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default homeSlice;
