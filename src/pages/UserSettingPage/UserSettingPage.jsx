import { useState } from 'react';
import './UserSettingPage.css';
import * as usersService from '../../utilities/users-service'
import { Avatar } from '@mui/material';
import FileBase64 from "react-file-base64";

export default function UserSettingPage({ user, setUser }) {
    const [userAvatar, setUserAvatar] = useState(user.avatar);
    const [username, setUsername] = useState(user.name);
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: ""
    });

    function handleChangeUserAvatar({ base64 }) {
        console.log("new useravatar: ", base64);
        setUserAvatar(base64);
    }

    async function handleSubmitUserAvatar(evt) {
        evt.preventDefault();
        try {
            user.avatar = userAvatar;
            const newUser = await usersService.changeAvatar(user)
            setUser(newUser)
        } catch (error) {
            console.log(error);
            alert('Change avatar failed -Try Again');
        }
    }

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
        } catch (error) {
            //   setError('Change username failed - Try Again');
            console.log("error: ", error);
            alert('Change username failed - Try Again');
        }
    }

    function handleChangePassword(evt) {
        // console.log("new password: " + evt.target.value);
        setPasswords({ ...passwords, [evt.target.name]: evt.target.value });

    }
    async function handleSubmitPassword(evt) {
        evt.preventDefault();
        try {
            // console.log("passwords: ", passwords);
            user.oldPassword = passwords.oldPassword;
            user.newPassword = passwords.newPassword;
            // console.log("user", user);
            const newUser = await usersService.changePassword(user);
            setUser(newUser);
        } catch {
            //   setError('Change username failed - Try Again');
            alert('Change password failed - Try Again');
        }
    }

    return (
        <div className="user-setting">
            <h3>General settings</h3>
            <form autoComplete="off" className="form-useravatar" onSubmit={handleSubmitUserAvatar}>
                <label>User profile image</label>
                <Avatar sx={{ width: 100, height: 100 }} alt="User profile image" src={userAvatar} />
                <FileBase64
                    type="file"
                    multiple={false}
                    name='image'
                    onDone={handleChangeUserAvatar}
                />
                <button type="submit" >Submit</button>
            </form>

            <form autoComplete="off" className="form-username" onSubmit={handleSubmitUserName}>
                <label>New Username</label>
                <input type="text" placeholder="New username" name="username" value={username} onChange={handleChangeUserName} required />
                <button type="submit" >Submit</button>
            </form>
            <form autoComplete="off" className="form-password" onSubmit={handleSubmitPassword}>
                <label>Password</label>
                <input type="text" placeholder="Old password" name="oldPassword" required onChange={handleChangePassword} />
                <label>New password</label>
                <input type="text" placeholder="New password" name="newPassword"
                    onChange={handleChangePassword} required />
                <button type="submit" >Submit</button>
            </form>
            {/* add dummy space to overcome the sticky footer */}
            <div className="dummy" />
        </div>
    );




}
