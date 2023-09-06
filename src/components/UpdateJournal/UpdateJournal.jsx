import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as entryService from '../../utilities/entry-service';

function UpdateJournal() {
 
  const [allEntries, setAllEntries] = useState({
    _id:"",
    title:"",
    content:"",
    like:""
  });
  const id = useParams().id;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAllEntries({
      ...allEntries,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) =>  {
  e.preventDefault()
  try {
    const newEditData = {...allEntries};

    const res = await entryService.editEntry(newEditData)
   console.log(res)
  } catch(err) {
    setAllEntries({...allEntries, error: 'Unable to Edit, Try Again Later'})
  }
  navigate('/')
}

useEffect(() => {
   axios.get(
    `/api/services/entry/${id}`
  ).then(
    res => {setAllEntries(res.data);}
  );
}, []);
  
    return (
      <div>
          <h1>Edit Journal Entry</h1>
           <form onSubmit={handleSubmit} action={`/update/submit/${id.id}?_method=PUT`} method='POST' >
              Title
              <input type="text" name='serviceName' value={allEntries.serviceName}  onChange={handleChange} />
              <br />
              Content
              <input type="text" name='serviceType' value={allEntries.serviceType} onChange={handleChange} />
              <br />
              Like?
              { allEntries.like ?
                (
                <input type="checkbox" name='like' defaultValue={'True'} onChange={handleChange} />
                ):(
                <input type="checkbox" name='like' value={'False'} onChange={handleChange} />
                )
              }
              <br />    
              <input type="submit" name='' value="Edit Journal Entry" />
              <button><Link to="/" >Back</Link></button>
          </form>       
      </div>
    )
}

export default UpdateJournal