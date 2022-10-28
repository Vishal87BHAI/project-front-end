import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Pagination from "../Pagination";


const Student = () => {

    const [showppage, setShowppage] = useState<Number>(2);
    const [pagination, setPagination] = useState<any>({
        start: 0,
        end: showppage
    });

    interface IStudent {
        name: String,
        clas: String,
        roll: String,
        dob: String,
        age: String,
        gender: String,
        _id: string
    }

    const [data, setData]: any = useState<IStudent[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result = await fetch("http://localhost:9000/getstudent", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
            }
        });
        let res: IStudent[] = await result.json();
        setData(res);
    }

    const deletedata = async (id: any) => {
        var result = await fetch("http://localhost:9000/student/" + id,
            {
                method: "Delete"
                ,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
                }
            });
        let res = await result.json()
        if (res) {
            alert(id + " Deleted")
            getdata();
        }
        else {
            alert("error")
        }
    }

    const handlesearch = async (e: any) => {
        var result = await fetch("http://localhost:9000/search/" + e.target.value, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
            }
        });
        let res: IStudent[] = await result.json();
        setData(res);
    }

    const onpagination = (start: any, end: any) => {
        setPagination({ start: start, end: end });
    }

    return (
        <div>
            <Navbar />
            <h1 style={{ marginTop: "55px" }}>Students</h1>
            <div style={{ backgroundColor: "orange", height: "40px", borderRadius: "10px", marginLeft: "5px", marginRight: "5px" }}>
                <input type="text" placeholder="Search" onChange={handlesearch} style={{ marginTop: "5px", float: "left", marginLeft: "10px" }} />
                <Button variant="contained" style={{ float: "right", marginRight: "90px", marginTop: "1px" }} onClick={() => navigate("/Addstudent")}>Add Student</Button>
            </div>
            <br />
            <Pagination
                showppage={showppage}
                onpagination={onpagination}
                total={data.length}
            />
            <br />
            <table className="table border shadow table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Roll Number</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item: IStudent) =>
                            <tr>
                                <td>{item.roll}</td>
                                <td>{item.name}</td>
                                <td>{item.clas}</td>
                                <td>{item.dob}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td><Button variant="contained" style={{ marginRight: "5px" }} onClick={() => navigate("/Viewstudent/" + item._id)}>View</Button>
                                    <Button variant="contained" style={{ marginRight: "5px" }} onClick={() => navigate("/Editstudent/" + item._id)}>Edit</Button>
                                    <Button variant="contained" onClick={() => { deletedata(item._id) }} >Delete</Button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student;