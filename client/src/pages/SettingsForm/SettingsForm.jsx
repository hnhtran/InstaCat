import { useState } from 'react';
export default function SettingsForm() {

    return (
        <main className="SettingsForm">
         <h1>General settings</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            
            <input type="text"placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} required />
        
            <input type="email"placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange} required />
            
            <input type="password" placeholder='Password' name="password" value={this.state.password} onChange={this.handleChange} required />
            
            
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
          

        </main>
      );

}
   