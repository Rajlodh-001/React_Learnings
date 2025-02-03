

// propsTypes = a machanism that ensure that the passed value  
//              is ot=f the correct datatype.
//              age : propTypes.number

import propTypes from 'prop-types'

function Student(props) {

    return (

        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "NO"} </p>
        </div>


    );
}

// if passed wrong props, issue a worning on console .
// doesn't stop the app.
// Good to inclue propTypes. 

Student.propTypes={
name : propTypes.string,
age : propTypes.number,
isStudent : propTypes.bool,
}

// defult props in case props are not passed
Student.defaultProps={
    name :"Guest",
    age: 0,
    isStudent : false,
}




export default Student