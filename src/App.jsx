import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./Page/Home";
import About from "./Page/About"
import Services from "./Page/Services"
import Contact from "./Page/Contact";
import Service1 from "./Components/ServicePage/Service1";
import PurityChecking from "./Components/ServicePage/PurityChecking";
import PestControl from "./Components/ServicePage/PestControl";
import AcMaintanance from "./Components/ServicePage/AcMaintanance";
import HomeMaintanance from "./Components/ServicePage/HomeMaintanance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/watertank-cleaning" element={<Service1 />} />
        <Route exact path="/purity-checking" element={<PurityChecking />} />
        <Route exact path="/pest-control" element={<PestControl />} />
        <Route exact path="/aircondition-check" element={<AcMaintanance />} />
        <Route exact path="/home-maintanance" element={<HomeMaintanance />} />
      </Route>
    </Routes>
  );
}

export default App;
