import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteStudentThunk,
  getStudentIdThunk,
  updateStudentThunk,
} from "../store/slices/students.slice";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Alert,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import {
  getGradesThunk,
  updateGradesThunk,
} from "../store/slices/grades.slice";
import { getSubjectsThunk } from "../store/slices/subjects.slice";

const StudentDetail = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students);
  const grades = useSelector((state) => state.grades);
  const subjects = useSelector((state) => state.subjects);
  const [deleted, setDeleted] = useState(true);
  const [update, setUpdate] = useState(false);
  const [successAlert, setSuccessAlert] = useState(undefined);
  const codeStatus = useSelector((state) => state.codeStatus);

  const handleDelete = (id) => {
    dispatch(deleteStudentThunk(id));
    setDeleted(false);
    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const updateStudent = (data) => {
    console.log(data);
    dispatch(updateStudentThunk(data, id));
    setSuccessAlert(codeStatus);
    setUpdate(true);
    setTimeout(() => {
      setSuccessAlert(false);
      setUpdate(false);
    }, 2000);
  };

  const updateGrades = (data) => {
    dispatch(updateGradesThunk(id, data));
  };

  useEffect(() => {
    dispatch(getStudentIdThunk(id));
    dispatch(getGradesThunk());
    dispatch(getSubjectsThunk());
  }, [update]);

  console.log(codeStatus);

  return (
    <div>
      {deleted ? (
        <Card className="justify-center mb-6 ml-auto mr-auto mt-6 w-96">
          <CardBody className="flex-a">
            <Typography variant="h3" color="blue-gray" className="mb-2">
              {students.name} {students.lastName}
            </Typography>
            <br />
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              ID de estudiante:<Typography> {students.id}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Nombres: <Typography>{students.name}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Apellidos: <Typography>{students.lastName}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Edad: <Typography>{students.age}</Typography>
            </Typography>
            Información de contacto
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Dirección: <Typography>{students.address}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Teléfono: <Typography>{students.phone}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Número ID nacional: <Typography>{students.numId}</Typography>
            </Typography>
            Información académica
            <br />
            <br />
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              {/* {console.log(students.Grade)} */}
              Cursando actualmente:
              {students.Grade?.map((grade) => (
                <Typography>
                  ID Asignatura: {grade.subjectId} NOTA: {grade.grade}
                </Typography>
              ))}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => setUpdate(true)}>Actualizar datos</Button>
            {students.Grade && undefined ? (
              <Button color="red" onClick={() => handleDelete(id)}>
                Eliminar
              </Button>
            ) : (
              <Button color="red" disabled>
                Eliminar
              </Button>
            )}
            {/* <Button color="red" onClick={() => handleDelete(id)}>
              Eliminar
            </Button> */}
          </CardFooter>
        </Card>
      ) : (
        <div className="flex w-full flex-col gap-2">
          <Alert
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            Estudiante eliminado con éxito
          </Alert>
        </div>
      )}

      {update === true && (
        <>
          <Card
            className="justify-center mt-8 mb-2 ml-auto mr-auto w-80 max-w-screen-lg sm:w-70 "
            color="white"
            shadow={true}
          >
            <Typography variant="h4" color="blue-gray">
              Actualizar datos de estudiante
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
              En este apartado podrás crear nuevos estudiantes, se cuidadoso con
              la información.
            </Typography> */}
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-70"
              onSubmit={handleSubmit(updateStudent)}
            >
              <div className="mb-4 flex flex-col gap-4">
                {console.log(students.name)}
                <Input
                  defaultValue={students.name}
                  type="text"
                  size="lg"
                  label="Nombres"
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
                  label="Apellidos"
                  defaultValue={students.lastName}
                  type="text"
                  {...register("lastName", {
                    required: true,
                    maxLength: 20,
                    minLength: 4,
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
                    Mínimo 4 carácteres.
                  </span>
                )}

                <Typography color="gray" className="m-0 font-normal">
                  Información de contacto
                </Typography>
                <Input
                  defaultValue={students.address}
                  type="text"
                  size="lg"
                  label="Dirección de contacto"
                  {...register("address", {
                    required: true,
                    maxLength: 25,
                    minLength: 6,
                  })}
                />
                {errors.address?.type === "required" && (
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
                {errors.address?.type === "maxLength" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: 12,
                      fontStyle: "italic",
                      margin: -14,
                      marginBottom: -6,
                    }}
                  >
                    Máximo 25 carácteres.
                  </span>
                )}
                {errors.address?.type === "minLength" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: 12,
                      fontStyle: "italic",
                      margin: -14,
                      marginBottom: -6,
                    }}
                  >
                    Mínimo 6 carácteres.
                  </span>
                )}

                <Input
                  defaultValue={students.age}
                  type="number"
                  size="lg"
                  label="Edad"
                  {...register("age", {
                    required: true,
                    maxLength: 2,
                  })}
                />
                {errors.age?.type === "required" && (
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
                {errors.age?.type === "maxLength" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: 12,
                      fontStyle: "italic",
                      margin: -14,
                      marginBottom: -6,
                    }}
                  >
                    No mientas, no tienes más de 99 años.
                  </span>
                )}

                <Input
                  defaultValue={students.phone}
                  type="number"
                  size="lg"
                  label="Número de télefono"
                  {...register("phone", {
                    required: true,
                    maxLength: 12,
                  })}
                />
                {errors.phone?.type === "required" && (
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
                {errors.phone?.type === "maxLength" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: 12,
                      fontStyle: "italic",
                      margin: -14,
                      marginBottom: -6,
                    }}
                  >
                    Máximo 12 carácteres.
                  </span>
                )}

                <Input
                  defaultValue={students.numId}
                  size="lg"
                  type="number"
                  label="Número de identidad nacional"
                  {...register("numId")}
                />
              </div>
              <Button type="submit" className="m-5" onClick={updateStudent}>
                Actualizar
              </Button>
              {successAlert === 200 && (
                <div className="flex w-full flex-col gap-2">
                  <Alert
                    color="green"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                  >
                    Datos del estudiante actualizados con éxito.
                  </Alert>
                </div>
              )}
              {/* {successAlert != 200 && (
                <div className="flex w-full flex-col gap-2">
                  <Alert
                    color="red"
                    icon={
                      <InformationCircleIcon
                        strokeWidth={2}
                        className="h-6 w-6"
                      />
                    }
                  >
                    Ooopsss.
                  </Alert>
                </div>
              )} */}
            </form>
          </Card>
        </>
      )}
      <Card className="justify-center mb-6 ml-auto mr-auto mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Asignación de notas
          </Typography>
          <Typography>
            Selecciona el ID de la asignatura y asigna la nota.
          </Typography>
          <div
            style={{ gap: 5 }}
            className="justify-center mb-6 ml-auto mr-auto flex flex-col w-72 gap-6"
          >
            <form onSubmit={handleSubmit(updateGrades)}>
              <Select
                variant="static"
                label="ID asignatura"
                placeholder="Selecciona ID asignatura"
              >
                {subjects.map((subjects) => (
                  <Option
                    placeholder="Selecciona ID asignatura"
                    {...register("subjectId", {
                      required: true,
                      maxLength: 20,
                      minLength: 1,
                    })}
                  >
                    {subjects.id}: {subjects.name}
                  </Option>
                ))}
              </Select>
              <div className="w-72">
                <Input
                  label="Id de estudiante"
                  defaultValue={`ID de estudiante: ${id}`}
                  disabled
                  {...register("studentId", {
                    required: true,
                    maxLength: 20,
                    minLength: 1,
                  })}
                />
              </div>
              <div className="w-72">
                <Input
                  placeholder="NOTA"
                  //   defaultValue={id}
                  type="number"
                  {...register("grade", {
                    required: true,
                    min: 0,
                    max: 5,
                  })}
                />
                {errors.grade?.type === "required" && (
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
                {errors.name?.type === "min" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: 12,
                      fontStyle: "italic",
                      margin: -14,
                      marginBottom: -6,
                    }}
                  >
                    Nota mínima 0
                  </span>
                )}
                {errors.name?.type === "max" && (
                  <span
                    style={{
                      color: "red",
                      fontSize: 12,
                      fontStyle: "italic",
                      margin: -14,
                      marginBottom: -6,
                    }}
                  >
                    Nota máxima 5
                  </span>
                )}
              </div>
              <Button onClick={updateGrades}>SUBIR NOTA</Button>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentDetail;
