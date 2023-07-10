import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slices/students.slice";
import teachersSlice from "./slices/teachers.slice";
import subjectsSlice, { subjectsStatusSlice } from "./slices/subjects.slice";
import yearSlice from "./slices/years.slice";
import gradesSlice from "./slices/grades.slice";
import isLoadingSlice from "./slices/isLoading.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    students: studentsSlice,
    teachers: teachersSlice,
    subjects: subjectsSlice,
    subjectsStatus: subjectsStatusSlice,
    year: yearSlice,
    grades: gradesSlice,
  },
});
