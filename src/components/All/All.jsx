import React, { useEffect, useState } from "react";
import axios from "axios"; // React Library Used to send and receive data from Backend
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

  console.log("checking return", allEntries);
  useEffect(() => {
    getAllServices();
  }, []);

  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");
    if (confirm) {
      axios
        .delete("/api/entry/delete/" + _id)
        .then((res) => {
          setRemoveData(res.data);
        })
        .catch((err) => console.log(err));
    }
    navigate("/journal");
  };

  return (
    <div>
      <h1>All Entries</h1>
      <div>
        <div>
          <Link to="/new">
            Create a New Entry
          </Link>
        </div>

        {/* ------------ */}
        <div>
            {
                allEntries ? allEntries.map((post,i) => {
                    return(
                        <div key={i}>
                            <div>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <p>{post.like}</p>
                            </div>
                            <div>
                                <button>
                                    <Link to={`/edit/${post._id}`}>EDIT</Link>
                                </button>
                                <button>
                                    <Link to={`/entry/${post._id}`}>READ</Link>
                                </button>
                                <button onClick={(e) => handleDelete(post._id)}>
                                    DELETE
                                </button>
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