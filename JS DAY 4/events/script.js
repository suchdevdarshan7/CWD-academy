


const container = document.querySelector('.container');
const image = document.querySelector('img');

const images = [
    "https://cdn.pixabay.com/photo/2015/01/26/22/31/children-613196_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png",
    "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_640.png",
    "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_640.jpg",
    "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/21/13/49/car-8778216_640.jpg"
]

let i = 0  ;


function applyAnimation(className) {
    image.classList.add(className);
    setTimeout(() => {
        image.classList.remove(className);
    }, 1000); // Match this duration with the animation duration in CSS
}

function ChangeImageIncrement() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    image.src = images[i];
    applyAnimation("animation1");
}

function ChangeImageDecrement() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    image.src = images[i];
    applyAnimation("animation2");
}
// const button = document.querySelector('button');


// function ChangeColor(){
//     container.classList.add('blue')
// }

// function ChangeColorAgain(){
//     container.classList.remove('blue');
// }


function ChangeColor(){
    container.classList.toggle('blue');
}