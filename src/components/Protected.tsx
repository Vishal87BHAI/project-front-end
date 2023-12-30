import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Protected = ({ Component }: { Component: any }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("token");
        !auth && navigate('/login');
    }, []);

    return <Component />;
}

export default Protected;