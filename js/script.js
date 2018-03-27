//====SCRIPT
window.onload = init;

// The contact manager as a global variable
let cm = {};

//	-----------------------------------
function init() {
	// create an instance of the contact manager
	cm = new ContactManager();

	cm.addTestData(4);
	// cm.printContactsToConsole();

	// Display contacts in a table
	// Pass the id of the HTML element that will contain the table
	displayFullListOfContacts("contacts", cm);

	addListeners(cm);
}

//	-----------------------------------
function formSubmitted() {
	// Get the values from input fields
	let name = document.querySelector("#name");
	let email = document.querySelector("#email");
	let age = document.querySelector("#age");
	let city = document.querySelector("#city");
	let zip = document.querySelector("#zipCode");
	if(zip.value === "") zip.value = 00000;
	let country = document.querySelector("#country");

	// (name, age, email, city, zip, country)
	let newContact = new Contact(name.value, age.value, email.value,
		city.value, zip.value, country.value);

	cm.add(newContact);

	// Empty the input fields
	name.value = "";
	email.value = "";
	age.value = "";
	city.value = "";
	zip.value = "";
	country.value = "";


	// refresh the html table
	displayFullListOfContacts("contacts", cm);

	// do not let your browser submit the form using HTTP
	return false;
}

//	-----------------------------------
function emptyList() {
	cm.empty();
	displayFullListOfContacts("contacts", cm);
}

//	-----------------------------------
function loadList() {
	cm.load();
	displayFullListOfContacts("contacts", cm);
}


/* 
https://stackoverflow.com/questions/6012823/how-to-make-html-table-cell-editable

Optional project

Improve the CSS of the contact manager table.
Add more complicated features to the contact manager:
Add an extra column with a trash bin icon in it (you can use this one). When you click on this icon, delete the contact. 

Hint: find a way to get the index of the current row in the click event listener, so that you can easily delete the contact from the array. You can add a "HTML data attribute" using trashbin.dataset.contactId = 3; for example, when you create the img element of the trash bin, do something like this:

let trashbin = document.createElement("img"); 
trashbin.src =  "http://i.imgur.com/yHyDPio.png"; 
trashbin.dataset.contactId = 3; // 3 is the current row index and corresponds 
                                // to contact at index = 3 in the array of contacts

It's like adding a data-contactId attribute to the HTML of the img element. Then in the event listener, use evt.target.dataset.contactId to get it back. 

Add a search form for searching a contact by name: rebuild the table to display only contacts that match. More difficult: reduce the table as you type!

Improve the CSS of this ugly-looking table! ;-)

Add a header on the table and try to make the table sortable when you click on the header of one column (e.g., clicking on "email" will sort the table by email).

[ADVANCED] Using the classList JavaScript interface: elem.classList.add("name of a CSS class"), remove, and toggle methods, allow the user to manipulate CSS classes from JavaScript. Try to make the table of contacts editable. Click on a cell and it will become editable (tip: use both a label and an input field). When you click, you hide the label and show the input field, and when you click outside of the input field, you do the reverse. Use the "blur" event to detect when clicks occur outside).


trash icon url: 
http://i.imgur.com/yHyDPio.png
*/