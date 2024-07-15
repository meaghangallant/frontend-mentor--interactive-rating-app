// --- Select A Rating Component ------------------------
const getElements = document.querySelectorAll(".rating");
const userRatingSentence = document.querySelector("#user-rating");
let userRating = 0;

const deselect = (input) => {
  for (let i = 0; i < 5; i++){
    if (i !== input) {
      getElements[i].id = ""
    }
  }
}

getElements.forEach(rating => {
  rating.addEventListener("click", () => {
    let ratingArray = Array.from(getElements);
    let num = ratingArray.indexOf(rating);
    getElements[num].id = "selectedRating";
    deselect(num)

// --- Add User's Rating to Thank You State ------------
    userRating = num + 1;
    userRatingSentence.innerHTML = `You selected ${userRating} out of 5`
  })
})

// --- Switch States on Button Click --------------------
let submitButton = document.querySelector("button")

submitButton.addEventListener("click", () => {
  let ratingState = document.querySelector("#rating-state")
  let thankYouState = document.querySelector("#thank-you-state")

  ratingState.style.display = "none"
  thankYouState.style.display = "block"
})




