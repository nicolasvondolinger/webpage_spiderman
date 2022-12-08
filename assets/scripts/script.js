function handleMouseEnter() {
  this.classList.add("card--hovered")
  document.body.id = `${this.id}-hovered`
}

function handleMouseLeave() {
  this.classList.remove("card--hovered")
  document.body.id = ``
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName("card")
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]
    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)

function selectCarouselIten(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id
  const carousel = document.querySelector(".cards-carousel")
  const transformValue = carousel.style.transform
  const rotateY = transformValue.match(/rotateY\((-?\d+deg)\)/i)
  const rotateYDeg = -120 * (Number(selectedItem) - 1)
  const newTransformValue = transformValue.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  )

  carousel.style.transform = newTransformValue

  const activeButtonElement = document.querySelector('.controller_button-active')
  selectedButtonElement.classList.add('.controller_button-active')
  activeButtonElement.classList.remove('.controller_button-active')
}
