package com.dailycodebuffer.employee.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dailycodebuffer.employee.entity.EmployeeEntity;
import com.dailycodebuffer.employee.model.Employee;
import com.dailycodebuffer.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee createEmployee(Employee employee) {

        EmployeeEntity employeeEntity = new EmployeeEntity();

        //non entity class can't be save to db through save() method
        //so we copied employee properties to employeeEntity
        BeanUtils.copyProperties(employee, employeeEntity);
        //saving employeeEntity to DB using save()
        employeeRepository.save(employeeEntity);
        //returning employee cause return type is Employee
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntity =  employeeRepository.findAll();
        List<Employee> employee =  employeeEntity.stream().map(emp -> new Employee(emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getEmailId())).collect(Collectors.toList());
        return employee;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
        // employeeRepository.deleteById(id);           we can also delete the record like this 
        // return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());

        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> findByName(String name) {
        List<EmployeeEntity> employeeEntity = employeeRepository.findByName(name);
        List<Employee> employee =  employeeEntity.stream().map(emp -> new Employee(emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getEmailId())).collect(Collectors.toList());
        return employee;
        

    }
    
}