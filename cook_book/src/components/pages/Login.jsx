import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert('Username and password are required');
      return;
    }
    else if(name != name )
    axios.post('http://localhost:3000/login', {
      name: name,
      password: password
    })
    .then(result => {console.log(result)
      if(result.data.message === "Login Success")
        {
          navigate('/');
          }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='user'>
          <input
            type='text'
            placeholder='Username'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className='pass'>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='register'>
          <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
