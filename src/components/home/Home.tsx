import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import Navbar from '../navigation/Navbar';
import './Home.css';

const Home = () => {

    const [tdata, setTdata]: any = useState([])
    const [sdata, setSdata]: any = useState([])

    useEffect(() => {
        getTeacherdata();
        getstudentdata();
    }, [])

    const getTeacherdata = async () => {
        var result = await fetch("http://localhost:9000/getteacher", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token')||'{}')
            }
        });
        result = await result.json();
        setTdata(result);
    }

    let countTeacher = tdata.length;

    const getstudentdata = async () => {
        var result = await fetch("http://localhost:9000/getstudent", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token')||'{}')
            }
        });
        result = await result.json();
        setSdata(result);
    }

    let countstudent = sdata.length;


    return (
        <div>
            <Navbar />
            <div className='body'>
                <h1 className="home" style={{ fontSize: "60px" }}>Welcome To School Home Page</h1>
                <hr style={{ color: "white" }} />
                <div className='main'>
                    <div className='teacher'><h1 style={{ color: "white", fontSize: "50px" }}>Teachers</h1>
                        <h1 style={{ color: "white", fontSize: "50px" }}>{countTeacher}</h1>
                    </div>
                    <div className='line'></div>
                    <div className='student'><h1 style={{ color: "white", fontSize: "50px" }}>Students</h1>
                        <h1 style={{ color: "white", fontSize: "50px" }}>{countstudent}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;