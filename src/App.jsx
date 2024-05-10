import { Fragment, useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Products from "./components/products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
