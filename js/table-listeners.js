//====TABLE LISTENERS AND TABLE LISTENERS' FUNCTIONS
//	-----------------------------------
function addTableListeners(cm) {
	// let nameCell = document.querySelector('#nameCell');
	// nameCell.addEventListener('click', sortByNameListener(cm));

	let nameCell = document.querySelector('#nameCell');
	nameCell.addEventListener('click', sortByNameListener(cm));

	let ageCell = document.querySelector('#ageCell');
	ageCell.addEventListener('click', sortByAgeListener(cm));

	let emailCell = document.querySelector('#emailCell');
	emailCell.addEventListener('click', sortByEmailListener(cm));

	let cityCell = document.querySelector('#cityCell');
	cityCell.addEventListener('click', sortByCityListener(cm));

	let zipCell = document.querySelector('#zipCell');
	zipCell.addEventListener('click', sortByZipListener(cm));

	let countryCell = document.querySelector('#countryCell');
	countryCell.addEventListener('click', sortByCountryListener(cm));
}

//	-----------------------------------
function sortByNameListener(cm, propertyNameAsString) {
	return function test1(e) {
		cm.sortByName();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function sortByAgeListener(cm) {
	return function (e) {
		cm.sortByAge();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function sortByEmailListener(cm) {
	return function test1(e) {
		cm.sortByEmail();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function sortByCityListener(cm) {
	return function (e) {
		cm.sortByCity();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function sortByZipListener(cm) {
	return function (e) {
		cm.sortByZip();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function sortByCountryListener(cm) {
	return function (e) {
		cm.sortByCountry();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function deleteContact(evt) {

	let confirmation = confirm('Are you sure you want to delete this contact?');

	if (confirmation) {
		let id = parseInt(evt.target.dataset.id);

		//using display of contacts, because it is the one tthat matches the 
		// assigned dataset.id in createRows
		cm.displayOfContacts.splice(id, 1);
		cm.listOfContacts = cm.displayOfContacts.slice();
		cm.save();
		loadList();
	}
}

//	-----------------------------------
//unused at the moment
function deleteTableListeners(cm) {
	let nameCell = document.querySelector('#nameCell');
	nameCell.removeEventListener('click', sortByName(cm).test1);
}