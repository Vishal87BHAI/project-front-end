import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Viewteacher=()=>
{
    let {id}=useParams();

    const [data, setData]:any = useState([]);

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        var result=await fetch("http://localhost:9000/getteacher/"+id);
        result=await result.json();
        setData(result);
    }

    return(
        <div>
             <div style={{ marginTop: "55px" }}>
            <h1>Teacher</h1><br/>
            <ul className="list-group w-50" style={{display:"inline-block" , marginBottom:"40px"  }}>
                
            <h3>Teacher Name</h3><li className="list-group-item active">{data.name}</li><br/>
                
            <h3>Id</h3><li className="list-group-item active">{data.id}</li><br/>
                
            <h3>Subject</h3><li className="list-group-item active">{data.subject}</li><br/>

            <h3>Date of birth</h3><li className="list-group-item active">{data.dob}</li><br/>

            <h3>Age</h3><li className="list-group-item active">{data.age}</li><br/>

            <h3>Gender</h3><li className="list-group-item active">{data.gender}</li><br/>
            </ul>
        </div>
        </div>
    )
}

export default Viewteacher;