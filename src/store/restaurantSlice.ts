import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Restaurant } from "../types/restaurant.types";

interface RestaurantState {
  restaurants: Restaurant[];
  loading: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
};

export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://dev.backend2.sparow.com/restaurants?page=1&limit=10&distance=5&is_admin=true"
      );
      return response.data.data as Restaurant[];
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch restaurants");
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default restaurantSlice.reducer;