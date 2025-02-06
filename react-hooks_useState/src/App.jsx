

import MyComponent from "./MyComponent"
import Counter from "./Counter"


// React hook = Special function that allows functional components
//              to use React feactures without writing class
//              components(React v16.8)
//              ( useState,useEffect, useContext, useReducer, 
//                useCallback and more ... )  

// useState = A React hook that allow the creation of a statefull 
//            variable AND a setter Function to update its value
//            in the virtual DOM .
//            [ name, setName ]





function App() {


  return (
    <>
      {/* <MyComponent/> */}

      <Counter/>
    </>
  )
}

export default App
