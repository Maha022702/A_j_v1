import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  FQA_Data_List: null,
  FQA_Edit_data_: null,
  Privacy_Policy_Data: null,
  Privacy_Refund_Data: null,
};

const dashSlice = createSlice({
  initialState,
  name: "dashboard",
  reducers: {
    FQA_List(state, action) {
      state.FQA_Data_List = action.payload;
    },
    FQA_Edit_Data(state, action) {
      state.FQA_Edit_data_ = action.payload;
    },
    Get_Privacy_Policy(state, action) {
      state.Privacy_Policy_Data = action.payload;
    },
    Get_Refund_Policy(state, action) {
      state.Privacy_Refund_Data = action.payload;
    },
  },
});
export const {
  FQA_List,
  FQA_Edit_Data,
  Get_Privacy_Policy,
  Get_Refund_Policy,
} = dashSlice.actions;

export default dashSlice.reducer;
