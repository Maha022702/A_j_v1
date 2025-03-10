import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  language: null,
  selectedLan: null,
  userRole: null,
  userDetails: null,
  AuthTokenData: null,
  //
  authLogin: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    languageSelection(state, action) {
      state.language = action.payload;
    },
    selectedlanguage(state, action) {
      state.selectedLan = action.payload;
    },

    UserRole(state, action) {
      state.userRole = action.payload;
    },

    UserDetails(state, action) {
      state.userDetails = action.payload;
    },

    AuthToken(state, action) {
      state.AuthTokenData = action.payload;
    },

    // // API Call
    // loginRequest(state, action) {
    //   state.isLoading = true;
    //   state.error = null;
    //   state.authLogin = null;
    // },
    // loginSucess(state, action) {
    //   console.log("loginSucess action", action.payload.data);
    //   localStorage.setItem("AuthToken", action.payload?.data?.access_token);
    //   state.authLogin = action.payload;
    //   state.isLoading = false;
    // },
    // loginFailure(state, action) {
    //   console.log("loginFailure action", action.payload.data);
    //   state.error = action.payload.data;
    //   state.isLoading = false;
    // },
  },
});
export const {
  languageSelection,
  selectedlanguage,
  UserRole,
  UserDetails,
  AuthToken,
  //
  loginRequest,
  loginSucess,
  loginFailure,
} = authSlice.actions;

export default authSlice.reducer;
