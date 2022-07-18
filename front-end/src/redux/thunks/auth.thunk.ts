import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const register = createAsyncThunk(
  "auth/register",
  async (data: {}, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/register`,
        { data }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/login`,
        { data }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { register, login };
