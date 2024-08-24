let image = document.querySelector('.image')

//  "https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg"
// https://cdn.pixabay.com/photo/2018/07/28/14/30/soccer-3568168_640.jpg";
//  "https://cdn.pixabay.com/photo/2019/12/22/09/31/lion-4712141_1280.jpg";
//  "https://cdn.pixabay.com/photo/2018/04/19/09/50/animal-3332729_640.jpg";


let images = [
     "https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg",
    "https://cdn.pixabay.com/photo/2018/07/28/14/30/soccer-3568168_640.jpg",
    "https://cdn.pixabay.com/photo/2019/12/22/09/31/lion-4712141_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/19/09/50/animal-3332729_640.jpg"

]

let i = 0;


function increment(){
    ++i;
    image.src = images[i];
    console.log(i)
    if(i>=4){
        i = 0 ;
        image.src = images[i];
    }
}
function decrement(){
    --i;
    image.src = images[i];
    console.log(i)
    if(i<=0){
        i = 3 ;
        image.src = images[i];
    }
}




// function increment(){
//     ++i;
//     if(i===1){
//         image.src = imageOne;
//     }
//     else if(i===2){
//         image.src = imageTwo;
//     }
//     else if(i===3){
//         image.src = imageThree;
//     }
//     else {
//         i = 0;
//         image.src = imageZero;
//     }
// }
// function decrement(){
//     --i;
//     if(i===0){
//         image.src = imageOne;
//     }
//     else if(i===1){
//         image.src = imageOne;
//     }
//     else if(i===2){
//         image.src = imageTwo;
//     }
//     else if(i===3){
//         image.src = imageThree;
//     }
//     else {
//         i = 3;
//         image.src = imageThree;
//     }
// }