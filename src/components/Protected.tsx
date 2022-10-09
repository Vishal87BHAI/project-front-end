import { Navigate, Outlet } from "react-router-dom";


const Protected = () => {

    const auth = localStorage.getItem("user");

    return auth ? <Outlet /> : <Navigate to="/" />
}

export default Protected;