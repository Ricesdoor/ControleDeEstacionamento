function saveReservation() {
    var plate = document.getElementById('plate').value;
    var owner = document.getElementById('owner').value;
    var apartmentNumber = document.getElementById('apartment-number').value;
    var apartmentBlock = document.getElementById('apartment-block').value;
    var model = document.getElementById('model').value;
    var color = document.getElementById('color').value;
    var parkingNumber = document.getElementById('parking-number').value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));

    td1.innerHTML=plate;
    td2.innerHTML=owner;
    td3.innerHTML=apartmentNumber;
    td4.innerHTML=apartmentBlock;
    td5.innerHTML=model;
    td6.innerHTML=color;
    td7.innerHTML=parkingNumber;
    td8.innerHTML='<input type="button" name="delete" value="Excluir" onclick="deleteRow(this);" class="btn btn-danger">'

    document.getElementById("table").appendChild(tr);

    td8.addEventListener("click", function(){})

    alert("O cadastro foi realizado!")
}

function deleteRow(del) {
    var d=del.parentNode.parentNode;
    d.parentNode.removeChild(d)
    alert("O cadastro foi excluido!")
}

function addDeleteButtonToExistingRows() {
    var tableRows = document.getElementById("table").getElementsByTagName('tr');

    for (var i = 1; i < tableRows.length; i++) {
        var currentRow = tableRows[i];
        var deleteButtonCell = currentRow.insertCell(-1);
        deleteButtonCell.innerHTML = '<input type="button" name="delete" value="Excluir" onclick="deleteRow(this);" class="btn btn-danger">';
    }
}

window.onload = function() {
    addDeleteButtonToExistingRows();
};

document.getElementById('showFormButton').addEventListener('click', function() {
    var form = document.getElementById('reservationForm');
    var table = document.getElementById('table');

    form.classList.remove('hidden');
    table.classList.add('hidden');
});

document.getElementById('showListButton').addEventListener('click', function() {
    var form = document.getElementById('reservationForm');
    var table = document.getElementById('table');

    form.classList.add('hidden');
    table.classList.remove('hidden');
});