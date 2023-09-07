import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../context/app_context";
import * as entryService from '../../utilities/entry-service';
import axios from 'axios';
import styles from './UpdateJournal.module.css'

import exit from '../../icons/cancel.svg'

function UpdateJournal() {
  const [allEntries, setAllEntries] = useState({
    _id:"",
    title:"",
    content:"",
  });
  const id = useParams().id;
  const navigate = useNavigate();
  // const {count, setCount} = useContext(AppContext)

  const handleChange = (e) => {
    setAllEntries({
      ...allEntries,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async(e) =>  {
  e.preventDefault()
  try {
    const newEditData = {...allEntries};

    // const res = await axios.put(`/api/entry/edit/${id}`, newEditData)
    // const res = await axios.put("/api/entry/entry/edit/:id", newEditData)
    const res = await entryService.editEntry(newEditData)
    // entryService.editEntry(newEditData)
   console.log("res from update", res)
   navigate('/')
    window.location.reload();
  } catch(err) {
    setAllEntries({...allEntries, error: 'Unable to Edit, Try Again Later'})
  }
}

useEffect(() => {
   axios.get(`/api/entry/entry/${id}`)
   .then(
    res => {setAllEntries(res.data)
      // setCount(prev => prev + 1)
    }
  );
}, []);
  
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Container}>
          <Link to='/'>
            <div className="closeButton">
              <img src={exit} alt="close icon" />
            </div>
          </Link>
          <h1>Edit Journal Entry</h1>
           <form onSubmit={handleSubmit} action={`/update/submit/${id.id}?_method=PUT`} method='POST' >
              Title
              <input type="text" name='title' value={allEntries.title}  onChange={handleChange} />
              <br />
              Content
              <input type="text" name='content' value={allEntries.content} onChange={handleChange} />
              <br />
              Image
              <input type="text" name='image' value={allEntries.image} onChange={handleChange} placeholder="img url"/>
              <br />
              <div className="flex3">
                <input type="submit" name='' value="Submit Changes" />
                {/* <button className="closeButton"><Link to="/">CLOSE</Link></button> */}
              </div>  
          </form>
        </div>       
      </div>
    )
}

export default UpdateJournal