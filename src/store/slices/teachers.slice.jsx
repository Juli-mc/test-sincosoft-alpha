import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { setIsLoading } from "./isLoading.slice";
import { useDispatch } from "react-redux";

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: [],
  reducers: {
    setTeachers: (state, action) => {
      const teachers = action.payload;
      return teachers;
    },
  },
});

export const getTeachersThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("teachers/?_embed=Subject")
    .then((res) => dispatch(setTeachers(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getTeacherIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`teachers/${id}/?_embed=Subject`)
    .then((res) => dispatch(setTeachers(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addTeacherThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(`teachers`, data)
    .then((res) => dispatch(getTeachersThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteTeacherThunk = (teacherId) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .delete(`teachers/${teacherId}`)
    .then((res) => dispatch(getTeachersThunk()));
  setTimeout(() => {
    dispatch(setIsLoading(false));
  }, 2000);
};

export const updateTeacherThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .put(`teachers/${id}`, data)
    .then((res) => dispatch(getTeachersThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setTeachers } = teachersSlice.actions;

export default teachersSlice.reducer;
