employees = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        id: 4521,
        title: 'Team Lead',
        annualSalary: 80000
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        id: 8724,
        title: 'Support Team',
        annualSalary: 58000
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        id: 9623,
        title: 'Quality Assurance',
        annualSalary: 48000
    }
];

$(readyNow);

function readyNow() {
    documentReady();
}

function documentReady() {
    displayEmployee(employees[2]);
}

function displayEmployee(emp) {
    employeeRowID = emp.firstName + emp.lastName + emp.id.toString();

    $('#employee-table').append(`<tr id="${employeeRowID}"></tr>`)
    $(`#${employeeRowID}`).append(`<td>${emp.firstName}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.lastName}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.id}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.title}</td>`);
    $(`#${employeeRowID}`).append(`<td>${emp.annualSalary}</td>`);
    $(`#${employeeRowID}`).append(`<td><button id="delete-${employeeRowID}">Delete</button></td>`);
}