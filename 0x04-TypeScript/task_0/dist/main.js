var student1 = {
    firstName: 'Adedeji',
    lastName: 'Afolabi',
    age: 25,
    location: 'Ibadan',
};
var student2 = {
    firstName: 'Tolulope',
    lastName: 'Adekunte',
    age: 20,
    location: 'Abuja',
};
var studentsList = [student1, student2];
window.onload = function () {
    var table = document.createElement('table');
    var tableHeader = table.createTHead();
    var headerRow = tableHeader.insertRow();
    headerRow.insertCell().innerText = 'First Name';
    headerRow.insertCell().innerText = 'Location';
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        row.insertCell().innerText = student.firstName;
        row.insertCell().innerText = student.location;
    });
    document.body.appendChild(table);
};
//# sourceMappingURL=main.js.map