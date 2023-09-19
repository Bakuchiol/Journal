import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { format } from "date-fns";
import { useParams } from "react-router-dom";
// import { AppContext } from "../../context/app_context";

import styles from './ReadJournal.module.css'
import closeSVG from '../../icons/cancel.svg'

function ReadJournal() {
  const [allEntries, setAllEntries] = useState('');
  const id = useParams().id;
  // const {count, setCount} = useContext(AppContext)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/entry/entry/${id}`)
      .then((res) => {
        setAllEntries(res.data);
        console.log(res.data)
        // setCount(prev => prev + 1)
      }).catch((err) => {
        console.log(err);
      })
  }, [id]);

  
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Journal}>
        <div className="closeButton">
          <Link to="/">
            <img src={closeSVG} alt="closeButton" />
          </Link>
        </div>
        <div className={styles.container}>
          <div>
            <h2 className="roboto">{allEntries.title}</h2>
          </div>
          <div>
            {/* <p>{format(new Date(allEntries.date), 'MMMM d, y')}</p> */}
          </div>
          <div className={styles.entry}>
            <p>{allEntries.content}</p>
          </div>
          <button>
            <Link to={`/edit/${id}`}>EDIT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadJournal;