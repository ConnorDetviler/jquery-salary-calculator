let employees = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        id: '4521',
        title: 'Team Lead',
        annualSalary: '80000'
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        id: '8724',
        title: 'Support Team',
        annualSalary: '58000'
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        id: '9623',
        title: 'Quality Assurance',
        annualSalary: '48000'
    },
    {
        firstName: 'Harry',
        lastName: 'Jenson',
        id: '4973',
        title: 'Team Lead',
        annualSalary: '80000'
    }
];

// let yearlySpent = 0;
// let monthlySpent = 0;

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
    employeeRowID = emp.firstName + emp.lastName + emp.id.toString();

    $('#employee-table').append(`<tr id="${employeeRowID}"></tr>`)
    $(`#${employeeRowID}`).append(`<td>${emp.firstName}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.lastName}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.id}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.title}</td>`);
    $(`#${employeeRowID}`).append(`<td>$${emp.annualSalary}</td>`);
    $(`#${employeeRowID}`).append(`<td><button id="delete-${employeeRowID}">Delete</button></td>`);
}

function printAllEmployees(array) {
    $('#employee-table').empty();

    let yearlySpent = 0;
    let monthlySpent = 0;

    for (let i = 0; i < array.length; i++) {
        displayEmployee(array[i]);

        yearlySpent += Number(array[i].annualSalary);
    }
    monthlySpent = yearlySpent / 12;

    $('#spent-monthly').text('');
    $('#spent-monthly').text(Math.round(monthlySpent)); //stretch: round to nearest cent instead

    if(monthlySpent > 20000) {
        $('#monthly-expense-text').addClass('expensive');
    }
}

function addNewEmployee() {
    console.log('adding new employee')
    let newEmp = {
        firstName: $('#first-name-in').val(),
        lastName: $('#last-name-in').val(),
        id: $('#id-in').val(),
        title: $('#title-in').val(),
        annualSalary: $('#salary-in').val()
    }

    employees.push(newEmp);

    $('#first-name-in').val('');
    $('#last-name-in').val('');
    $('#id-in').val('');
    $('#title-in').val('');
    $('#salary-in').val('');

    printAllEmployees(employees);
}
