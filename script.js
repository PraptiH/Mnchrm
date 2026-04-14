const customCursor = document.querySelector(".customCursor")
const customCursor2 = document.querySelector(".customCursor2")
const navlink = document.querySelectorAll(".navlink")
let smallMouseX = 0, smallMouseY = 0
let bigMouseX = 0, bigMouseY = 0

window.addEventListener("mousemove", (e) => {
    smallMouseX = e.clientX
    smallMouseY = e.clientY

    customCursor2.style.left = smallMouseX + "px"
    customCursor2.style.top = smallMouseY + "px"
})

function mouseRotation() {
    bigMouseX += (smallMouseX - bigMouseX) * 0.1
    bigMouseY += (smallMouseY - bigMouseY) * 0.1

    customCursor.style.left = bigMouseX + "px"
    customCursor.style.top = bigMouseY + "px"

    requestAnimationFrame(mouseRotation)
}
mouseRotation()


navlink.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.cursor="pointer"
        customCursor.style.display = "none"
        customCursor2.style.transform = "scale(4.5)"
    })
})
navlink.forEach(link => {
    link.addEventListener('mouseout', () => {
        
        customCursor2.style.transform = "scale(1)"
        customCursor.style.display = "block"
    })
})

