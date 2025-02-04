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
      <img src={props.photoSrc} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      <div className="pizzas">
        <Pizza
          name="Focaccia"
          ingredient="Bread with italian olive oil and rosemary"
          photoSrc="pizzas/focaccia.jpg"
        />
        <Pizza
          name={pizzaData[1].name}
          ingredient={pizzaData[1].ingredients}
          photoSrc={pizzaData[1].photoName}
        />
        <Pizza
          name={pizzaData[2].name}
          ingredient={pizzaData[2].ingredients}
          photoSrc={pizzaData[2].photoName}
        />
        <Pizza
          name={pizzaData[3].name}
          ingredient={pizzaData[3].ingredients}
          photoSrc={pizzaData[3].photoName}
        />
        <Pizza
          name={pizzaData[4].name}
          ingredient={pizzaData[4].ingredients}
          photoSrc={pizzaData[4].photoName}
        />
        <Pizza
          name={pizzaData[5].name}
          ingredient={pizzaData[5].ingredients}
          photoSrc={pizzaData[5].photoName}
        />
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
