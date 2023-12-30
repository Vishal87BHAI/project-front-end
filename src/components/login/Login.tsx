import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth)
        {
            navigate("/");
        }
        else{
            navigate("/login");
        }
    },[])

    const handleSubmit = async () => {

        if(email==="")
        {
            alert("Please enter Email")
        }
        else if(password==="")
        {
            alert("Please enter Password")
        }
        else
        {
            let result:any = await fetch("https://vishal-bhai-back-end.vercel.app/login",
            {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        let res = await result.json();
        if(res && !res.error)
        {
            localStorage.setItem("token",JSON.stringify(res.auth));
            alert("Login Successfully")
            navigate("/");
        }
        else{
            alert("Please enter valid data")
        }
        }

    }

    return (
        <div style={{paddingTop:"90px" }}>

            <h1 style={{paddingBottom:"40px", fontSize:"60px", color:"red" }}>Welcome to School Management</h1>

            <h1 style={{color:"blue",fontSize:"50px" }}>Login</h1><br />

            <div>
                <TextField className="login" id="mail" label="mail" placeholder="Enter Your mail" variant="outlined" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div><br />
            <div className="form-group">
                <TextField className="login" id="password" label="Password" placeholder="Enter your password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div><br />
            <Button type="button" variant="contained" onClick={handleSubmit} >Submit</Button>
            <br />
        </div>
    )
}

export default Login;