
// props = read-only properties that are shared between components
//         A parent components can send data to a child component
//         <Component  key = value />


// defaultProps = default props in case they are not 
//                passed from the parent component
//                name: "Guest"







import Student from './Student.jsx';

function App() {

  return (
    <>
      <Student name="Raj Lodh" age={22} isStudent={true} />
      <Student name="Aditya Singh" age={21} isStudent={false} />
      <Student name="vinay sharma" age={20} isStudent={false} />
      <Student name="yash " age={23} isStudent={true} />
      <Student name="vicky " age={21} isStudent={true} />
      <Student />
    </>
  );

}

export default App
