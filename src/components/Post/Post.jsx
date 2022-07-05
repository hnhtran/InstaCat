import "./Post.css"

export default function Post({user}) {
	return (
		<>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
                            <span className="postUsername">
                                { user.name }
                            </span>
                        </div>
						<div className='postTopRight'></div>
					</div>

					<div className='postCenter'></div>
					<div className='postBottom'></div>
				</div>
			</div>
		</>
	)
}
