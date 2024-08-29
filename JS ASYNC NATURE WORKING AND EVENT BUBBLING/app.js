let container = document.querySelector('.container');
let box = document.querySelector('.box');
let innerBox = document.querySelector('.innerbox');


container.addEventListener('click', (e) => {
    console.log('The container is clicked');
})

container.removeEventListener('click', (e) => {
    console.log('The container is clicked');
})

// box.addEventListener('click', () => {
//     console.log('The box is clicked')
// }, true)

// innerBox.addEventListener('click', () => {

//     console.log('The innerBox is clicked')
// }, true)  