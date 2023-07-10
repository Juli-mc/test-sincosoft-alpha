import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { setIsLoading } from "./isLoading.slice";
import { useDispatch } from "react-redux";

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    setStudents: (state, action) => {
      const students = action.payload;
      return students;
    },
  },
});

export const getStudentsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("students?_embed=Grade")
    .then((res) => dispatch(setStudents(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getStudentIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`students/${id}?_embed=Grade`)
    .then((res) => dispatch(setStudents(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addStudentThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(`students`, data)
    .then((res) => dispatch(getStudentsThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateStudentThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .put(`students/${id}`, data)
    .then((res) => dispatch(getStudentsThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteStudentThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios.delete(`students/${id}`).then((res) => dispatch(getStudentsThunk()));
  setTimeout(() => {
    dispatch(setIsLoading(false));
  }, 2000);
};

export const { setStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
