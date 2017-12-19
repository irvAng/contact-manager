//====TABLE DISPLAY
function displayFullListOfContacts(idOfContainer, cm) {//(string, ContactManager)
	cm.displayOfContacts = cm.listOfContacts.slice();//copy array
	cm.resetSortByName();
	displayContactsAsATable(idOfContainer, cm);
}

//	-----------------------------------
function displayContactsAsATable(idOfContainer, cm) {//(string, ContactManager)
	// empty the container that contains the results
	let container = document.querySelector("#" + idOfContainer);
	container.innerHTML = "";

	if (cm.displayOfContacts.length === 0) {
		container.innerHTML = "<p>No contacts to display!</p>";
		// stop the execution of this method
		return;
	}

	// counts rows created, assigns dataset.id to trashbin
	cm.dataCounter = 0;

	// creates and populate the table with users
	let table = document.createElement("table");
	createHeaderCellsAndAssignId(table);

	let tBody = table.createTBody();
	createRows(tBody, cm);

	// adds the table to the div
	container.appendChild(table);

	addTableListeners(cm);
}

//	-----------------------------------
// this function aside for ease of reading - it would ideally be "private"
function createRows(tBody, cm) {//(table, ContactManager) / both references

	// iterate on the array of users
	cm.displayOfContacts.forEach(function (c) {
		//c = Contact /(name, age, email, city, zip, country)

		// creates a row
		var row = tBody.insertRow();

		for (let prop in c) {
			row.insertCell().innerHTML = c[prop];
		}

		var trashBin = row.insertCell();
		trashBin.classList.add('trashIcon');

		//assign id - matches index in listOfContacts
		trashBin.dataset.id = cm.dataCounter;
		trashBin.addEventListener('click', deleteContact);

		//The list is 0-indexed. Counter increases after assigning it. 
		//Next contact will have the increased number. 
		cm.dataCounter++;
	});

}

//	-----------------------------------
function createHeaderCellsAndAssignId(table) {

	let tHead = table.createTHead();//create table header
	let head = tHead.insertRow();//insert row
	head.innerHTML = "<th>Name</th><th>Age</th><th>Email</th><th>City</th><th>Zip</th>"
		+ "<th>Country</th><th>Delete</th>";
	//(name, age, email, city, zip, country)
	//assign ids
	head.cells[0].id = 'nameCell';
	head.cells[1].id = 'ageCell';
	head.cells[2].id = 'emailCell';
	head.cells[3].id = 'cityCell';
	head.cells[4].id = 'zipCell';
	head.cells[5].id = 'countryCell';
	head.cells[6].id = 'delCell';
	// console.log(head.cells[0]);
}
