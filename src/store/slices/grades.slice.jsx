import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
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
  dispatch(setIsLoading(true));
  return axios
    .get("Grade")
    .then((res) => dispatch(setGrades(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateGradesThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .put(`Grade/${id}`, data)
    .then((res) => dispatch(setGrades(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setGrades } = gradesSlice.actions;

export default gradesSlice.reducer;
