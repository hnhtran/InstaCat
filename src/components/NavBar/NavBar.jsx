import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

const NavBar = ({user, setUser}) => {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <div className='navbar-container'>
      <Link to="/"><img src="images/homeicon.png" className='icon' alt="" /></Link>
      <Link to=""><img src="images/newposticon.png" className="icon" alt=""/></Link>
      <Link to=""><img src="images/usericon.png" className="icon" alt=""/></Link>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </div>
  );
}

export default NavBar