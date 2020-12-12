let employees = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        id: '4521',
        title: 'Team Lead',
        annualSalary: '80000',
        employeeRowID: 'JenBarber4521'
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        id: '8724',
        title: 'Support Team',
        annualSalary: '58000',
        employeeRowID: 'MauriceMoss8724'
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        id: '9623',
        title: 'Quality Assurance',
        annualSalary: '48000',
        employeeRowID: 'RoySmith9623'
    },
    {
        firstName: 'Harry',
        lastName: 'Jenson',
        id: '4973',
        title: 'Team Lead',
        annualSalary: '80000',
        employeeRowID: 'HarryJenson4973'
    }
];

$(readyNow);

function readyNow() {
    documentReady();
}

function documentReady() {
    printAllEmployees(employees);

    $('#add-employee-submit').click(function(e) {
        e.preventDefault(); //found this solution online. the button was reloading the page. This prevents that.
        addNewEmployee();
    });
}

function displayEmployee(emp) {
//creates table data tags with the values of the properties of the employee and appends them to the table row
    $('#employee-table').append(`<tr id="${emp.employeeRowID}"></tr>`)
    $(`#${emp.employeeRowID}`).append(`<td>${emp.firstName}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>${emp.lastName}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>${emp.id}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>${emp.title}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>$${emp.annualSalary}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td><button class="emp-delete-button" id="d${emp.index}">Delete</button></td>`); 
    //id of each delete button contains the index number of it's corrosponding employee in the array
}

function printAllEmployees(array) {
    $('#employee-table').empty();

    let yearlySpent = 0;
    let monthlySpent = 0;

    for (let i = 0; i < array.length; i++) {

        array[i].index = i; //gives each employee object a property equal to it's own array index

        displayEmployee(array[i]);

        yearlySpent += Number(array[i].annualSalary);
    }
    monthlySpent = yearlySpent / 12;

    $('#spent-monthly').text('');
    $('#spent-monthly').text(Math.round(monthlySpent)); //stretch: round to nearest cent instead

    if(monthlySpent > 20000) {
        $('#monthly-expense-text').addClass('expensive');
    }

    $('.emp-delete-button').click(function() {
        deleteEmployee(this.id.substring(1)); //substring removes letter at beginning that is required for html id attribute
    });
}

function addNewEmployee() {
    console.log('adding new employee')
    let newEmp = {
        firstName: $('#first-name-in').val(),
        lastName: $('#last-name-in').val(),
        id: $('#id-in').val(),
        title: $('#title-in').val(),
        annualSalary: $('#salary-in').val(),
        employeeRowID: $('#first-name-in').val() + $('#last-name-in').val() + $('#id-in').val() //generates ID for employee's table row
    }

    employees.push(newEmp);

    $('#first-name-in').val('');
    $('#last-name-in').val('');
    $('#id-in').val('');
    $('#title-in').val('');
    $('#salary-in').val('');

    printAllEmployees(employees);
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    printAllEmployees(employees);
}
