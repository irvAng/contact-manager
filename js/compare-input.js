//====COMPARE INPUT
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

		//Filter array. If the input matches the a contact's name at 
		//length of input, it is added to the display of contacts array
		// e.g.  input = irv; contact name = Irving; contact name is sliced 
		//to irv

		cm.displayOfContacts = cm.listOfContacts.filter(contact => {
			let name = contact.name.toLowerCase();
			name = name.slice(0, input.length);
			if(input === name) countMatches++;
			return input === name;
		});

		//if input > 0, display only partial list; else display full list
		if (input.length > 0) {
			displayContactsAsATable('contacts', cm);

			//...and countMatches > 0 (at least one match): display number of matches
			if (countMatches > 0) {
				feedback.value = countMatches + ' ' + 'contacts match.'
			} else if (countMatches === 0) {
				//else display that there are no matches
				feedback.value = 'Sorry, no contact found.'
			}

			//if no input is present, display all contacts
		} else if (input.length === 0) {//else display full list
			displayFullListOfContacts('contacts', cm);
			feedback.value = "Displaying all contacts.";
		}
	}
}