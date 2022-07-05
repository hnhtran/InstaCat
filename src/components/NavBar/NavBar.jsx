import './NavBar.css';
import { Link } from 'react-router-dom';
// import * as userService from ‘../../utilities/users-service’;
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap’);
</style>
// Using the import below, we can call any exported function using: userService.someMethod()
export default function NavBar() {
  //   function handleLogOut() {
  //     // Delegate to the users-service
  //     userService.logOut();
  //     // Update state will also cause a re-render
  //     setUser(null);
  //   }
  return (
    <div class='header'>
  <a href='#default' class='logo'>InstaCat</a>
  <div class='header-right'>
    <a class='active' href='#home'><img src='images/homeicon.png' className='icon' alt='' /></a>
    <a href='#contact'><img src='images/newposticon.png' className='icon' alt='' /></a>
    <a href='#about'><img src='../../images/usericon.png' className='icon' alt='' /></a>
  </div>
</div>
  );
}

