import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className={styles.Wrapper}>
      <p>
        Hey there, friend! 😊 <br />
        Time to prioritize yourself today.
      </p>
      <br />
      <div className={styles.formContainer2} onSubmit={handleSubmit}>
        <form autoComplete='off'>
          <div className='input'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div  className={styles.formContainer2}>
            <button type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
      <p className='error-message'>&nbsp;{error}</p>
    </div>
  );
}