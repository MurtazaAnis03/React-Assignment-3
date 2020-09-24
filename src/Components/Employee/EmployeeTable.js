import React from 'react';
import './EmployeeTable.css';

const EmployeeTable = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
        </tr>
    );
}

export default EmployeeTable;