//! Invoking the function and the components will be confused if we use Navbar()

function App() {
  let products = [
    {
      id: 1,
      name: "Dell Laptop ",
      price: "500$",
    },
    {
      id: 2,
      name: "HP Laptop ",
      price: "600$",
    },
    {
      id: 3,
      name: "Asus Laptop ",
      price: "800$",
    },
    {
      id: 4,
      name: "Apple Macbook Pro",
      price: "1500$",
    },
    {
      id: 5,
      name: "Apple Macbook Air",
      price: "1000$",
    },
  ];

  return (
    <div className="container">
      {products.map((el) => {
        return (
          <div>
            <h1>{el.name}</h1>
            <h2>{el.price}</h2>
          </div>
        );
      })}
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      I am a navbar
      <Jayaram></Jayaram>
      <Ujwala></Ujwala>
    </nav>
  );
}

function Jayaram() {
  let Myage = "I am 16 years old!";

  return <h2>I am jayaram component {Myage} </h2>;
}

function Ujwala() {
  return <h3>I am ujwala component</h3>;
}

export default App;

//!--> we call it as components
//!--> all components return jsx (html)

//! --> only 1 jsx element should be returned in a component
