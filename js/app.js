// show more
const showMoreBTN = document.querySelector(".show-more")
const moreInfo = document.querySelector(".more-info")

showMoreBTN.addEventListener("click", (e) => {
  const btn = e.target
  moreInfo.classList.toggle("show-more-info")

  if (btn.textContent === "show more") {
    btn.textContent = "show less"
  } else {
    btn.textContent = "show more"
  }
})
