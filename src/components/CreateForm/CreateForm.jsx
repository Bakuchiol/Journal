import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as entryService from '../../utilities/entry-service';


function CreateForm({setAllServices}) {
  const [createData, setCreateData] = useState("");

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

    const user = await entryService.newEntry(newCreateData)
    setAllServices(newCreateData)
    // setAllServices(user)
   
  } catch(err) {
    setCreateData({...createData, error: 'Unable to Store your Entry'})
  }
  navigate('/')
}

  return (
    <div>
        <h1>Entry Journal</h1>
         <form onSubmit={handleSubmit}>
            Title
            <br />
            <input type="text" name='title' onChange={handleChange} />
            <br />
            Content
            <br />
            <input type="text" name='content' onChange={handleChange} />
            <br />    
            <input type="submit" name='' value="Create New Entry" onSubmit={handleSubmit}/>
            <Link to="/">Back</Link>
        </form>       
    </div>
  )
}

export default CreateForm;