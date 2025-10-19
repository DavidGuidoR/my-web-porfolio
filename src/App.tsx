import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import AppLayout from "./layouts/AppLayout";

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    );
  }
}

export default App;
