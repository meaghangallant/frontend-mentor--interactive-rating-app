// Selected rating id >>> #selectedRating

const getElements = document.querySelectorAll(".rating")
console.log(getElements)

getElements.forEach(rating => {
  rating.addEventListener("click", () => {
    let ratingArray = Array.from(getElements);
    let num = ratingArray.indexOf(rating);
  
    console.log(num);
    console.log(getElements[num])
    

  })
})






