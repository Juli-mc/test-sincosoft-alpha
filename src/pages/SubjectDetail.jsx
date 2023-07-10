import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getSubjectIdThunk,
  updateSubjectThunk,
} from "../store/slices/subjects.slice";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Select,
  Typography,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { getTeachersThunk } from "../store/slices/teachers.slice";

const SubjectDetail = ({}) => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const subjects = useSelector((state) => state.subjects);
  const subjectsStatus = useSelector((state) => state.subjectsStatus);
  const teachers = useSelector((state) => state.teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjectIdThunk(id));
    dispatch(getTeachersThunk());
  }, []);

  const updateSubject = (data) => {
    dispatch(updateSubjectThunk(id, data));
    console.log(id);
    // console.log(data, "datazo");
  };

  return (
    <div>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Asignación de materia
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            {subjects.name}
          </Typography>
          <Typography>
            Seleccione ID del docente, verifique que no posea una materia ya
            asignada.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <form onSubmit={handleSubmit(updateSubject)}>
            <label
              for="underline_select"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Elige ID docente
            </label>
            <select
              id="underline_select"
              class="block py-2.5 p-4 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              {...register("teacherId", {
                required: true,
                maxLength: 20,
                minLength: 1,
              })}
            >
              <option className="p-2" selected>
                Elige ID docente
              </option>
              {teachers.map((teachers) => (
                <option value={teachers.id}>
                  {teachers.id}: {teachers.name}
                </option>
              ))}
            </select>
            {/* <Select
              variant="outlined"
              label="Select Version"
              {...register("teacherId", {
                required: true,
                maxLength: 20,
                minLength: 1,
              })}
            >
              {teachers.map((teachers) => (
                <Option>{teachers.name}</Option>
              ))}
            </Select> */}
            <Button type="submit" onClick={updateSubject}>
              Asignar
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SubjectDetail;
