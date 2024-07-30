import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert('Username and password are required');
      return;
    }
    axios.post('http://localhost:3000/register', {
      name: name,
      password: password
    })
    .then(result => {alert("registration seccessful")
        setTimeout(() => {
          navigate('/')
        }, 1000);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='login'>
      <h1>Register</h1>
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
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Register;
