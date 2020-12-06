function insert() {
    var firstName = document.getElementById("firstNameInput").value;
    var lastNameInput = document.getElementById("lastNameInput").value;
    var indexNoInput = document.getElementById("indexNoInput").value;

    var tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();

    // First name insert
    var firstNameCell = newRow.insertCell();
    var firstNameText = document.createTextNode(firstName);
    firstNameCell.appendChild(firstNameText)

    // Last name insert
    var lastNameCell = newRow.insertCell();
    var lastNameText = document.createTextNode(lastNameInput);
    lastNameCell.appendChild(lastNameText)

    // Index No insert
    var indeNoCell = newRow.insertCell();
    var indexNoText = document.createTextNode(indexNoInput);
    indeNoCell.appendChild(indexNoText)

}