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

/* TODO
	-make Modal window display when a card is clicked
	---How?
*/
//Only fire if click is not on the gallery 
 galleryDiv.addEventListener('click', e => {
	 if( e.target.className !== 'gallery'){
		 //Select all cards and modals and store them in seperate variables
		const allCards = document.querySelectorAll('.card');
		const allModals = document.querySelectorAll('.modal-container');
		console.log(allCards[9].classList[1]);
		console.log(e.target);
	 }
 });

