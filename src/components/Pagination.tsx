import { Button } from "@mui/material";
import { useEffect, useState } from "react";


const Pagination=({showppage,onpagination,total}:any)=>{

    const [counter,setCounter]=useState(1);

    useEffect(()=>{
        const value=showppage*counter;
        onpagination(value-showppage,value)
    },[counter])

    const onbuttonclick=(type:any)=>{
        if(type==="prev")
        {
            if(counter===1)
            {
                setCounter(1)
            }
            else{
                setCounter(counter-1)
            }
        }
        else if(type==="next")
        {
            if(Math.ceil(total/showppage)===counter)
            {
                setCounter(counter)
            }
            else
            {
                setCounter(counter+1)
            }
        }
    }

    return(
        <div>
           <Button variant="contained" onClick={()=>{onbuttonclick("prev")}}>Previous</Button>
           <Button variant="contained" onClick={()=>{onbuttonclick("next")}}>Next</Button>
        </div>
    )
}

export default Pagination;