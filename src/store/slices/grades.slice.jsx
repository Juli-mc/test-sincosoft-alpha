import { createSlice } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import axios from "../../utils/axios";

export const gradesSlice = createSlice({
  name: "grades",
  initialState: [],
  reducers: {
    setGrades: (state, action) => {
      const grades = action.payload;
      return grades;
    },
  },
});

export const getGradesThunk = () => (dispatch) => {
  return axios.get("Grade").then((res) => dispatch(setGrades(res.data)));
};

export const updateGradesThunk = (data, id) => (dispatch) => {
  return axios
    .put(`Grade/${id}`, data)
    .then((res) => dispatch(setGrades(res.data)));
};

export const { setGrades } = gradesSlice.actions;

export default gradesSlice.reducer;
