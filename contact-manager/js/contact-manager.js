//	-----------------------------------
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
class ContactManager {
	constructor() {
		// when we build the contact manager, it
		// has an empty list of contacts
		this.listOfContacts = [];
		this.displayOfContacts = [];
		this.dataCounter = 0;
	}

	addTestData(numberOfContacts) {
		// var c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
		// var c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
		// var c3 = new Contact("Angus Young", "angus@acdc.com");
		// var c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

		// this.add(c1);
		// this.add(c2);
		// this.add(c3);
		// this.add(c4);

		for (let i = 0; i < numberOfContacts; i++) {
			let newC = ContactManager.createRandomContact();
			this.add(newC);

		}
		// Let's sort the list of contacts by Name
		this.sortByName();
	}

	// Will erase all contacts
	empty() {
		this.listOfContacts = [];
	}

	add(contact) {
		this.listOfContacts.push(contact);
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

	static createRandomContact() {
		let n = getRandomFromArray(firstNames);//first
		let last = getRandomFromArray(lastNames);//last
		let e = last + "@" + n + '.com';//last@first.com
		
		e = e.toLocaleLowerCase();
		n = n + " " + last;//first + last
		
		let a = Math.round(Math.random() * 100);
		let ct = getRandomFromArray(cities);
		let z = getRandomFromArray(zips);
		let ctry = getRandomFromArray(countries);

		//(name, age, email, city, zip, country)
		let newC = new Contact(n, a, e, ct, z, ctry);
		return newC;
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

	//====SORTING FUNCTIONS
	static toggleSortOrder() {
		//Changing this variable to the opposite value changes 
		//the sorting order of compare functions
		ContactManager.sortOrder = -ContactManager.sortOrder;
	}

	sortByName() {
		// As our array contains objects, we need to pass as argument
		// a method that can compare two contacts.
		// we use for that a class method, similar to the distance(p1, p2)
		// method we saw in the ES6 Point class in module 4
		// We always call such methods using the name of the class followed
		// by the dot operator
		ContactManager.toggleSortOrder();
		this.displayOfContacts.sort(ContactManager.compareByName);
	}

	// class method for comparing two contacts by name
	static compareByName(c1, c2) {
		//compare lower case values. 
		//Upper case letter has different value than lowercase letter
		// 'd' > "D"
		// true
		// "D" > 'd'
		// false
		c1 = c1.name.toLowerCase();
		c2 = c2.name.toLowerCase();
		// JavaScript has builtin capabilities for comparing strings
		// in alphabetical order
		if (c1 < c2) return -1 * ContactManager.sortOrder;
		if (c1 > c2) return 1 * ContactManager.sortOrder;
		return 0;
	}

	sortByAge() {
		ContactManager.toggleSortOrder();
		this.displayOfContacts.sort(ContactManager.compareAge);
	}

	static compareAge(c1, c2) {
		c1 = c1.age;
		c2 = c2.age;
		return (c1 - c2) * ContactManager.sortOrder;
	}

	sortByEmail() {
		ContactManager.toggleSortOrder();
		this.displayOfContacts.sort(ContactManager.compareByEmail);
	}

	static compareByEmail(c1, c2) {
		c1 = c1.email.toLowerCase();
		c2 = c2.email.toLowerCase();

		if (c1 < c2)
			return -1 * ContactManager.sortOrder;
		if (c1 > c2)
			return 1 * ContactManager.sortOrder;
		return 0;
	}

	sortByCity() {
		ContactManager.toggleSortOrder();
		this.displayOfContacts.sort(ContactManager.compareByCity);
	}

	static compareByCity(c1, c2) {
		c1 = c1.city.toLowerCase();
		c2 = c2.city.toLowerCase();

		if (c1 < c2)
			return -1 * ContactManager.sortOrder;
		if (c1 > c2)
			return 1 * ContactManager.sortOrder;
		return 0;
	}

	sortByZip() {
		ContactManager.toggleSortOrder();
		this.displayOfContacts.sort(ContactManager.compareZip);
	}

	static compareZip(c1, c2) {
		c1 = c1.zip;
		c2 = c2.zip;
		return (c1 - c2) * ContactManager.sortOrder;
	}

	sortByCountry() {
		ContactManager.toggleSortOrder();
		this.displayOfContacts.sort(ContactManager.compareByCountry);
	}

	static compareByCountry(c1, c2) {
		c1 = c1.country.toLowerCase();
		c2 = c2.country.toLowerCase();

		if (c1 < c2)
			return -1 * ContactManager.sortOrder;
		if (c1 > c2)
			return 1 * ContactManager.sortOrder;
		return 0;
	}
}

//	-----------------------------------
ContactManager.sortOrder = -1;

/*

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
