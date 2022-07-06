// import NavBar from '../../components/NavBar/NavBar'
// import Sidebar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
// import Footer from '../../components/Footer/Footer'

export default function Home({user}) {
	return (
		<>
			{/* <NavBar /> */}
			<div className='home'>
				{/* <Sidebar /> */}
				<Feed user={user}/>
				{/* <Footer /> */}
			</div>
		</>
	)
}
