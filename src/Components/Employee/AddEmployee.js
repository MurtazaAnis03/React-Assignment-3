import React from 'react';
import "./EmployeeList.css";

let name,job;
const AddEmployee = (props) => {
    const addNameHandler = (event) => {
        name = event.target.value;
        console.log(name);
    }
    const addJobHandler = (event) => {
        job = event.target.value;
        console.log(job);
    }

    const addEmployeeHandler = () => {
        console.log(name, job);
        props.add(name, job);
    }

    return (
        <div>
            <h3>Add New Employee</h3>
            <form>
                <div>
                    <label for = "Name">Name</label>
                    <input type = "text" placeholder = "Name" id = "name" onChange = {addNameHandler} />
                </div>
                <div>
                    <label for = "Job">Job</label>
                    <input type = "text" placeholder = "Job" id = "job" onChange = {addJobHandler} />
                </div>
                <button type = "button" onClick = {addEmployeeHandler} > Submit </button>
            </form>
        </div>
    );
}

export default AddEmployee;