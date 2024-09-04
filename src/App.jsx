import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.module.scss";
import Home from "./components/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/Sign-Up/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
