const imageContainerEl = document.querySelector(".image-container")
const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next") 

let x = 0
prevEl.addEventListener("click", ()=> {
    x += 45;
    updateGallery()
})

const updateGallery = () => {
    imageContainerEl.style.transform = `
        perspective(1000px) rotateY(${x}deg)
    `
}

nextEl.addEventListener("click", ()=> {
    x -= 45;
    updateGallery()
})