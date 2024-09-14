package com.dailycodebuffer.employee.service;

import java.util.List;

import com.dailycodebuffer.employee.model.Employee;

public interface EmployeeService {

    Employee createEmployee(Employee employee);
    List<Employee> getAllEmployees();
    boolean deleteEmployee(Long id);
    Employee getEmployeeById(Long id);
    Employee updateEmployee(Long id, Employee employee);
    List<Employee> findByName(String name);
}