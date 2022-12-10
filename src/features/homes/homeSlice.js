import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { homeService } from "./homeService";

const initialState = {
  homes: [],
  home:null,
  homeOwner:null,
  currentUpdateId:null,
  isLoading: false,
  isSuccess: false,
  message:'',
  isError: false,
};

export const createHome = createAsyncThunk(
  "home/create",
  async (homeData, thunkAPI) => {
    try {
      console.log('create',homeData)
      const token = await thunkAPI.getState().auth.user.token;
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

export const updateHome = createAsyncThunk("home/update",async (id,homedata) => {
  try {
    console.log('update', homedata)
    return homeService.updatePosts(id,homedata)
  } catch (error) {
    console.log(error)
  }
})

export const findById = createAsyncThunk("home/findbyid", async (id) => {
  try {
    return homeService.findHomebyid(id)
  } catch (error) {
    console.log(error)
  }
})
export const deleteHome = createAsyncThunk('home/delete', async (id) => {
  try {
    return homeService.deleteHome(id)
  } catch (error) {
    console.log(error)
  }
})


const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setUpdateId: (state,action) => {
      state.currentUpdateId = action.payload;
    },
    setUpdateid: (state,action) => {
      state.currentUpdateId = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHome.fulfilled, (state,action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message
      })
      .addCase(createHome.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
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
      })

      .addCase(updateHome.pending,(state,action) => {
        state.isLoading = true
      })
      .addCase(updateHome.fulfilled,(state,action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(updateHome.rejected,(state,action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload.message
      })
      .addCase(deleteHome.pending,(state,action) => {
        state.isLoading = true
      })

      .addCase(deleteHome.fulfilled,(state,action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload.message
        state.homes = state.homes.filter(home => home._id!==action.payload.id)
      })
      .addCase(deleteHome.rejected,(state,action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload.message
      })

      .addCase(findById.pending,(state,action) => {
        state.isLoading = true
      })

      .addCase(findById.fulfilled,(state,action) => {
        state.home = action.payload.newhome
        state.homeOwner = action.payload.owner
        state.isLoading = false
        state.isSuccess = true

      })
      .addCase(findById.rejected,(state,action) => {
        state.isLoading = false
        state.isError = true
      })
  },
});

export const homeAcrions = homeSlice.actions;
export default homeSlice;
