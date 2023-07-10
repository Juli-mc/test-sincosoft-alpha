import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteTeacherThunk,
  getTeacherIdThunk,
  updateTeacherThunk,
} from "../store/slices/teachers.slice";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Alert,
  Input,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

const TeacherDetail = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teachers = useSelector((state) => state.teachers);
  const [deleted, setDeleted] = useState(true);
  const [update, setUpdate] = useState(false);
  const [successAlert, setSuccessAlert] = useState(undefined);
  const [fixRender, setFixRender] = useState(true);
  const codeStatus = useSelector((state) => state.codeStatus);

  const handleDelete = (id) => {
    dispatch(deleteTeacherThunk(id));
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

  const updateTeacher = (data) => {
    console.log(data);
    dispatch(updateTeacherThunk(data, id));
    setSuccessAlert(codeStatus);
    setUpdate(false);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 2000);
  };

  useEffect(() => {
    dispatch(getTeacherIdThunk(id));
  }, [update]);

  console.log(codeStatus, "codigo");
  return (
    <div>
      {deleted ? (
        <Card className="justify-center mt-8 mb-2 ml-auto mr-auto w-96">
          <CardBody className="flex-a">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 text-left"
            >
              {teachers.name} {teachers.lastName}
            </Typography>
            <br />
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left "
            >
              ID de docente:<Typography> {teachers.id}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Nombres: <Typography>{teachers.name}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Apellidos: <Typography>{teachers.lastName}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Asignatura:{" "}
              {teachers.Subject === undefined ? (
                <Typography>No asignada</Typography>
              ) : (
                <Typography>{teachers.Subject[0]?.name}</Typography>
              )}
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Edad: <Typography>{teachers.age}</Typography>
            </Typography>
            Información de contacto
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Dirección: <Typography>{teachers.address}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Teléfono: <Typography>{teachers.phone}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-left"
            >
              Número ID nacional: <Typography>{teachers.numId}</Typography>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => setUpdate(true)}>Actualizar datos</Button>

            {teachers.Subject && undefined ? (
              <Button color="red" onClick={() => handleDelete(id)}>
                Eliminar
              </Button>
            ) : (
              <Button color="red" disabled>
                Eliminar
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <div className="flex w-full flex-col gap-2">
          <Alert
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            docente eliminado con éxito
          </Alert>
        </div>
      )}

      {update === true && (
        <>
          <Card
            className="justify-center mt-8 mb-2 ml-auto mr-auto w-80 max-w-screen-lg sm:w-70"
            color="white"
            shadow={true}
          >
            <Typography variant="h4" color="blue-gray">
              Actualizar datos de docente
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
              En este apartado podrás crear nuevos docentes, se cuidadoso con
              la información.
            </Typography> */}
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-70"
              onSubmit={handleSubmit(updateTeacher)}
            >
              <div className="mb-4 flex flex-col gap-4">
                {console.log(teachers.name)}
                <Input
                  defaultValue={teachers.name}
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
                  defaultValue={teachers.lastName}
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
                  defaultValue={teachers.address}
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
                  defaultValue={teachers.age}
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
                  defaultValue={teachers.phone}
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
                  defaultValue={teachers.numId}
                  size="lg"
                  type="number"
                  label="Número de identidad nacional"
                  {...register("numId")}
                />
              </div>
              <Button
                type="submit"
                className="m-5"
                onClick={
                  (() => updateTeacher,
                  setTimeout(() => {
                    () => setUpdate(false);
                  }, 2000))
                }
              >
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
                    Datos del docente actualizados con éxito.
                  </Alert>
                </div>
              )}

              {successAlert != 200 && (
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
                    Oooopsss
                  </Alert>
                </div>
              )}
            </form>
          </Card>
        </>
      )}
    </div>
  );
};

export default TeacherDetail;
