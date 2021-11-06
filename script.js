const img = document.querySelector(".img")
const times = document.getElementById("times")

let increment = 0

img.addEventListener("dblclick", (e) => {
    createHeart(e)

})

const createHeart = (e) => {

    const heart = document.createElement("i")
    heart.classList.add("fa")
    heart.classList.add("fa-heart")

    const x = e.clientX - e.target.offsetleft
    const y = e.clientY - e.target.offsettop


    heart.style.top = y + 'px'
    heart.style.left = x + 'px'

    setTimeout(() => heart.remove(), 500);
    times.innerHTML = ++increment
    img.appendChild(heart)
}

