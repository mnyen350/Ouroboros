import './App.css';

import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import TicketPage from './components/pages/TicketPage';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout {...{  }} />}>
          <Route index element={<SigninPage {...{  }} />} />
          <Route path="signup" element={<SignupPage {...{  }} />} />
          <Route path="tickets" element={<TicketPage {...{  }} />} />
          <Route path="profile" element={<ProfilePage {...{  }} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;