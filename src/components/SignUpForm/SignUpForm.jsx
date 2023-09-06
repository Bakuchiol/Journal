import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import styles from './SignUpForm.module.css'

export default function SignUpForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('')
  };

  const handleSubmit = async (e) =>  {
    // Prevent form from being submitted to the server
    e.preventDefault()
    try {
      const { confirm, ...data} = formData

      const user = await signUp(data)
      props.setUser(user)
      console.log(user)
    } catch(err) {
      setError('Sign Up Failed')
    }
  }
    const disable = formData.password !== formData.confirm

  return (
    <div className={styles.Wrapper}>
      {console.log(formData)}
        <p>
          Hello, dear friend! 🌸 <br />
          Dive into your journey of well-being.
        </p>
        <br/>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className='input'>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className='input'>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className='input'>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className='input'>
            <label>Confirm</label>
            <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          </div>
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}