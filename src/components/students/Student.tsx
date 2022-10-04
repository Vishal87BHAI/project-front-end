import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Student=()=>{

    const [data, setData]: any = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result = await fetch("http://localhost:9000/getstudent");
        result = await result.json();
        setData(result);
    }

    const deletedata = async (id: any) => {
        var result = await fetch("http://localhost:9000/student/" + id,
            {
                method: "Delete"
            });
        result = await result.json()
        if (result) {
            alert(id + " Deleted")
            getdata();
        }
        else {
            alert("error")
        }
    }

    const handlesearch=async (e:any)=>{
        var result = await fetch("http://localhost:9000/search/"+e.target.value);
        result = await result.json();
        setData(result);
    }

    return(
        <div>
            <h1 style={{marginTop: "55px"}}>Students</h1>
            <div style={{ backgroundColor: "orange", height: "40px", borderRadius: "10px", marginLeft: "5px", marginRight: "5px" }}>
                <input type="text" placeholder="Search" onChange={handlesearch} style={{ marginTop: "5px", float: "left", marginLeft: "10px" }} />
                <Button variant="contained" style={{ float: "right", marginRight: "90px", marginTop:"1px" }} onClick={()=> navigate("/Addstudent")}>Add Student</Button>
                </div><br/><br/>
            <table className="table border shadow table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Serial No.</th>        
                        <th scope="col">Object _id</th>
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
                {
                        data.map((item: any, index: any) =>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.clas}</td>
                                <td>{item.roll}</td>
                                <td>{item.dob}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td><Button variant="contained" style={{ marginRight: "5px" }} onClick={()=> navigate("/Viewstudent/"+item._id)}>View</Button>
                                    <Button variant="contained" style={{ marginRight: "5px" }} onClick={()=> navigate("/Editstudent/"+item._id)}>Edit</Button>
                                    <Button variant="contained" onClick={()=>{deletedata(item._id)}} >Delete</Button></td>
                            </tr>

                        )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Student;