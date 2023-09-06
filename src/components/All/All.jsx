import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./All.module.css"

function All() {
  const [allEntries, setAllEntries] = useState("");
  const [removeData, setRemoveData] = useState("");
  const navigate = useNavigate();

  const getAllServices = async () => {
    const response = await axios.get(
      "/api/entry/journal"
    );
    setAllEntries(response.data);
    console.log(response.data);
  };

  console.log("checking return, entries: ", allEntries); // SANITY CHECK!! so may errors 😭
  useEffect(() => {
    getAllServices();
  }, []);

  const handleDelete = async(id) => {
    const confirmDelete = window.confirm("Confirm Delete");
    if (confirmDelete) {
      try {
        const res = await axios.delete(`/api/entry/delete/${id}`)
        setRemoveData(res.data)
        navigate("/")
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h1>Journal Entries</h1>
      <div>
        <div>
          <Link to="/new">
            Create a New Entry
          </Link>
        </div>
        <br />
        <div>
            {
                allEntries ? allEntries.map((post,i) => {
                    return(
                      <div key={i} className={styles.flex}>
                        <div>
                          <Link to={`/entry/${post._id}`}>
                            <div className={styles.flex}>
                                <h3>{post.title}</h3>
                            </div>
                          </Link>
                            <div>
                                <button>
                                    <Link to={`/edit/${post._id}`}>EDIT</Link>
                                </button>
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