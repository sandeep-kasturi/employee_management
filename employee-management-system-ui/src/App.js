import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    // <>
    // <AddEmployee/>
    // </>
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route exact path="/" element={<EmployeeList />} />
          <Route exact path="/employeeList" element={<EmployeeList />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
