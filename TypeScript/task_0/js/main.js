var student1 = {
    firstName: 'Ingabire',
    lastName: 'Sonia',
    age: 16,
    location: 'Kigali',
};
var student2 = {
    firstName: 'Mwiza',
    lastName: 'Kelia',
    age: 27,
    location: 'Huye',
};
var studentList = [student1, student2];
document.addEventListener('DOMContentLoaded', function () {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    var Row = document.createElement('tr');
    var firstName = document.createElement('th');
    var location = document.createElement('th');
    firstName.textContent = 'First Name';
    location.textContent = 'Location';
    Row.appendChild(firstName);
    Row.appendChild(location);
    tableBody.appendChild(Row);
    studentList.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
});
