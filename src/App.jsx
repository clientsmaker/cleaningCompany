import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./Page/Home";
import About from "./Page/About"
import Services from "./Page/Services"
import Contact from "./Page/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
