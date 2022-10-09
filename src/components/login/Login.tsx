import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
            let result:any = await fetch("http://localhost:9000/login",
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
            localStorage.setItem("user",JSON.stringify(res));
            alert("Login Successfully")
            navigate("/Home");
        }
        else{
            alert("Please enter valid data")
        }
        }

    }

    return (
        <div style={{paddingTop:"100px" }}>
            <h1>Login</h1><br />

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