let employees = [
    // {
    //     firstName: 'Jen',
    //     lastName: 'Barber',
    //     id: '4521',
    //     title: 'Team Lead',
    //     annualSalary: '80000'
    // },
    // {
    //     firstName: 'Maurice',
    //     lastName: 'Moss',
    //     id: '8724',
    //     title: 'Support Team',
    //     annualSalary: '58000'
    // },
    // {
    //     firstName: 'Roy',
    //     lastName: 'Smith',
    //     id: '9623',
    //     title: 'Quality Assurance',
    //     annualSalary: '48000'
    // },
    // {
    //     firstName: 'Harry',
    //     lastName: 'Jenson',
    //     id: '4973',
    //     title: 'Team Lead',
    //     annualSalary: '80000'
    // }
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

    $('#employee-table').append(`<tr id="${emp.employeeRowID}"></tr>`)
    $(`#${emp.employeeRowID}`).append(`<td>${emp.firstName}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>${emp.lastName}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>${emp.id}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>${emp.title}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td>$${emp.annualSalary}</td>`);
    $(`#${emp.employeeRowID}`).append(`<td><button class="emp-delete-button" id="d${emp.index}">Delete</button></td>`);
    // emp.deleteEvent = $(`#delete-${emp.employeeRowID}`).click(function(){
    //     console.log('delete' + this);
    // })

}

function printAllEmployees(array) {
    $('#employee-table').empty();

    let yearlySpent = 0;
    let monthlySpent = 0;

    for (let i = 0; i < array.length; i++) {
        // array[i].deleteEvent = $(`#delete-${array[i].employeeRowID}`).click(function(){
        //     console.log('delete' + this);
        // });
        array[i].index = i; //gives each employee object a property equal to it's array index

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
        console.log('delete', this.id.substring(1));
        deleteEmployee(this.id.substring(1));
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
        employeeRowID: $('#first-name-in').val() + $('#last-name-in').val() + $('#id-in').val() //generates ID to be used as a multi-purpose selector
        // deleteEvent:  $(`#delete-${employeeRowID}`).click(function(){
        //     console.log('delete' + this);
        // })
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
