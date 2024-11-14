const container = document.querySelector(".container");

function renderContent(el) {
    const html = `
        <li>${el.product}</li>
    `

    container.innerHTML += html;
}

async function getProducts() {
    const response = await fetch('http://localhost:3000/products');

    const data = await response.json()


    data.products.map((el) => {
        renderContent(el)
    })
}

