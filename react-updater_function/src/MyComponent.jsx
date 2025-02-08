

import React, { useState } from "react"

// updater function = A function passed as an argumentto setState()
//                    usually ex. set (Year + 1)
//                    allow for safe updates based on previous state
//                    Used with multiple state updates & 
//                    asynchronous function. 
//                    Good Practice to use updater functions
// 

function MyComponent() {

    const [count, setCount] = useState(0);

    // function increment() {

    //     // Uses the CURRENT state to calculate the NEXT State 
    //     // set function do not trigger an update.
    //     // React batches together state updates for performance reasons
    //     // Next state become CURRENT state after an update.

    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     //UPDATE
    // }

    function increment(){

        // Takes the PENDING state to calculate Next state
        // React puts your updater function in queue (wating in line)
        // During the next render, it will call then in same order.
        // ( prevCount => prevCount + 1 )
        // ( c => c + 1 ) 

        setCount( prevCount => prevCount +1);
        setCount( prevCount => prevCount +1);
        setCount( prevCount => prevCount +1);
    }

    function reset() {
        setCount(0);
    }


    function decrement() {
        setCount(prevCount => prevCount -1);
    }






    return (
        <>
            <div>
                <p> count : {count}</p>
            </div>

            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>

        </>
    )

}

export default MyComponent





