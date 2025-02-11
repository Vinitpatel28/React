import React from "react";

function Greeting() {
  const name = "Vinit Patel"; 
  const currentDate = new Date().toDateString(); 

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today's date is {currentDate}.</p>
    </div>
  );
}

export default Greeting;