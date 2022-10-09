import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navigation/Navbar";

interface ITeacher {
    name: String,
    id: String,
    subject: String,
    dob:  String,
    age: String,
    gender: String,
    _id: string
}

const Teacher = () => {

    const [data, setData] = useState<ITeacher[]>([]);

    const navigate=useNavigate();

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result = await fetch("http://localhost:9000/getteacher");
        const res:ITeacher[] = await result.json();
        setData(res);
    }

    const deletedata = async (id: any) => {
        var result = await fetch("http://localhost:9000/teacher/" + id,
            {
                method: "Delete"
            });
        const res:ITeacher[] = await result.json()
        if (res) {
            alert(id + " Deleted")
            getdata();
        }
        else {
            alert("error")
        }
    }

    const handlesearch=async (e:any)=>{
        var result = await fetch("http://localhost:9000/search/"+e.target.value);
        const res:ITeacher[] = await result.json();
        setData(res);
    }

    return (
        <div>
            <Navbar />
            <h1 style={{ marginTop: "55px" }}>Teachers</h1>
            <div style={{ backgroundColor: "orange", height: "40px", borderRadius: "10px", marginLeft: "5px", marginRight: "5px" }}>
                <input type="text" placeholder="Search" onChange={handlesearch} style={{ marginTop: "5px", float: "left", marginLeft: "10px" }} />
                <Button variant="contained" style={{ float: "right", marginRight: "90px", marginTop:"1px" }} onClick={()=> navigate("/Addteacher")}>Add Teacher</Button>
                </div>
            <br /><br />
            <table className="table border shadow table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Object id</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Id</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item: ITeacher, index: any) =>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.subject}</td>
                                <td>{item.dob}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td><Button variant="contained" style={{ marginRight: "5px" }} onClick={()=> navigate("/Viewteacher/"+item._id)}>View</Button>
                                    <Button variant="contained" style={{ marginRight: "5px" }} onClick={()=> navigate("/Editteacher/"+item._id)}>Edit</Button>
                                    <Button variant="contained" onClick={() => deletedata(item._id)}>Delete</Button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Teacher;