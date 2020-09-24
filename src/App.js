import React, {Component} from 'react';
import './App.css';
import EmployeeTable from './Components/Employee/EmployeeTable';

class App extends Component {

  state = {
    employees: [
      {id: 'E1', name: 'Charlie', job: 'Janitor'},
      {id: 'E2', name: 'Mac', job: 'Bouncer'},
      {id: 'E3', name: 'Dee', job: 'Aspiring Actress'},
      {id: 'E4', name: 'Dennis', job: 'Bartender'},
    ]
  }

  render(){

    let employee = (
      this.state.employees.map(emp => {
        return <EmployeeTable
          name = {emp.name}
          job = {emp.job} 
        />
      })
    );
  
  return (
    <div >
      <h1 className = "App">Hello, World!</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
        {employee}
      </table>
    </div>
  );
  }
}

export default App;