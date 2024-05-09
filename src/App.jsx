import { Fragment, useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </Fragment>
  );
}

export default App;
