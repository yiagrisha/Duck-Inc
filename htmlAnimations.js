let headerText = document.querySelector('#firstBlock span h1') 
console.log(headerText.textContent)

const carousel = document.getElementById('carousel')
const card = document.querySelector('#carousel section')
let cardWidth 
let gap


document.querySelector("#scroll-buttons #left").addEventListener("click", () => {
   gap = parseInt(getComputedStyle(carousel).gap, 10)
   cardWidth = card.offsetWidth

   scrollAmount = cardWidth + gap
   carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
})
document.querySelector("#scroll-buttons #right").addEventListener("click", () => {
   gap = parseInt(getComputedStyle(carousel).gap, 10)
   cardWidth = card.offsetWidth

   scrollAmount = cardWidth + gap
   carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
})


