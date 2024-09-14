import React from 'react'
import { useNavigate } from 'react-router-dom';

function Employee({employee, deleteEmployee}) {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };
  return (
    <tr key={employee.id}>
        <td className="text-left font-medium text-xs  uppercase tracking-wider py-3 px-6">{employee.firstName}</td>
        <td className="text-left font-medium text-xs  uppercase tracking-wider py-3 px-6">{employee.lastName}</td>
        <td className="text-left font-medium text-xs  uppercase tracking-wider py-3 px-6">{employee.emailId}</td>
        <td className="text-right font-medium text-xs  uppercase tracking-wider py-3 px-6">
            {/* eslint-disable-next-line */}
            <a className='text-indigo-600 mx-2 hover:text-indigo-800 hover:cursor-pointer' onClick={(e, id) => editEmployee(e, employee.id)}>Edit</a>
            {/* eslint-disable-next-line */}
            <a onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 mx-2 hover:text-indigo-800 hover:cursor-pointer">Delete</a>
        </td>
    </tr>
  )
}

export default Employee
