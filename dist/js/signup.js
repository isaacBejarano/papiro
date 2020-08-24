console.log('signup.js runnin...')

// REFERENCES
// 1. <#signin><a><button>
// 2. <#signin> --direct DOM ref by id (no querySelector required)

// LISTENERS
// signinButton.addEventListener("click", validateSearchbarStyle); // useCapture bubble default

// VALIDATION --style
// function validateSearchbarStyle() {
// 	searchbarInput.value.length <= 3
// 		? (searchbarInput.classList.remove("is-valid"),
// 		  searchbarInput.classList.add("is-invalid"))
// 		: (searchbarInput.classList.remove("is-invalid"),
// 		  searchbarInput.classList.add("is-valid"));
// }

// VALIDATION --logic
// on submit if valid => 
// 1. sed to API resit
// 2. autimatycally go back to frontpage


// REMEMBER ME checkbox => try implement cookies