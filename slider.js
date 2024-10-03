let next = document.querySelector ('.next')
let previous = document.querySelector ('.previous')
let img = document.querySelectorAll ('.img')

next.onclick = () => {
    let active = document.querySelector ('.active')
    active.classList.remove('active')
    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add ('active')
    } else {
        active.parentElement.firstElementChild.classList.add ('active')
    }

}

previous.onclick = () => {
    let previous = document.querySelector ('.active')
    previous.classList.remove('active')
    if (previous.previousElementSibling) {
        previous.previousElementSibling.classList.add ('active')
    } else {
        previous.parentElement.lastElementChild.classList.add ('active')
    }

}
