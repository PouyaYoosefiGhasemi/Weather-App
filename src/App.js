import React from "react";
import Home from "./Pages/Home";
import Response from "./Pages/Response";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/response" element={<Response />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
