import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { PropaneSharp } from '@mui/icons-material';

const NavBar = ({user, setUser}) => {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <div className='navbar-container'>
      <div className='instacat'>
        <h1>InstaCat</h1>
      </div>
      <div className='icons'>
      <Link to="/"><img src="images/homeicon.png" className='icon' alt="" /></Link>
      <Link to=""><img src="images/newposticon.png" className="icon" alt=""/></Link>
      <Link to="/settings"><img src="images/usericon.png" className="icon" alt=""/>{user.name}</Link>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </div>
  );
}

export default NavBar