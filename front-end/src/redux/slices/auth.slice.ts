import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register, login } from "../thunks/auth.thunk";

interface ErrorType {
  message: string;
}

interface StateTypes {
  isLoading: boolean;
  error: ErrorType | null | unknown;
  user: object | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: StateTypes = {
  isLoading: false,
  error: null,
  user: {},
  token: null,
  isAuthenticated: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<StateTypes>) => {
          state.isLoading = false;
          state.error = null;
          state.user = action.payload;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        }
      )
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<StateTypes>) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
