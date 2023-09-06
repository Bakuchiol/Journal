import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app_context";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import styles from "./All.module.css"

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
  }, [count]);

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
      <h1>Journal Entries</h1>
      <div>
        <div>
          <Link to="/new">
            Create a New  Journal Entry
          </Link>
        </div>
        <br />
        <div className={styles.container}>
            {
                allEntries ? allEntries.map((post,i) => {
                    return(
                      <div key={i} className={styles.flex}>
                        <div className={styles.test}>
                          <Link to={`/entry/${post._id}`}>
                            <div>
                                <h3>{post.title}</h3>
                                <p>{format(new Date(post.date), 'MMMM d, y')}</p>
                            </div>
                          </Link>
                            <div className={styles.flex}>
                                    <Link to={`/edit/${post._id}`}>
                                      <button>
                                        EDIT
                                      </button>
                                    </Link>
                                <button onClick={(e) => handleDelete(post._id)}>
                                    DELETE
                                </button>
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