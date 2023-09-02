import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage'
import NavBar from './components/NavBar/NavBar';
import './App.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
        { 
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <MainPage />
          <Routes>
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
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
