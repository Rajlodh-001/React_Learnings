

import React,{useState} from "react";




function MyComponent (){

const [name ,setName] = useState("Guest");

const [age ,setAge] =useState(0);
const [ isEmployed ,setEmployed] = useState(false);




const updateName=()=>{
    setName ("Raj Lodh");
    console.log(name);
}

const updateAge=()=>{
    setAge(age +1);
 
}

const toggleIsEmployed =()=>{
    setEmployed(!isEmployed)
}

return(
    <>
    <div>
        <p>Name : {name}</p>
        <button onClick={updateName}>set Name </button>

        <p>Age : {age}</p>
        <button onClick={updateAge}>set Age </button>

        <p>isEmployed : {isEmployed ?"yes":"no" }</p>
        <button onClick={toggleIsEmployed}>Toggle Status </button>

    </div>
    </>
);

}

export default MyComponent

