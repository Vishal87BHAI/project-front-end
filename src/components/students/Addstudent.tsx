import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addstudent=()=>{
    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [clas, setClas] = useState('');
    const [roll, setRoll] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    
    const handlesubmit = async () => {

        if (name === "" && clas === "" && roll === "" && dob === "" && gender === "") {
            alert("Please enter the values");
        }
        else if (name === "") {
            alert("Please enter the name");
        }
        else if (clas === "") {
            alert("Please enter the id");
        }
        else if (roll === "") {
            alert("Please enter the subject");
        }
        else if (dob === "") {
            alert("Please enter the dob");
        }
        else if (gender === "") {
            alert("Please select the gender");
        }
        else {
            let result = await fetch("https://vishal-bhai-back-end.vercel.app/student",
                {
                    method: "post",
                    body: JSON.stringify({ name, clas, roll, dob, gender }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('token')||'{}')
                    }
                });
            result = await result.json();
            alert("New Student added successfully");
            navigate("/Student");
        }
    }

    const handlegender = (e: any) => {
        setGender(e.target.value)
    }

    return(
        <div style={{marginTop:"70px"}}>
            <h1>Add Student</h1>
            <div style={{ marginLeft: "43vh" }}>
                <FormControl className="form" style={{ width: "50%" , marginRight:"150px" , marginTop:"40px", marginBottom:"20px" }}>
                    <TextField  className="addinput" id="name" label="Student Name" placeholder="Enter the Name of Student" onChange={(e) => setName(e.target.value)} variant="outlined" />
                    <TextField  className="addinput" id="class" label="Class" placeholder="Enter the Class of Student" onChange={(e) => setClas(e.target.value)} variant="outlined" />
                    <TextField  className="addinput" id="roll" label="Roll Number" placeholder="Enter the Roll Number of Student" onChange={(e) => setRoll(e.target.value)} variant="outlined" />
                    <TextField  className="addinput" type="date" id="dob" onChange={(e) => setDob(e.target.value)} variant="outlined" />

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group">

                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handlegender} />
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handlegender} />
                            <FormControlLabel value="other" control={<Radio />} label="Other" onChange={handlegender} />
                            <div style={{display:"inline-flex"}}>
                    <Button variant="contained" style={{width:"25vh",marginLeft:"5vh",marginTop:"20px"}} type="submit" onClick={()=>{navigate("/Student")}}>Back</Button>
                    <Button variant="contained" style={{ width: "25vh", marginLeft: "10px", marginTop: "20px" }} type="submit" onClick={handlesubmit}>Submit</Button>
                    </div>
                        </RadioGroup>
                </FormControl>
            </div >                     
        </div>
    )
}

export default Addstudent;