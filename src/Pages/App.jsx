import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Works from "./Works";
import Blog from "./Blog";
import Contact from "./Contact";
import LegalNotice from "./LegalNotice";
import Layout from "../Components/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="works" element={<Works />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legalnotice" element={<LegalNotice />} />
      </Route>
    </Routes>
  );
}

export default App;
