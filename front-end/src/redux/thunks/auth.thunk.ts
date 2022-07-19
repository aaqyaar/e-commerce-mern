import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const register = createAsyncThunk(
  "auth/register",
  async (user: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/register`,
        { user }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (user: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/login`,
        { user }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (token: string | null, { rejectWithValue }) => {
    const headers: any = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/logout`,
        {},
        {
          headers,
        }
      );
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export { register, login, logout };
