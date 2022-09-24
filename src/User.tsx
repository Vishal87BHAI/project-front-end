import React from "react";
interface Iprops{
    name?:string;
    age?:number;
}

const User:React.FC <Iprops> =({name,age})=>{
    return(
        <div>
            <h1>hello {name}</h1>
            <h1>your age is {age}</h1>
        </div>
    )
}

export default User;