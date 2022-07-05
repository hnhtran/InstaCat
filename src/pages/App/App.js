import NavBar from '../../components/NavBar/NavBar';
import './App.css';
// import Test from './Test';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
    <NavBar user={user} setUser={setUser}/>
      App
      {/* <Test /> */}
      <AuthPage />
    </div>
  );
}

