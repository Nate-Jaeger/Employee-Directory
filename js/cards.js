/* <------------------->
	CARD/MODAL FUNCTIONS
	<-------------------> */
	
//Create cards for each random user
const createUserCard = array => {
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

const createModal = array => {
	array.map( user => {
		console.log(user)
	});
}