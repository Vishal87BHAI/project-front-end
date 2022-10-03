import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Home from './components/home/Home';
import Student from './components/students/Student';
import Teacher from './components/teachers/Teacher';
import Login from './components/login/Login';
import Error from './components/error/Error';
import Addstudent from './components/students/Addstudent';
import Editstudent from './components/students/Editstudent';
import Addteacher from './components/teachers/Addteacher';
import Editteacher from './components/teachers/Editteacher';
import Viewstudent from './components/students/Viewstudent';
import Viewteacher from './components/teachers/Viewteacher';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Addstudent" element={<Addstudent />} />
          <Route path="/Editstudent" element={<Editstudent />} />
          <Route path="/Viewstudent" element={<Viewstudent />} />
          <Route path="/Addteacher" element={<Addteacher />} />
          <Route path="/Editteacher/:id" element={<Editteacher />} />
          <Route path="/Viewteacher/:id" element={<Viewteacher />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
