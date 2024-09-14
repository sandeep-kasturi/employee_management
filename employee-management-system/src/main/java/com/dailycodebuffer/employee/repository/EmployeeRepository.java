package com.dailycodebuffer.employee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dailycodebuffer.employee.entity.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long>{


    @Query(
        // value = "select * from employees where first_name = ?1 or last_name = ?1 or email_id = ?1",
        value = "select * from employees where first_name like %?1% or last_name like %?1% or email_id like %?1%",
        nativeQuery = true
    )
    
    // @Query("select s from EmployeeEntity s where s.firstName = ?1")
    List<EmployeeEntity> findByName(String name);
}