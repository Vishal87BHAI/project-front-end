import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Editteacher = () => {

    const [data, setData]:any = useState([{
        name:"",
        id:"",
        subject:"",
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
        var result=await fetch("http://localhost:9000/getteacher/"+params.id);
        result=await result.json();
        setData(result);   
    }

    const handlesubmit = async () => {

            let result = await fetch("http://localhost:9000/teacher/"+params.id,
                {
                    method: "put",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                        
                    }
                });
            result = await result.json();
            alert("Teacher Updated successfully");
            navigate("/Teacher");
        
    }

    const handlegender = (e: any) => {
        setData({gender:e.target.value})
    }

    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Edit Teacher</h1>
            <div style={{ marginLeft: "43vh" }}>
            <FormControl className="form" style={{ width: "50%" , marginRight:"150px" , marginTop:"40px" }}>
                    <TextField  className="addinput" type="text" id="name" placeholder="Enter the Name of Teacher" variant="outlined" value={data.name} onChange={(e)=>{setData({name:e.target.value})}} />
                    <TextField  className="addinput" type="text" id="id" placeholder="Enter the Id of Teacher" variant="outlined" value={data.id} onChange={(e)=>{setData({id:e.target.value})}} />
                    <TextField  className="addinput" type="text" id="subject" placeholder="Enter the Subject" variant="outlined" value={data.subject} onChange={(e)=>{setData({subject:e.target.value})}} />
                    <TextField  className="addinput" type="date" id="dob" variant="outlined" value={data.dob} onChange={(e) => setData({dob:e.target.value})} />

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            defaultValue={data.gender}>

                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handlegender} />
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handlegender} />
                            <FormControlLabel value="other" control={<Radio />} label="Other"onChange={handlegender} />
                        </RadioGroup>
                        <div style={{display:"inline-flex"}}>
                        <Button variant="contained" style={{width:"25vh",marginLeft:"5vh",marginTop:"20px"}} type="submit" onClick={()=>{navigate("/Teacher")}}>Back</Button>
                        <Button variant="contained" style={{width:"25vh",marginLeft:"10px",marginTop:"20px"}} type="submit" onClick={handlesubmit}>Submit</Button>
                        </div>
                </FormControl>
            </div>
        </div>
    )
}

export default Editteacher;