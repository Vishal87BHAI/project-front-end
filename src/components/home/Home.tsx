import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Navbar from '../navigation/Navbar';
import './Home.css';

const Home = () => {

    const [tdata, setTdata]: any = useState(null);
    const [sdata, setSdata]: any = useState(null);

    useEffect(() => {
        getTeacherdata();
        getstudentdata();
    }, [])

    const getTeacherdata = async () => {
        var result = await fetch("https://vishal-bhai-back-end.vercel.app/getteacher", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
            }
        });
        result = await result.json();
        setTdata(result);

    }

    let countTeacher = tdata?.length ?? 0;

    const getstudentdata = async () => {
        var result = await fetch("https://vishal-bhai-back-end.vercel.app/getstudent", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
            }
        });
        result = await result.json();
        setSdata(result);
    }

    let countstudent = sdata?.length ?? 0;


    return (
        <div>
            
            <div className='body'>
                {tdata || sdata ?
                    <div>
                        <h1 className="home" style={{ fontSize: "60px" }}>Welcome To School Home Page</h1>
                        <hr />
                        <div className='main'>
                            <div className='teacher'><h1 style={{ fontSize: "50px" }}>Teachers</h1>
                                <h1 style={{ fontSize: "50px" }}>{countTeacher}</h1>
                            </div>
                            <div className='line'></div>
                            <div className='student'><h1 style={{ fontSize: "50px" }}>Students</h1>
                                <h1 style={{ fontSize: "50px" }}>{countstudent}</h1>
                            </div>
                        </div>
                    </div>
                    :
                    <div
                        style={{
                            height: '95vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'white',
                            color: 'black'
                        }}
                    >
                        <Spinner animation="border" role="status" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Home;