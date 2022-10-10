import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Addteacher = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [subject, setSubject] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');


    const handlesubmit = async () => {

        if (name === "" && id === "" && subject === "" && dob === "" && gender === "") {
            alert("Please enter the values");
        }
        else if (name === "") {
            alert("Please enter the name");
        }
        else if (id === "") {
            alert("Please enter the id");
        }
        else if (subject === "") {
            alert("Please enter the subject");
        }
        else if (dob === "") {
            alert("Please select the Date of Birth");
        }
        else if (gender === "") {
            alert("Please select the gender");
        }
        else {
            let result = await fetch("http://localhost:9000/teacher",
                {
                    method: "post",
                    body: JSON.stringify({ name, id, subject, dob, age, gender }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
            let res = await result.json();
            alert("New Teacher added successfully");
            navigate("/Teacher");
        }
    }

    const handlegender = (e: any) => {
        setGender(e.target.value)
    }

    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Add Teacher</h1>
            <div style={{ marginLeft: "43vh" }}>
                <FormControl className="form" style={{ width: "50%", marginRight: "150px", marginTop: "40px", marginBottom:"20px" }}>
                    <TextField required className="addinput" id="name" label="Teacher Name" placeholder="Enter the Name of Teacher" onChange={(e) => setName(e.target.value)} variant="outlined" />
                    <TextField required className="addinput" id="id" label="Teacher Id" placeholder="Enter the Id of Teacher" onChange={(e) => setId(e.target.value)} variant="outlined" />
                    <TextField required className="addinput" id="subject" label="Subject" placeholder="Enter the Subject" onChange={(e) => setSubject(e.target.value)} variant="outlined" />
                    <TextField required className="addinput" type="date" value={dob} id="dob" onChange={(e) => setDob(e.target.value)} variant="outlined" />

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group">

                        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handlegender} />
                        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handlegender} />
                        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={handlegender} />
                    </RadioGroup>
                    <div style={{ display: "inline-flex" }}>
                        <Button variant="contained" style={{ width: "25vh", marginLeft: "5vh", marginTop: "20px" }} type="submit" onClick={() => { navigate("/Teacher") }}>Back</Button>
                        <Button variant="contained" style={{ width: "25vh", marginLeft: "10px", marginTop: "20px" }} type="submit" onClick={handlesubmit}>Submit</Button>
                    </div>
                </FormControl>
            </div >
        </div >
    )

}

export default Addteacher;