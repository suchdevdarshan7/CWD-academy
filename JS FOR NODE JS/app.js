async function getProducts() {

    try {
        const response = await fetch('https://fakestore.api/products.com');
        const data = await response.json();
        console.log(data)

    }
    catch (err) {
        throw new Error('This is the custom error to check')
    }
}
getProducts()

