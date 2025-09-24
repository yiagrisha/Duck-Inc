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

let body = document.querySelector('body')

let gray = document.querySelector('#gray')
let white = document.querySelector('#white')
let ogar = document.querySelector('#ogar')
let green = document.querySelector('#green')

document.addEventListener('scroll', function() {
   let progress = window.scrollY / (body.getBoundingClientRect().height)

   gray.style.bottom = (-25 + (progress * 120)) + 'em'
   white.style.bottom = (-16 + (progress * 50)) + 'em'
   ogar.style.bottom = (-50 + (progress * 180)) + 'em'
   green.style.bottom = (-25 + (progress * 120)) + 'em'
})



function splitTextToLetters(rootEl) {
  if (!rootEl) return
  if (rootEl.dataset.split === 'true') return

  const originalText = rootEl.textContent.trim()
  rootEl.setAttribute('aria-label', originalText)

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent

      const tokens = text.split(/(\s+)/)
      if (tokens.length === 0) return null

      const frag = document.createDocumentFragment()
      tokens.forEach(token => {
        if (token === '') return
        if (/^\s+$/.test(token)) {

          frag.appendChild(document.createTextNode(token))
        } else {

          const word = document.createElement('span')
          word.className = 'word'

          word.setAttribute('aria-hidden', 'true')

          Array.from(token).forEach(ch => {
            const chSpan = document.createElement('span')
            chSpan.className = 'char'
            chSpan.textContent = ch
            word.appendChild(chSpan)
          });

          frag.appendChild(word)
        }
      });

      return frag;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.classList && (node.classList.contains('word') || node.classList.contains('char'))) {
        return node.cloneNode(true)
      }
      const clone = node.cloneNode(false)
      node.childNodes.forEach(child => {
        const processed = processNode(child)
        if (processed) clone.appendChild(processed)
      });
      return clone
    }
    return null
  }

  const containerFrag = document.createDocumentFragment()
  rootEl.childNodes.forEach(child => {
    const processed = processNode(child)
    if (processed) containerFrag.appendChild(processed)
  });

  rootEl.innerHTML = ''
  rootEl.appendChild(containerFrag)
  rootEl.dataset.split = 'true'
}

document.addEventListener('DOMContentLoaded', () => {
  splitTextToLetters(document.querySelector('#fourthBlock #fourthBlockText #animatedText'))
})


setTimeout(()=> {
   gsap.registerPlugin(ScrollTrigger)
   
   gsap.to("#animatedText span", {
     opacity: 1,
     stagger: 0.02,
     ease: "power1.out",
     scrollTrigger: {
       trigger: "#fourthBlock",
       start: "top top",
       end: "bottom bottom",
       scrub: true
     }
   })

   gsap.to("#fourthBlock p", {
     opacity: 1,
     stagger: 0.02,
     ease: "power1.out",
     scrollTrigger: {
       trigger: "#fourthBlock",
       start: "top top",
       end: "bottom bottom",
       scrub: true
     }
   })

}, 100)
