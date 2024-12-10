import React, { useState } from 'react';
import './Login.css';

const Login = ({ regLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLog = (e) => {
    e.preventDefault();
    if (regLogin.email === email && regLogin.password === password) {
      alert('Login Successful');
    } else {
      alert('Error');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-success" onClick={handleLog}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
