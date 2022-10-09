import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Viewstudent=()=>
{

    const navigate=useNavigate();

    let {id}=useParams();

    const [data, setData]:any = useState([]);

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result=await fetch("http://localhost:9000/getstudent/"+id);
        result=await result.json();
        setData(result);
    }

    return(
        <div>
             <div style={{ marginTop: "55px" }}>
            <h1>Student</h1><br/>
            <ul className="list-group w-50" style={{display:"inline-block" , marginBottom:"40px"  }}>
                
            <h3>Student Name</h3><li className="list-group-item active">{data.name}</li><br/>
                
            <h3>Class</h3><li className="list-group-item active">{data.clas}</li><br/>
                
            <h3>Roll Number</h3><li className="list-group-item active">{data.roll}</li><br/>

            <h3>Date of birth</h3><li className="list-group-item active">{data.dob}</li><br/>

            <h3>Age</h3><li className="list-group-item active">{data.age}</li><br/>

            <h3>Gender</h3><li className="list-group-item active">{data.gender}</li><br/>

            <Button variant="contained" style={{width:"25vh",marginTop:"20px"}} type="submit" onClick={()=>{navigate("/Student")}}>Back</Button>
            </ul>
        </div>
        </div>
    )
}

export default Viewstudent;