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


//Event only fires if click is not on the gallery element 
 galleryDiv.addEventListener('click', e => {
	 if( e.target.className !== 'gallery'){
		const allModals = document.querySelectorAll('.modal-container');
		 //Select class names of target and parent elements
		const target = e.target;
		const parent = e.target.parentElement;
		const grandparent = e.target.parentElement.parentElement;
		
		//Check if target||parent||grandparent have the 'card' class. Use number class to display appropriate Modal
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
	
	 //IF e.target.tagName == STRONG, close window
});

/* 
 Event listener to each card element
	 each event listener returns number 
	 number used to pull data from allModals array
*/