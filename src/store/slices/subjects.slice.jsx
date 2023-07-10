import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

import { useDispatch } from "react-redux";

export const subjectsSlice = createSlice({
  name: "subjects",
  initialState: [],
  reducers: {
    setSubjects: (state, action) => {
      const subjects = action.payload;
      return subjects;
    },
  },
});

export const subjectsStatusSlice = createSlice({
  name: "subjectsStatus",
  initialState: 0,
  reducers: {
    setSubjectsStatus: (state, action) => {
      const subjectsStatus = action.payload;
      return subjectsStatus;
    },
  },
});

export const getSubjectsThunk = () => (dispatch) => {
  return axios.get("Subject").then((res) => dispatch(setSubjects(res.data)));
};

export const addSubjectThunk = (data) => (dispatch) => {
  return axios
    .post("Subject", data)
    .then((res) => dispatch(setSubjects(res.data)));
};

export const getSubjectIdThunk = (id) => (dispatch) => {
  return axios
    .get(`Subject/${id}`)
    .then((res) => dispatch(setSubjects(res.data)));
};

export const updateSubjectThunk = (id, data) => (dispatch) => {
  return axios
    .put(`Subject/${id}`, data)
    .then((res) => dispatch(setSubjectsStatus(res.status)));
};

export const deleteSubjectThunk = (subjectId) => (dispatch) => {
  axios
    .delete(`Subject/${subjectId}`)
    .then((res) => dispatch(getSubjectsThunk()));
};

export const { setSubjects } = subjectsSlice.actions;
export const { setSubjectsStatus } = subjectsStatusSlice.actions;

export default subjectsSlice.reducer;
