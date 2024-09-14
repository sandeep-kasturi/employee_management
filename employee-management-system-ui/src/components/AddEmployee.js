import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {

    const [employee, setEmployee] = useState({
        id: "",
        
        lastName: "",
        emailId: "",
        firstName: "",
    });

    const navigate = useNavigate();

    const handleOnChange = (event) => {
        //event.target.value takes the value from updated data in i/p tag
        const value = event.target.value;
        //...emplyee is a spread syntax
        //here the spread syntax will creates new obj n copies the prev data to that new obj
        setEmployee({...employee, [event.target.name]: value});
    }

    const saveEmployee = (event) => {
        //this will prevents the reloading of the page
        event.preventDefault();
        EmployeeService.saveEmployee(employee).then((Response)=>{
          console.log(Response);
          navigate("/");
        }).catch((error) => {
    
          // Check for 400
          if (error.response && error.response.status === 400) {
          
            const fieldErrors = {};

            error.response.data.forEach(err => {
            fieldErrors[err.field] = err.defaultMessage;
            });
    
            setErrors(fieldErrors);
            }});
        
    }

    const clearEmployee = (event) => {
        event.preventDefault();
        setEmployee(
            {
                id: "",
                firstName: "",
                lastName: "",
                emailId: ""
            }
        );
    }
    const [errors, setErrors] = useState([]);
    
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleOnChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
            {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleOnChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
            {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleOnChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
            {errors.emailId && <p>{errors.emailId}</p>}
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={clearEmployee}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee
