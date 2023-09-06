import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ReadJournal() {
  const [allEntries, setAllEntries] = useState({});
  const id = useParams().id;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/entry/${id}`)
      .then((res) => {
        setAllEntries(res.data);
      });
  }, []);

  
  return (
    <div>
      <div>
        <h3>Journal Entry</h3>
        <div>
          <div>
            <strong>Title {allEntries.title}</strong>
          </div>
          <div>
            <strong>Content {allEntries.content}</strong>
          </div>
          <button>
            <Link to={`/edit/${id}`}>EDIT</Link>
          </button>
          <br />
          <button>
            <Link to="/">CLOSE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadJournal;