import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Restaurant } from "../types/restaurant.types";

interface RestaurantState {
  restaurants: Restaurant[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 0,
  hasMore: false,
};

export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/restaurants?page=${page}&limit=10&distance=5&is_admin=true`
      );
      console.log("API Response:", response.data);
      return {
        data: response.data.data as Restaurant[],
        totalPages: response.data.total_pages,
        hasMore: page < response.data.total_pages,
      };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch restaurants");
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    resetRestaurants: (state) => {
      state.restaurants = [];
      state.page = 1;
      state.totalPages = 0;
      state.hasMore = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = state.page === 1
          ? action.payload.data
          : [...state.restaurants, ...action.payload.data];
        state.page = state.page + 1; // Increment page after successful fetch
        state.totalPages = action.payload.totalPages;
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;