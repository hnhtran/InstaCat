// import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
// import Footer from "../../components/Footer/Footer";
import './HomePage.css'

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="home">
        <Feed />
        <Sidebar />
      </div>
      {/* <Footer /> */}
    </>
  );
}
