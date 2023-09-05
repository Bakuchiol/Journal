import { useEffect, useState } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import axios from 'axios';
import Board from './components/Board/Board';

function App() {
  const [user, setUser] = useState(getUser());
  const [entry, setEntry] = useState([]);
  const [photos, setPhotos] = useState([])
  const [update, setUpdate] = useState('')

  useEffect(()=>{
    axios.get('/api/get') // correct path?
      .then((res) => {
        console.log("res data: ", res.data)
        setPhotos(res.data)
      })
      .catch((err) => console.log(err))
  }, [update])

  return (
    <main className="App">
        { 
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <MainPage />
          <Routes>
            <Route
              path="/entries" 
              user={user} 
              setUser={setUser} 
              entry={entry} 
              setEntry={setEntry}
            />
            <Route path="/board" element={<Board photos={photos}/>} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
          <>
            <AuthPage setUser={setUser}/>
          </>
        }
    </main>
  );
}

export default App;
