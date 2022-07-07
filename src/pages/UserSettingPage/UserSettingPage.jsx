import { useState } from 'react';
import './UserSettingPage.css';
import * as usersService from '../../utilities/users-service'


export default function UserSettingPage({ user, setUser }) {
    const [username, setUsername] = useState(user.name);

    function handleChangeUserName(evt) {
        // console.log("new username: " + evt.target.value);
        setUsername(evt.target.value);
    }

    async function handleSubmitUserName(evt) {
        evt.preventDefault();
        try {
          user.name = username; // update the username.
          const newUser = await usersService.changeUsername(user);
          setUser(newUser);
        } catch {
        //   setError('Change username failed - Try Again');
          alert('Change username failed - Try Again');
        }
    }

    function changeUserPassword(evt) {
        console.log(evt);
    }

    return (
        <div className="user-setting">
            <h3>General settings</h3>
            <form className="form-username" onSubmit={handleSubmitUserName}>
                <label>Username</label>
                <input type="text"placeholder="New username" name="username" value= {username} onChange={handleChangeUserName} required />
                <button type="submit" >Submit</button>
            </form>
            <form className="form-password" onSubmit={changeUserPassword}>
                <label>Password</label>
                <input type="text"placeholder="Old password" name="oldPassword"  required />
                <label>New password</label>
                <input type="text"placeholder="New password" name="newPassword"  required />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );




}
