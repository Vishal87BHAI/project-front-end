import { useEffect, useState } from 'react';
import './Home.css';

const Home=()=>{
    
    const [data,setData]:any=useState([])

    useEffect(() => {
        getTeacherdata();
    }, [])

    const getTeacherdata = async () => {
        var result = await fetch("http://localhost:9000/getteacher");
        result = await result.json();
        setData(result);
    }

    let countTeacher=data.length;


    return(
        <div className='body'>
            <h1 className="home" style={{fontSize:"60px"}}>Home Page</h1>
            <hr style={{color:"white"}}/>
            <div className='main'>
                <div className='teacher'><h1 style={{color:"white" , fontSize:"50px"}}>Teachers</h1>
                <h1 style={{color:"white" , fontSize:"50px"}}>{countTeacher}</h1>
                </div>
                <div className='line'></div>
                <div className='student'><h1 style={{color:"white" , fontSize:"50px"}}>Students</h1>
                <h1 style={{color:"white" , fontSize:"50px"}}>0</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;