import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Students from "./pages/Students";
import NavBar from "./components/NavBar";
import Teachers from "./pages/Teachers";
import Subjects from "./pages/Subjects";
import Footer from "./components/Footer";
import StudentDetail from "./pages/StudentDetail";
import TeacherDetail from "./pages/TeacherDetail";
import Grades from "./pages/Grades";
import SubjectDetail from "./pages/SubjectDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/subjects/:id" element={<SubjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
