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
import { useDispatch } from "react-redux";
import { addTeacherThunk } from "../store/slices/teachers.slice";

const Students = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const [successAlert, setSuccesAlert] = useState(undefined);

  const addTeacher = (data) => {
    console.log(data);
    dispatch(addTeacherThunk(data));
    setSuccesAlert(true);
    setTimeout(() => {
      console.log(successAlert);
      setSuccesAlert(false);
    }, 2000);
  };

  return (
    <Card
      className="mb-8 mt-8 p-6 flex justify-center text-center"
      color="white"
      shadow={true}
    >
      <Typography variant="h4" color="blue-gray">
        Añadir nuevo docente
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        En este apartado podrás crear nuevos docentes, se cuidadoso con la
        información.
      </Typography>
      <form
        className="justify-center mt-8 mb-2 ml-auto mr-auto w-80 max-w-screen-lg sm:w-70"
        onSubmit={handleSubmit(addTeacher)}
      >
        <div className="mb-4 flex flex-col gap-4">
          <Input
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
            size="lg"
            type="number"
            label="Número de identidad nacional"
            {...register("numId")}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Acepto los
              <p className="font-medium transition-colors hover:text-blue-500">
                &nbsp;términos y condiciones
              </p>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          onClick={() => setCheckbox(!checkbox)}
          id="check"
          type="checkbox"
          {...register("checkbox", {
            required: true,
            value: Boolean,
          })}
        />
        {console.log(checkbox)}
        <br />
        {errors.checkbox?.type === "required" && (
          <span
            style={{
              color: "red",
              fontSize: 12,
              fontStyle: "italic",
              margin: -14,
              marginBottom: -6,
            }}
          >
            Debes aceptar los términos y condiciones antes de añadir un nuevo
            docente.
          </span>
        )}
        <br />
        {/* {checkbox === false && <span style={{color: "red", fontSize: 12,  fontStyle: "italic", margin: -14, marginBottom: -6}}>Debes aceptar los términos y condiciones antes de añadir un nuevo docente.</span> } */}
        <Button type="submit" className="m-5" onClick={addTeacher}>
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
              Docente añadido con éxito.
            </Alert>
          </div>
        )}
      </form>
    </Card>
  );
};

export default Students;
