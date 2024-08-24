const numbers = ["red","green","blue","purple"]
const container = document.querySelector('.container');

function renderContent(element){
    
    const html = `
        <p style='background-color:${element}'>${element}</p>
    `
    
    container.innerHTML+=html;
}

numbers.map((element)=>{
    renderContent(element)

})
