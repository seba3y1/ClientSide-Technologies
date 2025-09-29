// Example employee data
const employees = [
  { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008/11/28" },
  { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, startDate: "2009/10/09" },
  { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009/01/12" }
];

// Get table body
const tableBody = document.querySelector("#emp tbody");

// Insert rows dynamically
employees.forEach(emp => {
  const row = document.createElement("tr");
  
  row.innerHTML = `
    <td>${emp.name}</td>
    <td>${emp.position}</td>
    <td>${emp.office}</td>
    <td>${emp.age}</td>
    <td>${emp.startDate}</td>
  `;

  tableBody.appendChild(row);
});