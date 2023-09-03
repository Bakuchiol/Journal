import { useState } from 'react'
import { signUp } from "../../utilities/users-service";

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
    <div>
      {console.log(formData)}
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  )
}