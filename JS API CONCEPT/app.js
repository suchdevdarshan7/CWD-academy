// function SomethingRelevant() {
//~ fetch("api",{}) // request details: 

//     fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => console.log(data))
// }

// SomethingRelevant()

// JSON.parse()// synchrounous method

//     .json()


// async function fetching() {
//     const response = await fetch("")
//     const data = await response.json();
//     console.log(data)
// }

// fetching()

let dataObj = {};

async function sendDataToBackend(dataObj) {
    const response = await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const data = await response.json();
    console.log(data)
}

function validateForm(dataObj) {
    if (dataObj.username === '' || dataObj.password === '') {
        alert("Hey idiot fill the form ")
        return;
    }
    else {
        sendDataToBackend(dataObj);
    }
}

document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault()
    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    dataObj = { username, password };

    validateForm(dataObj);

})