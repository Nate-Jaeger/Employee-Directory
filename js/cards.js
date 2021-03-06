/**
 * Creates Card elements and appends them to the gallery
 * @param {JSON} array The JSON data to used to populate card elements
 */

const createUserCard = array => {
	//Used as an index for displaying modals, added to card class
	let i = 0;
	array.map( user => {
		let html = `
		<div class="card ${i}">
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
		++i;
	});
	cards = document.querySelectorAll('.card');
}

/**
 * Creates Modal elements and appends them to body
 * @param {JSON} array JSON data to be used in populating Modal windows
 */

const createModal = array => {
	
	array.map( user => {
		//Format birthday info into MM/DD/YYYY
		let DOB = new Date(user.dob.date).toLocaleDateString();
		let html = `
		<div class="modal-container" style="display:none">
			<div class="modal">
				<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
				<div class="modal-info-container">
					<img class="modal-img" src="${user.picture.large}" alt="profile picture">
					<h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
					<p class="modal-text">${user.email}</p>
					<p class="modal-text cap">${user.location.city}</p>
					<hr>
					<p class="modal-text">${user.cell}</p>
					<p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
					<p class="modal-text">Birthday: ${DOB}</p>
				</div>
			</div>

			<div class="modal-btn-container">
				<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
				<button type="button" id="modal-next" class="modal-next btn">Next</button>
         </div>
		</div>`;
	
		body.insertAdjacentHTML('beforeend', html);
	});
	modals = document.querySelectorAll('.modal-container');
}

//Append search bar inside search-container
const searchBar = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
document.querySelector('.search-container').insertAdjacentHTML('afterbegin', searchBar);