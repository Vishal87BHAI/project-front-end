import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Student=()=>{
    return(
        <div>
            <h1 style={{marginTop: "55px"}}>Students</h1>
            <Link to={"/Addstudent"}><Button variant="contained" style={{ float: "right", marginRight: "90px" }}>Add Student</Button></Link><br/><br/>
            <table className="table border shadow table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Roll Number</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Student;