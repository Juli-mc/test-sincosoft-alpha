import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addSubjectThunk,
  getSubjectsThunk,
} from "../store/slices/subjects.slice";
import { getTeachersThunk } from "../store/slices/teachers.slice";

const Subjects = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const [successAlert, setSuccesAlert] = useState(undefined);
  const teachers = useSelector((state) => state.teachers);
  const subjects = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getTeachersThunk());
    dispatch(getSubjectsThunk());
  }, []);

  const addSubject = (data) => {
    console.log(data);
    dispatch(addSubjectThunk(data));
    setSuccesAlert(true);
    setTimeout(() => {
      console.log(successAlert);
      setSuccesAlert(false);
    }, 2000);
  };

  return (
    <div>
      <Card className="mt-6 mb-6 p-6" color="white" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Añadir nueva asignatura
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          En este apartado podrás crear nuevas asignaturas.
        </Typography>
        <form
          className="justify-center mt-8 mb-2 ml-auto mr-auto w-80 max-w-screen-lg sm:w-70"
          onSubmit={handleSubmit(addSubject)}
        >
          <div className="mb-4 flex flex-col gap-4">
            <Input
              type="text"
              size="lg"
              label="Nombre de la asignatura"
              {...register("name", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
            {errors.name?.type === "required" && (
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                  fontStyle: "italic",
                  margin: -14,
                  marginBottom: -6,
                }}
              >
                Campo requerido.
              </span>
            )}
            {errors.name?.type === "maxLength" && (
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                  fontStyle: "italic",
                  margin: -14,
                  marginBottom: -6,
                }}
              >
                Máximo 16 carácteres permitidos.
              </span>
            )}
            {errors.name?.type === "minLength" && (
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                  fontStyle: "italic",
                  margin: -14,
                  marginBottom: -6,
                }}
              >
                Mínimo 3 carácteres.
              </span>
            )}

            <Input
              size="lg"
              label="Código de asignatura"
              type="number"
              {...register("codeSubject", {
                required: true,
                maxLength: 20,
                minLength: 2,
              })}
            />
            {errors.lastName?.type === "required" && (
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                  fontStyle: "italic",
                  margin: -14,
                  marginBottom: -6,
                }}
              >
                Campo requerido.
              </span>
            )}
            {errors.lastName?.type === "maxLength" && (
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                  fontStyle: "italic",
                  margin: -14,
                  marginBottom: -6,
                }}
              >
                Máximo 20 carácteres permitidos.
              </span>
            )}
            {errors.lastName?.type === "minLength" && (
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                  fontStyle: "italic",
                  margin: -14,
                  marginBottom: -6,
                }}
              >
                Mínimo 2 carácteres.
              </span>
            )}
          </div>
          <br />
          <Button type="submit" className="m-5" onClick={addSubject}>
            Añadir
          </Button>
          {successAlert === true && (
            <div className="flex w-full flex-col gap-2">
              <Alert
                color="green"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
              >
                Asignatura añadida con éxito.
              </Alert>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Subjects;
