// show more
const showMoreBTN = document.querySelector(".show-more")
const moreInfo = document.querySelector(".more-info")

showMoreBTN.addEventListener("click", () => {
  moreInfo.classList.toggle("show-more-info")
  if (showMoreBTN.textContent === "show more") {
    showMoreBTN.textContent === "show less"
  } else {
    showMoreBTN.textContent === "show more"
  }
})
