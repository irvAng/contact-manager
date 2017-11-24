//====TABLE LISTENERS AND LISTENER FUNCTIONS
//	-----------------------------------
function addTableListeners(cm) {
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
function sortByNameListener(cm) {
	return function test1(e) {
		cm.sortByName();
		displayContactsAsATable("contacts", cm);
	}
}

//	-----------------------------------
function sortByAgeListener(cm){
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
	// console.log(arguments.callee);
}

//	-----------------------------------
function sortByCityListener(cm) {
	return function (e) {
		cm.sortByCity();
		displayContactsAsATable("contacts", cm);
	}
	// console.log(arguments.callee);
}

//	-----------------------------------
function sortByZipListener(cm){
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
function deleteTableListeners(cm) {
	let nameCell = document.querySelector('#nameCell');
	nameCell.removeEventListener('click', sortByName(cm).test1);
}