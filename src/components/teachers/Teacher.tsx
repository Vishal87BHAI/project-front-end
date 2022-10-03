import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface istate {
    name: String,
    id: String,
    subject: String,
    dob: {
        type: Date
    },
    age: String,
    gender: String
}

const Teacher = () => {

    const [data, setData]: any = useState([]);

    const navigate=useNavigate();

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result = await fetch("http://localhost:9000/getteacher");
        result = await result.json();
        setData(result);
    }

    const deletedata = async (id: any) => {
        var result = await fetch("http://localhost:9000/teacher/" + id,
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

    return (
        <div style={{ marginTop: "55px" }}>
            <h1>Teachers</h1>
            <Link to={"/Addteacher"}><Button variant="contained" style={{ float: "right", marginRight: "90px" }}>Add Teacher</Button></Link><br /><br />
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
                        data.map((item: any, index: any) =>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item._id}</td>
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