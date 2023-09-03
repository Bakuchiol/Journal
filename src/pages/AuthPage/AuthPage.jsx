import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Landing from '../../components/Landing/Landing';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div className={styles.flex}>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'SIGN UP' : 'LOG IN'}
        </h3>
      </div>
      {showLogin ? (
          <div>
            <a href="/login">is this log in?</a>
            <LoginForm setUser={setUser} />
            <Landing/>
          </div>
        ) : (
            <>
            <a href="/login">is this log in?</a>
            <SignUpForm setUser={setUser} />
            </>
        )}
    </main>
  );
}