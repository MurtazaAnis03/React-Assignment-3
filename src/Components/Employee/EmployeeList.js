import React, {Component} from 'react';
import ShowEmployee from './ShowEmployee';
import AddEmployee from './AddEmployee';

class EmpolyeeList extends Component{

    state = {
        employees: [
            {key: 'E1', name: 'Mike', job: 'Lawyer'},
            {key: 'E2', name: 'Rachel', job: 'Designer'},
            {key: 'E3', name: 'Harvey', job: 'Player'},
        ]
    }

    addEmpHandler = (newName, newJob) => {
        console.log(newName, newJob);
        const newEmployees = [...this.state.employees];
        newEmployees.push({name: newName, job: newJob});
        this.setState({employees: newEmployees});
    }

    deleteEmpHandler = (empIndex) => {
        const employees = this.state.employees.slice();
        employees.splice(empIndex, 1);
        this.setState({employees: employees});
    }

    render(){

        let EmployeeData = (
            this.state.employees.map((employee, index) => {
                return <ShowEmployee name = {employee.name} job = {employee.job} clicked = {() => {this.deleteEmpHandler(index)}} />
            })
        );

        return (
            <div>
                <table>
                    <tr>
                        <th>NAME</th>
                        <th>JOB</th>
                        <th>REMOVE</th>
                    </tr>
                    {EmployeeData}
                </table>
                <AddEmployee add = {this.addEmpHandler} />
            </div>
        );
    }
}

export default EmpolyeeList;