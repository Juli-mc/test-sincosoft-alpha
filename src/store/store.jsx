import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slices/students.slice";
import teachersSlice from "./slices/teachers.slice";
import subjectsSlice, { subjectsStatusSlice } from "./slices/subjects.slice";
import yearSlice from "./slices/years.slice";
import gradesSlice from "./slices/grades.slice";
import codeStatusSlice from "./slices/status.slice";

export default configureStore({
  reducer: {
    codeStatus: codeStatusSlice,
    students: studentsSlice,
    teachers: teachersSlice,
    subjects: subjectsSlice,
    year: yearSlice,
    grades: gradesSlice,
  },
});
