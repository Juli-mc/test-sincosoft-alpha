import { createSlice } from "@reduxjs/toolkit";

export const codeStatusSlice = createSlice({
  name: "codeStatus",
  initialState: 0,
  reducers: {
    setCodeStatus: (state, action) => {
      const codeStatus = action.payload;
      return codeStatus;
    },
  },
});

export const { setCodeStatus } = codeStatusSlice.actions;

export default codeStatusSlice.reducer;
