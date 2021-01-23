const randomUserURL = 'https://randomuser.me/api/?results=12&nat=us';
const galleryDiv = document.getElementById('gallery');
const body = document.getElementsByTagName('body')[0];

//Call to grab 12 random users
//Call to create User Cards with returned data
const users = fetch(randomUserURL)
	.then(response => response.json())
	.then(data =>{createUserCard(data.results);
					  createModal(data.results)})
	.catch(error => console.error(error));


//Listener on galleryDiv to listen for click on any part of a card. Displays proper modal 
 galleryDiv.addEventListener('click', e => {
  const allModals = document.querySelectorAll('.modal-container');
  const target = e.target;
  const parent = e.target.parentElement;
  const grandparent = e.target.parentElement.parentElement;

	 if(target.className !== 'gallery'){
		//Check if target, parent, grandparent have the 'card' class. Use number class to display appropriate Modal
		if (target.classList.contains('card')) {
			allModals[target.classList[1]].style.display = '';
		}
		else if (parent.classList.contains('card')) {
			allModals[parent.classList[1]].style.display = '';
		}
		else if (grandparent.classList.contains('card')) {
			allModals[grandparent.classList[1]].style.display = '';
		}
	 };
});

//Listener on the body
//Check what tagnames or class names are 
body.addEventListener('click', e => {
	const target = e.target;
	const parent = e.target.parentElement;
	if (parent.tagName === 'BUTTON') {
		parent.parentElement.parentElement.style.display = 'none';
	}
	else if (target.tagName === 'BUTTON'){
		parent.parentElement.style.display = 'none';
	}
});