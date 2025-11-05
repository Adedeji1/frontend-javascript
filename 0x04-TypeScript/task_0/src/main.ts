interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Adedeji',
    lastName: 'Afolabi',
    age: 25,
    location: 'Ibadan',
}

const student2: Student = {
    firstName: 'Tolulope',
    lastName: 'Adekunte',
    age: 20,
    location: 'Abuja',
}
const studentsList: Student[] = [student1, student2];

window.onload = () => {
  const table = document.createElement('table');
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  headerRow.insertCell().innerText = 'First Name';
  headerRow.insertCell().innerText = 'Location';

  studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell().innerText = student.firstName;
    row.insertCell().innerText = student.location;
  });

  document.body.appendChild(table);
};