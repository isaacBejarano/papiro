// REFERENCES
// 1. <#searchbar><input>
let searchbarInput = document.querySelector("#searchbar input");
// 2. <#searchbar> --direct DOM ref by id (no querySelector required)

// LISTENERS
searchbarInput.addEventListener("input", validateSearchbarStyle); // useCapture bubble default
searchbar.addEventListener("submit", validateSearchbarLogic); // useCapture bubble default

// VALIDATION --style
function validateSearchbarStyle() {
	searchbarInput.value.length <= 3
		? (searchbarInput.classList.remove("is-valid"),
		  searchbarInput.classList.add("is-invalid"))
		: (searchbarInput.classList.remove("is-invalid"),
		  searchbarInput.classList.add("is-valid"));
}

// VALIDATION --logic
function validateSearchbarLogic(e) {
	searchbarInput.value.length <= 3
		? (e.stopPropagation(),
		  e.preventDefault(),
		  searchbarInput.classList.add("is-invalid"))
		: true; // * send value as request to API REST (to be implemented)
}


