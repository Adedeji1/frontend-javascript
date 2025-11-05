// Define an interface for the student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Adedeji',
  lastName: 'Afolabi',
  age: 25,
  location: 'Ibadan',
};

const student2: Student = {
  firstName: 'Tolulope',
  lastName: 'Adekunte',
  age: 20,
  location: 'Abuja',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// When the window is loaded, create and append the table to the body
window.onload = () => {
  // Create a table element
  const table = document.createElement('table');
  table.style.width = '100%'; // Optional: makes the table use full width
  table.setAttribute('border', '1'); // Optional: adds a border to the table

  // Create the table header
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  headerRow.insertCell().innerText = 'First Name';
  headerRow.insertCell().innerText = 'Location';

  // Create the table body and append rows for each student
  const tableBody = table.createTBody();
  studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    row.insertCell().innerText = student.firstName;
    row.insertCell().innerText = student.location;
  });

  // Append the table to the document body
  document.body.appendChild(table);
};
