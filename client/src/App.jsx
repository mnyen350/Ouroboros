import './App.css';

import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import TicketPage from './components/pages/TicketPage';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  const [isHalf, setIsHalf] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout {...{ isHalf }} />}>
          <Route index element={<SigninPage {...{ setIsHalf }} />} />
          <Route path="signup" element={<SignupPage {...{ setIsHalf }} />} />
          <Route path="tickets" element={<TicketPage {...{ setIsHalf }} />} />
          <Route path="profile" element={<ProfilePage {...{ setIsHalf }} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;