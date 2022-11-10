/*import logo from "./logo.svg";
import "./App.css";
import Button from "./Button.js";
import React, { useState } from "react";
import ProductList from "./ProductList.js";
import Cart from "./Cart.js";*/

function App() {
  const attribs = {
    alt2: "logo2",
    alt3: "logo2",
  };
  const [theme, setTheme] = useState("dark");

  if (theme === "invisible") {
    return <div>I'm a ghost</div>;
  } else
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" {...attribs} />
          Theme is : {theme}
          <ProductList />
          <Button
            title="Button 1"
            color="green"
            onClick={() => setTheme("invisible")}
          />
          {theme !== "light" && (
            <Button
              title="Button 2"
              backgroundColor="green"
              onClick={() => alert("Button 2")}
            />
          )}
          {theme !== "light" && (
            <Button
              title="Button 3"
              backgroundColor="green"
              onClick={() => alert("Button 3")}
            />
          )}
          {theme === "light" && (
            <Button
              title="Button 4"
              rounded={true}
              onClick={() => alert("Button 4")}
            />
          )}
          <Button
            title={`Toggle theme (${theme})`}
            rounded={true}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}

export default App;