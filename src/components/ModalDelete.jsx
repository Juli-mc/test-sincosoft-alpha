import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudentThunk } from "../store/slices/students.slice";
import { deleteTeacherThunk } from "../store/slices/teachers.slice";
import { deleteSubjectThunk } from "../store/slices/subjects.slice";

const ModalDelete = ({ id, setOpenModal, teacherId, subjectId }) => {
  const dispatch = useDispatch();

  const handleDelete = (id, teacherId, subjectId) => {
    if (id != undefined) {
      dispatch(deleteStudentThunk(id));
    }
    if (teacherId != undefined) {
      dispatch(deleteTeacherThunk(teacherId));
    }
    if (subjectId != undefined) {
      dispatch(deleteSubjectThunk(subjectId));
    }
    setOpenModal(false);
  };

  console.log(teacherId, "id del profe");
  console.log(id, "id del alumno");

  return (
    <div>
      <br />
      <p>Esta acción no es reverisble.</p>
      <p>¿Deseas continuar?</p>
      <Button onClick={() => handleDelete(id, teacherId, subjectId)}>
        ELIMINAR
      </Button>
      <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
    </div>
  );
};

export default ModalDelete;
