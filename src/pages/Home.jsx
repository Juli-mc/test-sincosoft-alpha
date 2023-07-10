import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import {
  deleteStudentThunk,
  getStudentsThunk,
} from "../store/slices/students.slice";
import { useDispatch, useSelector } from "react-redux";
import { getTeachersThunk } from "../store/slices/teachers.slice";
import { getSubjectsThunk } from "../store/slices/subjects.slice";
import { getYearThunk } from "../store/slices/years.slice";
import { getGradesThunk } from "../store/slices/grades.slice";
import LoadingScreen from "../components/LoadingScreen";
import ModalDelete from "../components/ModalDelete";
import { Link, useNavigate } from "react-router-dom";
import StudentDetail from "./StudentDetail";

const Home = () => {
  const students = useSelector((state) => state.students);
  const teachers = useSelector((state) => state.teachers);
  const year = useSelector((state) => state.year);
  const subjects = useSelector((state) => state.subjects);
  const grades = useSelector((state) => state.grades);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [idSelector, setIdSelector] = useState();
  const [subjectDisplay, setSubjectDisplay] = useState();
  const [subjectIdData, setSubjectIdData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStudentsThunk());
    dispatch(getTeachersThunk());
    dispatch(getSubjectsThunk());
    dispatch(getYearThunk());
    dispatch(getGradesThunk());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const headerReference = document.getElementById("Estudiantes");
    headerReference.click();
  }, [isLoading]);

  const data = [
    {
      label: "Estudiantes",
      value: "Estudiantes",
    },
    {
      label: "Docentes",
      value: "Docentes",
    },
    {
      label: "Asignaturas",
      value: "Asignaturas",
    },
  ];

  const driverModal = (id) => {
    setOpenModal(true);
    setIdSelector(id);
  };

  console.log({ students });
  return (
    <div>
      <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab id={value} key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <TabsBody
            className="flex items-center"
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value="Estudiantes">
              {students.map((students) => (
                <div
                  key={students.id}
                  className="justify-center m-2 ml-auto mr-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                    />
                  </svg>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {students.name} {students.lastName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    ID de estudiante: {students.id}
                  </p>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/students/${students.id}`)}
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Ver más
                    <svg
                      className="w-3 h-3 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </a>
                  {students.Grade[0] === undefined ? (
                    <div>
                      <br />
                      <h3 className="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Cursando actualmente:
                      </h3>
                      ❌
                      <br />
                      <Button onClick={() => driverModal(students.id)}>
                        Eliminar
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <br />
                      <h3 className="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Cursando actualmente:
                      </h3>
                      ✅
                      <br />
                      <Button disabled>Eliminar</Button>
                    </div>
                  )}
                  {openModal && idSelector == students.id && (
                    <ModalDelete
                      teacherId={students.id}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </div>
              ))}
            </TabPanel>
            <TabPanel value="Docentes">
              {teachers.map((teachers) => (
                <div
                  key={teachers.id}
                  className="justify-center m-2 ml-auto mr-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {teachers.name} {teachers.lastName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    ID de docente: {teachers.id}
                  </p>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/teachers/${teachers.id}`)}
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Ver más
                    <svg
                      className="w-3 h-3 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </a>
                  {console.log(teachers.Subject)}
                  {teachers.Subject[0] === undefined ? (
                    <div>
                      <br />
                      Asignatura:
                      <h3 className="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        No asignada
                      </h3>
                      <br />
                      <Button onClick={() => driverModal(teachers.id)}>
                        Eliminar
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <br />
                      Asignatura:
                      <h3 className="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {teachers.Subject[0]?.name}
                      </h3>
                      <br />
                      <Button disabled>Eliminar</Button>
                    </div>
                  )}
                  {openModal && idSelector == teachers.id && (
                    <ModalDelete
                      teacherId={teachers.id}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </div>
              ))}
            </TabPanel>
            <TabPanel value="Asignaturas">
              {subjects.map((subject) => (
                <a
                  key={subject.id}
                  //   href="#"
                  className="justify-center m-2 ml-auto mr-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {subject.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    ID de asignatura: {subject.id}
                  </p>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/subjects/${subject.id}`)}
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Ver más
                    <svg
                      className="w-3 h-3 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </a>
                  <br />
                  <Button onClick={() => driverModal(subject.id)}>
                    Eliminar
                  </Button>
                  {openModal && idSelector == subject.id && (
                    <ModalDelete
                      subjectId={subject.id}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </a>
              ))}
            </TabPanel>
          </TabsBody>
        )}
      </Tabs>
      <h2 class="text sm">Año escolar:</h2>
      {year.map((year) => (
        <ul>{year.Year}</ul>
      ))}
    </div>
  );
};

export default Home;
