const randomUserURL = 'https://randomuser.me/api/?results=12&nat=us';
const galleryDiv = document.getElementById('gallery');
const body = document.getElementsByTagName('body')[0];
let modals;
let cards;
let activeModal;
let clickedCard;

//Call to grab 12 random users
//Call to create User Cards with returned data
const users = fetch(randomUserURL)
	.then(response => response.json())
	.then(data =>{createUserCard(data.results);
					  createModal(data.results)})
	.catch(error => console.error(error));


//Listen for click on any part of a card. Displays proper modal 
 galleryDiv.addEventListener('click', e => {
  modals = document.querySelectorAll('.modal-container');
  cards = document.querySelectorAll('.card');
  const target = e.target;
  const parent = e.target.parentElement;
  const grandparent = e.target.parentElement.parentElement;

	 if(target.className !== 'gallery'){
		//Check if target, parent, grandparent have the 'card' class. Use number class to display appropriate Modal
		if (target.classList.contains('card')) {
			modals[target.classList[1]].style.display = '';
			activeModal = modals[target.classList[1]];
			clickedCard = target;
		}
		else if (parent.classList.contains('card')) {
			modals[parent.classList[1]].style.display = '';
			activeModal = modals[parent.classList[1]];
			clickedCard = parent;
		}
		else if (grandparent.classList.contains('card')) {
			modals[grandparent.classList[1]].style.display = '';
			activeModal = modals[grandparent.classList[1]];
			clickedCard = grandparent;
		}
	 };
});

//Listener on the body used for clicks on Modal window
body.addEventListener('click', e => {
	const target = e.target;
	//Get the index number from the clicked cards classList
	let indexNumber = parseInt(clickedCard.classList[1]);

		//Check if the 'close window' button was clicked
	if (target.tagName === 'STRONG' || target.className === 'modal-close-btn') {
		activeModal.style.display = 'none';
	}

		//Check if 'prev' was clicked. Then hide/show appropriate modals
	if (target.className === 'modal-prev btn') {
		if(indexNumber !== 0) {
			indexNumber -= 1;
			activeModal.style.display = 'none';
			modals[indexNumber].style.display = '';
			activeModal = modals[indexNumber];
			clickedCard = cards[indexNumber];
		}
	}

		//Check if 'next' was clicked. Then hide/show appropriate modals
	if (target.className === 'modal-next btn') {
		if(indexNumber !== modals.length - 1) {
			indexNumber += 1;
			activeModal.style.display = 'none';
			modals[indexNumber].style.display = '';
			activeModal = modals[indexNumber];
			clickedCard = cards[indexNumber];
		}
	}
});