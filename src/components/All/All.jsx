import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app_context";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import styles from "./All.module.css"

import deleteSVG from '../../icons/delete.svg'
import editSVG from '../../icons/edit.svg'

function All() {
  const [allEntries, setAllEntries] = useState("");
  const [removeData, setRemoveData] = useState("");
  const navigate = useNavigate();
  const {count, setCount} = useContext(AppContext)


  const getAllEntries = async () => {
    const response = await axios.get(
      "/api/entry/journal"
    );
    setAllEntries(response.data);
    console.log(response.data);
  };
  
  console.log("checking return, entries: ", allEntries); // SANITY CHECK!! so may errors 😭
  useEffect(() => {
    // setCount(prev => prev + 1)
    getAllEntries();
  }, []);

  const handleDelete = async(id) => {
    const confirmDelete = window.confirm("Are you sure you'd like to delete this entry?");
    if (confirmDelete) {
      try {
        const res = await axios.delete(`/api/entry/delete/${id}`)
        setRemoveData(res.data)
        console.log("delete: ", res.data);
        // navigate("/")
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className={styles.Wrapper}>
      {/* <h1>Journal Records</h1> */}
      <div>
        {/* <div>
          <Link to="/new">
            Create a New  Journal Entry
          </Link>
        </div> */}
        <br />
        <div className={styles.container}>
            {
                allEntries ? allEntries.map((post,i) => {
                    return(
                      <div key={i} className='flex2'>
                        <div className={styles.Card}>
                          <Link to={`/entry/${post._id}`}>
                            <div>
                              { post.image ? (
                                <div className="flex">
                                  <img src={post.image} alt="memory"  className={styles.ImageSize}/>
                                </div>
                              ):(
                                <div className={styles.Image}></div>
                              )
                              }
                              <div className="flex">
                                <div>
                                  <h2 className="roboto">{
                                    post.title.length > 13 ?  post.title.substring(0, 15) + '...' : post.title
                                    }
                                    {/* {post.title.substring(0, 15)+ '...'} */}
                                  </h2>
                                  {/* <h2>{post.title.substring(0, 13)+ '...'}</h2> */}
                                  <p>{format(new Date(post.date), 'MMMM d, y')}</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                            <div className='flex3'>
                                    <Link to={`/edit/${post._id}`}>
                                      <div>
                                        <img src={editSVG} alt="deleteIcon" className={styles.allButton}/>
                                      </div>
                                      {/* <button className={styles.allButton}>
                                        EDIT
                                      </button> */}
                                    </Link>
                                    <img src={deleteSVG} alt="deleteIcon" className={styles.allButton}
                                      onClick={(e) => handleDelete(post._id)}
                                    />
                                {/* <button onClick={(e) => handleDelete(post._id)}>
                                    DELETE
                                </button> */}
                            </div>
                        </div>
                      </div>
                    )
                }):(
                    ""
                )
            }
        </div>
      </div>
    </div>
  );
}

export default All;