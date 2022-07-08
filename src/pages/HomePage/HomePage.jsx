// import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
// import Footer from "../../components/Footer/Footer";
import './HomePage.css'
import { useState } from "react";

export default function Home({user, post, setPost}) {
	console.log(user._id)
  return (
    <>
      
      <div className="home">
        <Sidebar />
        <Feed user={user} post={post} setPost={setPost}/>
      </div>
      
    </>
  );
}
