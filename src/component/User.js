import { useEffect, useState } from "react";
const User = ({name})=>{
    const[count] = useState(0);
    const[count1] = useState(1);

    useEffect(()=>{
       const time =  setInterval(() =>{
            console.log("Interval");
        },1000);
        console.log("useeffect");

        return()=>{
            clearInterval(time);
            console.log("useeffect return");
        };
    },[]);
    console.log("render");
    return(
    <div className = " card ">
    <h1>Count : {count}</h1>
    <h1>count : {count1}</h1>
    <h2>Name : {name}</h2>
    <h2>Age : 21</h2>
    <h3>Location : Bangalore</h3>
    </div>
    );
};
export default User;