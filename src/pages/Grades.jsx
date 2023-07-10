import React, { useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsThunk } from "../store/slices/students.slice";
import { getTeachersThunk } from "../store/slices/teachers.slice";
import { getSubjectsThunk } from "../store/slices/subjects.slice";
import { getYearThunk } from "../store/slices/years.slice";
import { getGradesThunk } from "../store/slices/grades.slice";

const Grades = () => {
  const students = useSelector((state) => state.students);
  const teachers = useSelector((state) => state.teachers);
  const year = useSelector((state) => state.year);
  const subjects = useSelector((state) => state.subjects);
  const grades = useSelector((state) => state.grades);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentsThunk());
    dispatch(getTeachersThunk());
    dispatch(getSubjectsThunk());
    dispatch(getYearThunk());
    dispatch(getGradesThunk());
  }, []);

  const TABLE_HEAD = [
    "Nombre alumno",
    "ID Alumno",
    "ID Asignatura",
    "Nombre docente",
    "ID Docente",
    "NOTA",
  ];

  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((students, index) => {
            const isLast = index === students.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={students.id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {students.name} {students.lastName}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {students.id}
                  </Typography>
                </td>
                <td className={classes}>
                  {students.Grade.map((grade) => (
                    <Typography
                      key={grade.studentId}
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {grade.subjectId}
                    </Typography>
                  ))}
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Grades;
