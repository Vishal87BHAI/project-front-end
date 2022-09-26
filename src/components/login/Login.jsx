import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div style={{ paddingTop: "100px" }}>
            <h1>Login</h1><br/>
                <form style={{ width: "900px",paddingLeft:"470px" }}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div><br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div><br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form><br/>
                <span><NavLink to={"/Register"}>Not a user Register here</NavLink></span>
        </div>
    )
}

export default Login;