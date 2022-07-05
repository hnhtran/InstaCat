import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import Footer from "../../components/Footer/Footer"

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {
        user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            {/* <NavBar /> */}
            <HomePage />
            {/* <Footer /> */}
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )
        // <AuthPage/>
      }
    </div>
  );
}
