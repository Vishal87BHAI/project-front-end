import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Editstudent=()=>{
    const [data, setData]:any = useState([{
        name:"",
        clas:"",
        roll:"",
        dob:"",
        age:"",
        gender:""
    }]);

    const params=useParams();
    const navigate=useNavigate();


    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result=await fetch("http://localhost:9000/getstudent/"+params.id);
        result=await result.json();
        setData(result);   
    }

    const handlesubmit = async () => {

            let result = await fetch("http://localhost:9000/student/"+params.id,
                {
                    method: "put",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                        
                    }
                });
            result = await result.json();
            console.log(result);
            alert("Student Updated successfully");
            navigate("/Student");
        
    }

    const handlegender = (e: any) => {
        setData({gender:e.target.value})
    }

    return(
        <div style={{marginTop:"70px"}}>
            <h1>Edit Student</h1>
            <div style={{ marginLeft: "43vh" }}>
                <FormControl className="form" style={{ width: "50%" , marginRight:"150px" , marginTop:"40px" }}>
                    <TextField  className="addinput" id="name" placeholder="Enter the Name of Student" value={data.name} onChange={(e)=>{setData({name:e.target.value})}} variant="outlined" />
                    <TextField  className="addinput" id="class" placeholder="Enter the Class of Student" value={data.clas} onChange={(e)=>{setData({clas:e.target.value})}} variant="outlined" />
                    <TextField  className="addinput" id="roll" placeholder="Enter the Roll Number of Student" value={data.roll} onChange={(e)=>{setData({roll:e.target.value})}} variant="outlined" />
                    <TextField  className="addinput" type="date" id="dob" value={data.dob} onChange={(e)=>{setData({dob:e.target.value})}} variant="outlined" />

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            defaultValue={data.gender}>

                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handlegender} />
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handlegender} />
                            <FormControlLabel value="other" control={<Radio />} label="Other" onChange={handlegender} />
                            <div style={{display:"inline-flex"}}>
                        <Button variant="contained" style={{width:"25vh",marginLeft:"5vh",marginTop:"20px"}} type="submit" onClick={()=>{navigate("/Student")}}>Back</Button>
                        <Button variant="contained" style={{width:"25vh",marginLeft:"10px",marginTop:"20px"}} type="submit" onClick={handlesubmit}>Submit</Button>
                        </div>
                        </RadioGroup>
                </FormControl>
            </div >                          
        </div>
    )
}

export default Editstudent;