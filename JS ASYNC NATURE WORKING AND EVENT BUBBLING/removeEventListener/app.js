let container = document.querySelector('.container');
let box = document.querySelector('.box');
let innerBox = document.querySelector('.innerbox');

let i = 0;
const callback = (e) => {
    console.log('The container is clicked');
    i++;
    if (i === 2) {
        container.removeEventListener('click', callback);
    }
};

container.addEventListener('click', callback);


container.removeEventListener('click', (e) => {
    console.log('The container is clicked');
})