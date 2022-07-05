import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
</style>
// Using the import below, we can call any exported function using: userService.someMethod()
export default function NavBar({user, setUser}) {
    function handleLogOut() {
      // Delegate to the users-service
      userService.logOut();
      // Update state will also cause a re-render
      setUser(null);
    }
  
  return (
    <div className="header">
      {/* <Link to=""><img src="images/homeicon.png" className="icon" alt=""/></Link> */}
      <Link to="">TEST</Link>
      <Link to=""><img src="images/newposticon.png" className="icon" alt=""/></Link>
      Welcome, {user.name}
      <Link to=""><img src="images/usericon.png" className="icon" alt=""/></Link>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </div>
  );
}
