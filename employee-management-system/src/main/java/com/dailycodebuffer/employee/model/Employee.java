package com.dailycodebuffer.employee.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private long id;
    @NotBlank(message = "Please Enter firstName")
	private String firstName;
    @NotBlank(message = "Please Enter lastName")
    private String lastName;
    @Email
    @NotBlank(message = "Please Enter email")
    private String emailId;
}