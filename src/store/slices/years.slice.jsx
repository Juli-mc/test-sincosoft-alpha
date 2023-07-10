import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

import { useDispatch } from "react-redux";

export const yearSlice = createSlice({
  name: "year",
  initialState: [],
  reducers: {
    setYear: (state, action) => {
      const year = action.payload;
      return year;
    },
  },
});

export const getYearThunk = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/Year")
    .then((res) => dispatch(setYear(res.data)));
};

export const { setYear } = yearSlice.actions;

export default yearSlice.reducer;
