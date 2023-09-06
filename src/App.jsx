import { useState } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import ReadJournal from './components/ReadJournal/ReadJournal';
import UpdateJournal from './components/UpdateJournal/UpdateJournal';
import All from './components/All/All';
import CreateForm from './components/CreateForm/CreateForm';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        { 
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <MainPage />
          <Routes>
            {/* <Route path="/" element={<All />} /> */}
            <Route path="/new" element={<CreateForm />}/>
            <Route path="/entry/:id" element={<ReadJournal />} />
            <Route path="/edit/:id" element={<UpdateJournal />} />
            {/* paths idk */}
            {/* <Route exact path="/board" element={<Board photos={photos} setPhotos={setPhotos} user={user} setUser={setUser}/>} /> */}
            {/* <Route path="/board/mood" element={<BoardPage />} /> */}
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