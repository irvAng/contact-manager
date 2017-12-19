//	-----------------------------------
//====CONTACT CLASS
class Contact {
	constructor(name, age, email, city, zip, country) {
		this.name = name;
		this.age = parseInt(age);
		this.email = email;
		this.city = city;
		this.zip = parseInt(zip);
		this.country = country;
	}
}

//	-----------------------------------
//====CONTACT MANAGER CLASS
class ContactManager {
	constructor() {
		// when we build the contact manager, it
		// has an empty list of contacts
		this.listOfContacts = [];
		this.displayOfContacts = [];
		this.dataCounter = 0;
	}

	addTestData(numberOfContacts) {
		for (let i = 0; i < numberOfContacts; i++) {
			let newC = ContactManager.createRandomContact();
			this.add(newC);
		}
		this.resetSortByName();
	}

	//Sets previous caller's name to '' so sortByName() will sort ascending
	resetSortByName() {
		this.displayOfContacts = this.listOfContacts.slice();
		ContactManager.prevCaller_sName = '';
		// Let's sort the list of contacts by Name
		this.sortByName();
	}

	// Will erase all contacts
	empty() {
		this.listOfContacts = [];
	}

	add(contact) {
		this.listOfContacts.push(contact);
		this.displayOfContacts = this.listOfContacts.slice();//make a copy
	}

	remove(contact) {
		for (let i = 0; i < this.listOfContacts.length; i++) {
			var c = this.listOfContacts[i];

			if (c.email === contact.email) {
				// remove the contact at index i
				this.listOfContacts.splice(i, i);
				// stop/exit the loop
				break;
			}
		}
	}

	printContactsToConsole() {
		this.listOfContacts.forEach(function (c) {
			console.log(c.name);
		});
	}

	load() {
		if (localStorage.contacts !== undefined) {
			// the array of contacts is savec in JSON, let's convert
			// it back to a reak JavaScript object.
			this.listOfContacts = JSON.parse(localStorage.contacts);
		}
	}

	save() {
		// We can only save strings in local Storage. So, let's convert
		// ou array of contacts to JSON
		localStorage.contacts = JSON.stringify(this.listOfContacts);
	}

	//====CONTACT MANAGER SORTING FUNCTIONS
	sortByName() {
		// As our array contains objects, we need to pass as argument
		// a method that can compare two contacts.
		// we use for that a class method, similar to the distance(p1, p2)
		// method we saw in the ES6 Point class in module 4
		// We always call such methods using the name of the class followed
		// by the dot operator
		ContactManager.toggleSortOrderAndCompareInvoker(this.sortByName.name);
		this.displayOfContacts.sort(ContactManager.sortStringByProp('name'));
		ContactManager.prevCaller_sName = this.sortByName.name;
	}

	sortByEmail() {
		ContactManager.toggleSortOrderAndCompareInvoker(this.sortByEmail.name);
		this.displayOfContacts.sort(ContactManager.sortStringByProp('email'));
		ContactManager.prevCaller_sName = this.sortByEmail.name;
	}

	sortByCity() {
		ContactManager.toggleSortOrderAndCompareInvoker(this.sortByCity.name);
		this.displayOfContacts.sort(ContactManager.sortStringByProp('city'));
		ContactManager.prevCaller_sName = this.sortByCity.name;
	}

	sortByCountry() {
		ContactManager.toggleSortOrderAndCompareInvoker(this.sortByCountry.name);
		this.displayOfContacts.sort(ContactManager.sortStringByProp('country'));
		ContactManager.prevCaller_sName = this.sortByCountry.name;
	}

	sortByAge() {
		ContactManager.toggleSortOrderAndCompareInvoker(this.sortByAge.name);
		this.displayOfContacts.sort(ContactManager.sortNumberByProp('age'));
		ContactManager.prevCaller_sName = this.sortByAge.name;
	}

	sortByZip() {
		ContactManager.toggleSortOrderAndCompareInvoker(this.sortByZip.name);
		this.displayOfContacts.sort(ContactManager.sortNumberByProp('zip'));
		ContactManager.prevCaller_sName = this.sortByZip.name;
	}

	//====CONTACT MANAGER STATIC PROPERTIES
	static sortStringByProp(propertyNameAsString) {//(string)
		return (c1, c2) => {
			c1 = c1[propertyNameAsString].toLowerCase();
			c2 = c2[propertyNameAsString].toLowerCase();

			if (c1 < c2)
				return -1 * ContactManager.sortOrder;
			if (c1 > c2)
				return 1 * ContactManager.sortOrder;
			return 0;
		}
	}

	static sortNumberByProp(propertyNameAsString) {//(string)
		return (c1, c2) => {
			c1 = c1[propertyNameAsString];
			c2 = c2[propertyNameAsString];
			return (c1 - c2) * ContactManager.sortOrder;
		}
	}

	static toggleSortOrderAndCompareInvoker(whoIsCalling) {//(string), name of function
		//Changing this variable to the opposite value changes 
		//the sorting order of compare functions
		ContactManager.sortOrder = -ContactManager.sortOrder;

		/**Compare the names of the last called function with the function
		 * calling at the moment, if they do not match, set sortOrder 
		 * to 1, and assign new name to prevCaller'sName 
		 * This part of the function ensures that the sort order always 
		 * start in ascending order */
		if (ContactManager.prevCaller_sName !== whoIsCalling) {
			ContactManager.sortOrder = 1;
		}
	}

	static createRandomContact() {
		let n = getRandomFromArray(rCD.firstNames);//first
		let last = getRandomFromArray(rCD.lastNames);//last
		let e = last + "@" + n + '.com';//email: last@first.com

		e = e.toLocaleLowerCase();
		n = n + " " + last;//first + last

		let a = Math.round(Math.random() * 100);//age
		let ct = getRandomFromArray(rCD.cities);//city
		let z = getRandomFromArray(rCD.zips);//zip
		let ctry = getRandomFromArray(rCD.countries);//country

		//new Contact(name, age, email, city, zip, country)
		return new Contact(n, a, e, ct, z, ctry);
	}
}

//	-----------------------------------
ContactManager.sortOrder = -1;
ContactManager.prevCaller_sName = '';//prevCaller'sName / name of last function to call
/*

A static function that checks if the callee is the same as before, if it is, it does nothing; if it is not, if it is a different callee, resets the ContactManager.sortOrder to 1

https://www.w3schools.com/howto/howto_js_sort_table.asp

sortByProperty(prop) {
	ContactManager.toggleSortOrder();
	this.listOfContacts.sort(this.compareByProp(prop));
}

compareByProp(prop) {
	return function (a, b) {
		a = c1[prop].toLowerCase();
		b = c1[prop].toLowerCase();

		if (a < b)
			return -1 * ContactManager.sortOrder;
		if (a > b)
			return 1 * ContactManager.sortOrder;
		return 0;
	}
}
*/
