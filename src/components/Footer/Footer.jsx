import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <h2>Created by:</h2>
            <div className='creators'>
            <a href="https://github.com/hnhtran"><img src="images/tranGH.jpeg" className='creator' alt="githublogo" /></a>
            <a href="https://github.com/annakoanna"><img src="images/AnnaGH.jpeg" className='creator' alt="githublogo" /></a>
            <a href="https://github.com/jlull7774"><img src="images/jasonGH.jpeg" className='creator' alt="githublogo" /></a>
            <a href="https://github.com/tmsheipline"><img src="images/taylorGH.jpeg" className='creator' alt="githublogo" /></a>
            </div>
        </footer>
    )
}



