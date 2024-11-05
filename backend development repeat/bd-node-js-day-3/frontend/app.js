const container = document.querySelector('.container')

function renderContent(el) {
    const html = `
    <div class="box">
        <h1>${el.name}</h1>
        </div>
    `
    container.innerHTML += html;
}
async function getProducts() {


    const response = await fetch("http://localhost:3000/products", {
        mode: 'no-cors',
    });


    const data = await response.json();

    data.map((el) => {
        renderContent(el);
    })
}

getProducts()