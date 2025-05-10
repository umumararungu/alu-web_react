export interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student ={
    firstName: 'Ingabire',
    lastName: 'Sonia',
    age:16,
    location: 'Kigali',

};


const student2: Student ={
    firstName: 'Mwiza',
    lastName: 'Kelia',
    age:27,
    location: 'Huye',

};

const studentList: Student[] = [student1, student2];


document.addEventListener('DOMContentLoaded',() => {
    const table  =  document.createElement('table');
    const tableBody  =  document.createElement('tbody');


    const Row = document.createElement('tr');
    const firstName = document.createElement('th');
    const location = document.createElement('th');

    firstName.textContent = 'First Name';
    location.textContent = 'Location';

    Row.appendChild(firstName);
    Row.appendChild(location);
    tableBody.appendChild(Row);

    studentList.forEach(student =>{
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);


    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
});
