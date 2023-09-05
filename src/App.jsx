import { useState } from 'react';
import { Routes, Route, Navigate, Link} from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Board from './components/Board/Board';
import CreateEntry from './components/CreateEntry/CreateEntry';
import BoardPage from './pages/BoardPage/BoardPage';
import NoPage from './pages/NoPage/NoPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [entry, setEntry] = useState([]);
  const [photos, setPhotos] = useState([])

  return (
    <main className="App">
        { 
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <MainPage />
          <Routes>
            <Route path="/entries" element={<CreateEntry user={user} setUser={setUser} entry={entry} setEntry={setEntry}/>} />
            <Route exact path="/board" element={<Board photos={photos} user={user} setUser={setUser}/>} />
            <Route path="/board/mood" element={<BoardPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/" />} />
            {/* <Route path="/*" element={<h3>Lavender Journal <Link to="/entries">Lavender Journal</Link></h3>} /> */}
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
