import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
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
  return axios
    .get("students?_embed=Grade")
    .then((res) => dispatch(setStudents(res.data)));
};

export const getStudentIdThunk = (id) => (dispatch) => {
  return axios.get(`students/${id}?_embed=Grade`).then((res) => {
    dispatch(setStudents(res.data));
    dispatch(setCodeStatus(res.status));
  });
};

export const addStudentThunk = (data) => (dispatch) => {
  return axios
    .post(`students`, data)
    .then((res) => dispatch(getStudentsThunk()))
    .catch((error) => console.log(error.response));
};

export const updateStudentThunk = (data, id) => (dispatch) => {
  return axios
    .put(`students/${id}`, data)
    .then((res) => dispatch(getStudentsThunk()))
    .catch((error) => console.log(error.response));
};

export const deleteStudentThunk = (id) => (dispatch) => {
  axios.delete(`students/${id}`).then((res) => dispatch(getStudentsThunk()));
};

export const { setStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
