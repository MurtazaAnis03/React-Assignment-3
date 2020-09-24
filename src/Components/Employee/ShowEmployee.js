import React from 'react';
import "./EmployeeList.css";

const ShowEmployee = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
            <td onClick = {props.clicked}>
                <button type = "button">Delete</button>
            </td>
        </tr>
    );
}

export default ShowEmployee;