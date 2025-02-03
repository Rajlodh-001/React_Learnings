

// conditiona rendering = allow to control what gets rendered
//                     in your application based on certain condition 
//                     (show ,hide, or change components)

import UserGreeting from "./UserGreeting";



function App() {
 return (
  <>
  <UserGreeting isLoggedIn={true} username="Raj Lodh"/>
  </>
 );
}



export default App
