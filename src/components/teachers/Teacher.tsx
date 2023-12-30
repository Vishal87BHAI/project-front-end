import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Pagination from "../Pagination";

interface ITeacher {
    name: String,
    id: String,
    subject: String,
    dob: String,
    age: String,
    gender: String,
    _id: string
}

const Teacher = () => {

    const [data, setData] = useState<ITeacher[]>([]);

    const [showppage,setShowppage]=useState<Number>(2);
    const [pagination,setPagination]=useState<any>({
        start:0,
        end:showppage
    });

    const navigate = useNavigate();

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
        let result = await fetch("https://vishal-bhai-back-end.vercel.app/getteacher", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
            }
        });
        const res: ITeacher[] = await result.json();
        setData(res);
    }

    const deletedata = async (id: any) => {
        var result = await fetch("https://vishal-bhai-back-end.vercel.app/teacher/" + id,
            {
                method: "Delete"
                ,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
                }
            });
        const res: ITeacher[] = await result.json()
        if (res) {
            alert(id + " Deleted")
            getdata();
        }
        else {
            alert("error")
        }
    }

    const handlesearch = async (e: any) => {
        var result = await fetch("https://vishal-bhai-back-end.vercel.app/search/" + e.target.value, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
            }
        });
        const res: ITeacher[] = await result.json();
        setData(res);
    }

    const onpagination=(start:any,end:any)=>{
        setPagination({start:start,end:end});
    }

    return (
        <div>
            <Navbar />
            <h1 style={{ marginTop: "55px" }}>Teachers</h1>
            <div style={{ backgroundColor: "orange", height: "40px", borderRadius: "10px", marginLeft: "5px", marginRight: "5px" }}>
                <input type="text" placeholder="Search" onChange={handlesearch} style={{ marginTop: "5px", float: "left", marginLeft: "10px" }} />
                <Button variant="contained" style={{ float: "right", marginRight: "90px", marginTop: "1px" }} onClick={() => navigate("/Addteacher")}>Add Teacher</Button>
            </div>
            <br/>
            <Pagination 
            showppage={showppage}
            onpagination={onpagination}
            total={data.length}
             />
           <br/>
            <table className="table border shadow table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.slice(pagination.start,pagination.end).map((item: ITeacher) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.dob}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td><Button variant="contained" style={{ marginRight: "5px" }} onClick={() => navigate("/Viewteacher/" + item._id)}>View</Button>
                                    <Button variant="contained" style={{ marginRight: "5px" }} onClick={() => navigate("/Editteacher/" + item._id)}>Edit</Button>
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