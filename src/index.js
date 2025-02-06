import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.obj.photoName} alt={props.obj.name}></img>
      <div>
        <h3>{props.obj.name}</h3>
        <p>{props.obj.ingredients}</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza obj={pizza} key={pizza.name} />
        ))}
      </div>
    </main>
  );
}

//
function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza co.</h1>
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} - We are currently open
    </footer>
  );
}

// render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
