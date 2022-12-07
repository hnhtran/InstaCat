import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import UserSettingPage from "../UserSettingPage/UserSettingPage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import SideBar from "../../components/SideBar/SideBar";
import CreatePost from "../../pages/CreatePost/CreatePost";
import UpdatePostPage from '../../pages/UpdatePostPage/UpdatePostPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [post, setPost] = useState("");

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/createPost"
              element={<CreatePost user={user} post={post} setPost={setPost} />}
            ></Route>
            <Route
              path="/"
              element={<HomePage user={user} post={post} setPost={setPost} />}
            ></Route>
            <Route
              path="/profiles"
              element={
                <UserProfilePage user={user} post={post} setPost={setPost} />
              }
            ></Route>
            <Route
              path="/settings"
              element={
                <UserSettingPage
                  user={user}
                  setUser={setUser}
                  post={post}
                  setPost={setPost}
                />
              }
            ></Route>
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/api/posts" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage setUser={setUser} />} />
        </Routes>
        // <AuthPage setUser={setUser} />
      )}
    </div>
  );
}
