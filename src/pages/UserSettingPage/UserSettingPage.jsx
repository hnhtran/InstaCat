import { useState } from 'react';
import './UserSettingPage.css';


export default function UserSettingPage() {
    return (
        <div className="user-setting">
            <h3>General settings</h3>
            <form className="form-username">
                <label>Username</label>
                <input type="text"placeholder="New username" name="name"  required />
                <button type="submit" >Submit</button>
            </form>
            <form className="form-password">
                <label>Password</label>
                <input type="text"placeholder="Old password" name="name"  required />
                <label>New password</label>
                <input type="text"placeholder="New password" name="name"  required />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );




}