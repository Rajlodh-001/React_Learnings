
import React, { useState } from "react";

function MyComponent() {


    const [car, setCar] = useState({
        year: "2024",
        make: "TATA",
        model: "Safari"
    });

    function handelYearChange(event){
        setCar(car => ({...car,year: event.target.value}));
    }

    function handelMakeChange(event){
        setCar(car=>({...car,make: event.target.value}));
    }

    function handelModelChange(event){
        setCar(car=>({...car,model: event.target.value}));
    }


    return (
        <>
            <p>your favourite car is {car.year} {car.make} {car.model}</p>
            <input type="number" onChange={handelYearChange} value={car.year} />
            <input type="text" onChange={handelMakeChange} value={car.make} />
            <input type="text" onChange={handelModelChange} value={car.model} />
        </>
    )

}

export default MyComponent

