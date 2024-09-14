import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

function EmployeeList() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);


    //In javascript below fetchData considered as a method
    const fetchData = async () => {

        setLoading(true);
        try{
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        }
        catch(error){
            console.log(error);
        }
        setLoading(false);
    };

    //this hook will be run automatically whenever EmployeeList.js component is rendered
    useEffect(() => {
        // //In javascript below fetchData considered as a method
        // const fetchData = async () => {

        //     setLoading(true);
        //     try{
        //         const response = await EmployeeService.getEmployees();
        //         setEmployees(response.data);
        //     }
        //     catch(error){
        //         console.log(error);
        //     }
        //     setLoading(false);
        // };
        //here we are making method
        fetchData();
    },[])

    const [state, setState] = useState({
        filter: ""
    });

    const handleOnChange = (event) => {
        //event.target.value takes the value from updated data in i/p tag
        const value = event.target.value;
        //...emplyee is a spread syntax
        //here the spread syntax will creates new obj n copies the prev data to that new obj
        setState({...state, [event.target.name]: value});


        // //for fetching records every time
        // everyChange(value);
        
        
        if (value === "") {
            // If the input value is empty, fetch all records
            fetchData();
          }
        
    }

    // const everyChange = async(value) => {
    //     setLoading(true);
    //     try{
    //         const response = await EmployeeService.getEmployeeByName(value);
    //         setEmployees(response.data);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    //     setLoading(false);
    // }
    

    const filter = () => {
        //In javascript below fetchData considered as a method
        const fetchData = async () => {

            setLoading(true);
            try{
                const response = await EmployeeService.getEmployeeByName(state.filter);
                // const response = await EmployeeService.getEmployeeByName(value);
                setEmployees(response.data);
            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        //here we are making method
        fetchData();

    }

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
          if (employees) {
            setEmployees((prevElement) => {
              return prevElement.filter((employee) => employee.id !== id);
            });
          }
        });
      };


      const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          //here we are calling filter method by passing state 
          filter(state.filter);         
        }
      };
      
      
  return (
    <>
        <div className='flex justify-center border-b shadow my-3 mb-3'>
            <button className=' bg-gray-800 text-white font-semibold mb-3 px-2 pb-1 rounded-md hover:bg-gray-500' onClick={()=> navigate("/addEmployee")}>Add Employee</button>
        </div>
        <div className=' mb-3 border-b shadow'>
            <div className=' mb-2  flex space-x-2 align-middle'>
                <div>
                    <label className=' px-6 py-1 font-semibold'> Enter : </label>
                    <input className=' border-2 border-gray-600  rounded-md px-2 py-1' type="text" placeholder='enter something' name = 'filter' onChange={handleOnChange} onKeyDown={handleEnterKeyPress} />
                </div>
                <div>
                    <button className=' bg-gray-800 rounded-sm px-2 py-1 text-white hover:bg-gray-500' onClick={filter}>fetch</button>
                </div>
            </div>
        </div>

        <div className='border-b shadow'>
            <table className=' min-w-full'>
                <thead className=' bg-gray-50'>
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">EmailId</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Action</th>
                    </tr>
                </thead>

                {!loading && (
                    <tbody>
                    {employees.map((employee)=>(
                        
                        < Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}/>
                        ))}
                </tbody>
                )}
            </table>
        </div>
    </>
  )
}

export default EmployeeList


