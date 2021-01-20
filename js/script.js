const randomUserURL = 'https://randomuser.me/api/?results=12&nat=us';
const galleryDiv = document.getElementById('gallery');
const body = document.getElementsByTagName('body')[0];

//Call to grab 12 random users
//Call to create User Cards with returned data
const users = fetch(randomUserURL)
	.then(response => response.json())
	//Since function is called in this file, UserCard and Modal have access to global variables in this file
	.then(data =>{createUserCard(data.results);
					  createModal(data.results)})
	.catch(error => console.error(error));

	/* TODO
		-create Modal function to make/append html with proper user data
		-add event listeners to .cards elements
		-make Modal window display when a card is clicked
	*/