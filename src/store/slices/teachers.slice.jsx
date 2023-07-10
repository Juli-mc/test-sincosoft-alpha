import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setCodeStatus } from "./status.slice";

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

export const teachersCodeStatus = createSlice({
  name: "teachersCodeStatus",
  initialState: 0,
  reducers: {
    setTeachersCodeStatus: (state, action) => {
      const teachersCodeStatus = action.payload;
      return teachersCodeStatus;
    },
  },
});

export const getTeachersThunk = () => (dispatch) => {
  return axios
    .get("teachers/?_embed=Subject")
    .then((res) => dispatch(setTeachers(res.data)));
};

export const getTeacherIdThunk = (id) => (dispatch) => {
  return axios.get(`teachers/${id}/?_embed=Subject`).then((res) => {
    dispatch(setTeachers(res.data));
    dispatch(setCodeStatus(res.status));
  });
};

export const addTeacherThunk = (data) => (dispatch) => {
  return axios
    .post(`teachers`, data)
    .then((res) => {
      dispatch(getTeachersThunk());
      dispatch(setCodeStatus(res.status));
    })
    .catch((error) => console.log(error.response));
};

export const deleteTeacherThunk = (teacherId) => (dispatch) => {
  axios
    .delete(`teachers/${teacherId}`)
    .then((res) => dispatch(getTeachersThunk()));
};

export const updateTeacherThunk = (data, id) => (dispatch) => {
  return axios
    .put(`teachers/${id}`, data)
    .then((res) => dispatch(getTeachersThunk()))
    .catch((error) => console.log(error.response));
};

export const { setTeachers } = teachersSlice.actions;
export const { setTeachersCodeStatus } = teachersCodeStatus.actions;

export default teachersSlice.reducer;
