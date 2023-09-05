import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  const [entry, setEntry] = useState([])
  const navigate = useNavigate()

  // const handleAddPost = async (postData, photoData) => {
  //   const newPost = await postService.create(postData, photoData)
  //   setEntry([newPost, ...entry])
  //   navigate('/posts')
  // }

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
