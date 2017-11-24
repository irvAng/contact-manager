// this funciton is called every time a value is received on input
//cm as reference instead of gobal variable
function compareValues(cm) {
	return function (evt) {
		let input = evt.target.value;//a string
		input = input.toLowerCase();
		let myTable = document.querySelector('#contacts table');
		let feedback = document.querySelector('#match-display');
		let countMatches = 0;
		cm.displayOfContacts = [];

		for (let i = 0; i < cm.listOfContacts.length; i++) {

			let name = cm.listOfContacts[i].name;
			name = name.toLowerCase();
			name = name.slice(0, input.length);

			if (input === name) {
				cm.displayOfContacts.push(cm.listOfContacts[i]);
				countMatches++;
			}
		}

		//if input > 0, display only partial list; else display full list
		if (input.length > 0) {
			displayContactsAsATable('contacts', cm);

			//if input > 0 and countMatches > 0: display number of matches
			if (countMatches > 0) {
				feedback.value = countMatches + ' ' + 'contacts match.'
			} else if (countMatches === 0) {
				//else display that there are no matches
				feedback.value = 'Sorry, no contact found.'
			}

		} else if (input.length === 0) {//else display full list
			displayFullListOfContacts('contacts', cm);
			feedback.value = "Displaying all contacts.";
		}
	}
}