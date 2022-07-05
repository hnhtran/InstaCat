import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';
export default class SignUpForm extends Component {
  // class field syntax
  
  state = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      
      this.setState({error: 'Sign Up Failed - Try Again'});
    }
  };

  handleChange = (evt) => {
    
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
            <h1>Instacats</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label></label>
            <input type="text"placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label></label>
            <input type="email"placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange} required />
            <label></label>
            <input type="password" placeholder='Password' name="password" value={this.state.password} onChange={this.handleChange} required />
            <label></label>
            <input type="password" placeholder='Confirm' name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}