import Layout from "./components/Layout"
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;