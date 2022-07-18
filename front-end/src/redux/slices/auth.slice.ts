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
  //   extraReducers: {
  //     [login.pending.toString()]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [login.fulfilled.toString()]: (
  //       state,
  //       { payload }: PayloadAction<StateTypes>
  //     ) => {
  //       state.isLoading = false;
  //       state.user = payload.data.user;
  //       state.isAuthenticated = true;
  //       state.token = payload.data.token;
  //       state.error = null;
  //     },
  //     [login.rejected.toString()]: (
  //       state,
  //       { error }: PayloadAction<StateTypes>
  //     ) => {
  //       state.error = error.message;
  //       state.isAuthenticated = false;
  //       state.isLoading = false;
  //       state.user = initialState.user;
  //       state.token = null;
  //     },
  //   },
});

export default slice.reducer;
