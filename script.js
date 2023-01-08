const switchButton = document.querySelector("#switch button")
const imgAvatar = document.querySelector("#profile img")

switchButton.addEventListener("click", () => {
    const html = document.documentElement
    html.classList.toggle("light")

    html.classList.contains("light") ? imgAvatar.setAttribute("src", "./assets/avatar-light.png")
    : imgAvatar.setAttribute("src", "./assets/avatar-dark.png")

    html.classList.contains("light") ? imgAvatar.setAttribute("alt", "Guilherme's photo with sunglasses and cap")
    : imgAvatar.setAttribute("alt", "Guilherme's photo with a acoustic guitar")
})