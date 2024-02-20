var selectedRow = null; // global variable

function onSubmitForm(e) {
  e.preventDefault(); // Corrected event parameter name and added missing 'e.'
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData); // Added call to updateRecord function.
  }
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["productCode"] = document.getElementById("pcode").value;
  formData["productName"] = document.getElementById("pname").value;
  formData["productQty"] = document.getElementById("pqty").value;
  formData["productPrice"] = document.getElementById("pprice").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storedList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.productName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.productQty;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.productPrice;
  cell5 = newRow.insertCell(4); // Added a new cell for the buttons.
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//editing the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("pcode").value = selectedRow.cells[0].innerHTML; // Corrected cell index.
  document.getElementById("pname").value = selectedRow.cells[1].innerHTML; // Corrected cell index.
  document.getElementById("pqty").value = selectedRow.cells[2].innerHTML; // Corrected cell index.
  document.getElementById("pprice").value = selectedRow.cells[3].innerHTML; // Corrected cell index.
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.productQty;
  selectedRow.cells[3].innerHTML = formData.productPrice;
}

//delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storedList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("pcode").value = "";
  document.getElementById("pname").value = "";
  document.getElementById("pqty").value = "";
  document.getElementById("pprice").value = "";
  selectedRow = null;
}
