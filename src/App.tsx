import { Pagination } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Accordian } from "./components/boostrapTest/Accordian";
import { AlertWithState } from "./components/boostrapTest/ALertWithState";
import { CarouselSlider } from "./components/boostrapTest/CarouselSlider";
import { EsriMaps } from "./components/boostrapTest/EsriMaps";
import { FormValidation } from "./components/boostrapTest/FormValidation";
import { ModalDialog } from "./components/boostrapTest/ModalDialog";
import { OffcanvasSidebar } from "./components/boostrapTest/OffcanvasSidebar";
import { TabsinPage } from "./components/boostrapTest/TabsinPage";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navigation/Navbar";
import Protected from "./components/Protected";
import Addstudent from "./components/students/Addstudent";
import Editstudent from "./components/students/Editstudent";
import Student from "./components/students/Student";
import Viewstudent from "./components/students/Viewstudent";
import Addteacher from "./components/teachers/Addteacher";
import Editteacher from "./components/teachers/Editteacher";
import Teacher from "./components/teachers/Teacher";
import Viewteacher from "./components/teachers/Viewteacher";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ height: "5%" }}>
          <Navbar />
        </div>
        <div style={{ height: "95%", marginTop: "3rem" }}>
          <Routes>
            <Route path="/" element={<Protected Component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Teacher" element={<Teacher />} />
            <Route path="/Student" element={<Student />} />
            <Route path="/Addstudent" element={<Addstudent />} />
            <Route path="/Editstudent/:id" element={<Editstudent />} />
            <Route path="/Viewstudent/:id" element={<Viewstudent />} />
            <Route path="/Addteacher" element={<Addteacher />} />
            <Route path="/Editteacher/:id" element={<Editteacher />} />
            <Route path="/Viewteacher/:id" element={<Viewteacher />} />
            <Route path="/Pagination" element={<Pagination />} />
            <Route path="/Alert" element={<AlertWithState />} />
            <Route path="/Validation" element={<FormValidation />} />
            <Route path="/Accordian" element={<Accordian />} />
            <Route path="/Carousel" element={<CarouselSlider />} />
            <Route path="/ModalDialog" element={<ModalDialog />} />
            <Route path="/Offcanvas" element={<OffcanvasSidebar />} />
            <Route path="/Tabs" element={<TabsinPage />} />
            <Route path="/Maps" element={<EsriMaps />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
