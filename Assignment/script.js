const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarUl = document.getElementsByClassName('navUL')[0]

toggleButton.addEventListener('click', () => {
    navbarUl.classList.toggle('active')
})

const joinButton = document.querySelector('.button')

joinButton.addEventListener('click', () => {
    window.location.href='join.html';
})





