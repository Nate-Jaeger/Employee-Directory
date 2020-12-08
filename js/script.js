const randomUserURL = 'https://randomuser.me/api/?results=12';
const galleryDiv = document.getElementById('gallery');
const body = document.getElementsByTagName('body')[0];

//Call to grab 12 random users
//Call to create User Cards with returned data
const users = fetch(randomUserURL)
	.then(checkStatus)
	.then(response => response.json())
	.then(data => createUserCard(data.results))
	.catch(error => console.error(error));

//Check if fetch request is ok
function checkStatus(response){
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

//Create cards for each random user
function createUserCard(array){
	array.map( user => {
		let html = `
		<div class="card">
			<div class="card-img-container">
				<img class="card-img" src="${user.picture.large}" alt="profile picture">
			</div>
			<div class="card-info-container">
				<h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
				<p class="card-text">${user.email}</p>
				<p class="card-text cap">${user.location.city}, ${user.location.state}</p>
			</div>
		</div>`;
			
		galleryDiv.insertAdjacentHTML('beforeend', html);
	});
}