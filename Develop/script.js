// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// COLLECT EMPLOYEE DATA
const collectEmployees = function() {
  // CREATING VARIABLE
  const employees = [];

  let proceed = true;

  // CREATING LOOP
  while (proceed) {
    // INPUT EMPLOYEE
    const firstName = prompt("First name:");
    const lastName = prompt("Last name:");
    let salary = prompt("Year Salary:");

    // FUNCTION TO NUMBER 0 IF THE SALARY INPUT ISN'T A NUMBER
    if (isNaN(salary)) {
      salary = 0;
    }

      // EMPLOYEE OBJECT
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    };

    employees.push(employee);

     // LOOP QUESTION 
     proceed = confirm("Would you like to include another employee?");
  }


  // RETURN THE DATA
  return employees;
}



// DISPLAY THE AVERAGE SALARY
const displayAverageSalary = function(employeesArray) {
  let allSalaries = 0;
  const allEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    allSalaries += employee.salary;
  }

  // AVERAGE SALARY CALCULATOR
  const averageSalary = allSalaries / allEmployees;
  console.log(`The average salary across our ${allEmployees} staff members at Incomunn Coffee Shop is $${averageSalary.toFixed(2)}`)
}

// SELECT A RANDOM EMPLOYEE
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

