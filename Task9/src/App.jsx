import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

export default function App() {
  const person = { name: "Vinit", age: 20 };
  const product = { name: "I-Phone", price: "$100,000" };
  return (
    <>
      <Person person={person} />
      <Product product={product} />
    </>
  );
}