
let movieName = document.querySelector('.searchMovie');
let container = document.querySelector('.container')
document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault()
    let nameOfMovie = movieName.value;
    getDetails(nameOfMovie)
})

// function renderContent({ Title, Poster }) {
//     const html = `
//         <h1>${Title}</h1>
//         <img src=${Poster} alt=${Title}>
//     `

//     container.innerHTML = html;
// }

async function getDetails(nameOfMovie) {

    let apiKey = "ff4a098172ecb0c2ac9d7fc26daa0083";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nameOfMovie}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json()
    console.log(data)

}
