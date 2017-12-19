//====LISTENERS
function addListeners(cm) {
	//passing cm as reference instead of accessing as global variable
	let searchInput = document.querySelector('#searchInput');
	//search-compare.js
	searchInput.addEventListener('input', compareValues(cm));

	let printListB = document.querySelector('#printList');
	printListB.addEventListener('click', printList);

	let addRandomContact = document.querySelector('#addRandomContact');
	addRandomContact.addEventListener('click', addTestDataL(cm));

	/*** TABLE LISTENERS ADDED IN table-listeners.js ***/
}

//	-----------------------------------
function addTestDataL(cm) {
	return function () {
		cm.addTestData(2);
		displayFullListOfContacts("contacts", cm);
	}
}

//	-----------------------------------
function printList() {
	console.log('Print contacts to console: ', '\n', cm.listOfContacts);
}
