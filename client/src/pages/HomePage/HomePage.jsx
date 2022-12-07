// import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
// import Footer from "../../components/Footer/Footer";
import './HomePage.css'

export default function Home({user, post, setPost}) {
  return (
    <>
      <div className="home">
        <Sidebar />
        <Feed user={user} post={post} setPost={setPost}/>
        <div className="dummy" />
      </div>
      
    </>
  );
}
