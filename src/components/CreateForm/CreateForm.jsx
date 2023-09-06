import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './CreateForm.module.css'


function CreateForm() {
  const [createData, setCreateData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateData({
      ...createData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) =>  {
  e.preventDefault()
  try {
    const newCreateData = {...createData};

    const user = await axios.post("/api/entry/newEntry", newCreateData)
    // entryService.newEntry(newCreateData)
    // (user)
    console.log(user)
   
  } catch(err) {
    console.error(err)
    setCreateData({...createData, error: 'Unable to Store your Entry'})
  }
  navigate('/')
}

const refreshPage = () => {
  window.location.reload();
}

  return (
    <div className={styles.Wrapper}>
        <h1>Entry Journal</h1>
        <div>
          <p>
          Write down one kind or loving thing you did for yourself today. <br />
          It could be big or small. <br/>
          Celebrate your acts of self-care and self-love.
          </p>
        </div>
        {/* TODO: */}
         <form onSubmit={handleSubmit} className={styles.Form}>
            Title
            <br />
            <input type="text" name='title' onChange={handleChange} className={styles.input}/>
            <br />
            Content
            <br />
            <input type="text" name='content' onChange={handleChange} />
            <br />  
            Image  
            <br />
            <input type="text" name='image' placeholder='image url' onChange={handleChange}/>
            {/* <input type="submit" name='' value="Create New Entry" onSubmit={handleSubmit}/> */}
            <br />
            <button onClick={refreshPage}>Create</button>
        </form>
    </div>
  )
}

export default CreateForm;