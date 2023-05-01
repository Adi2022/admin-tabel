import React from "react";
import NavbarItems from "./Layout/NavbarItems";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavbarItems/>} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
};

export default App;
