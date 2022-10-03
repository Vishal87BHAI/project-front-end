import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";


const Editstudent=()=>{
    const handlesubmit=(e:any)=>
    {
        e.prevengDefault();
        alert("submit");
    }

    return(
        <div style={{marginTop:"70px"}}>
            <h1>Edit Student</h1>
            <div style={{ marginLeft: "43vh" }}>
                <FormControl className="form" onSubmit={handlesubmit} style={{ width: "50%" , marginRight:"150px" , marginTop:"40px" }}>
                    <TextField  className="addinput" id="name" label="Student Name" placeholder="Enter the Name of Student" variant="outlined" />
                    <TextField  className="addinput" id="class" label="Teacher Class" placeholder="Enter the Class of Student" variant="outlined" />
                    <TextField  className="addinput" id="roll" label="Roll Number" placeholder="Enter the Roll Number of Student" variant="outlined" />
                    <TextField  className="addinput" id="dob" label="Date of birth" placeholder="Enter the Date of birth" variant="outlined" />

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group">

                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    <Button variant="contained" style={{width:"30vh",marginLeft:"10vh",marginTop:"20px"}} type="submit">Submit</Button>
                </FormControl>
            </div >                          
        </div>
    )
}

export default Editstudent;