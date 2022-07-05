

export default function Home() {
	return (
		<>
			<NavBar />
			<div className='home'>
				<Sidebar />
				<Feed />
				<Footer />
			</div>
		</>
	)
}
