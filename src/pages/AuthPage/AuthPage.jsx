import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Landing from '../../components/Landing/Landing';
import Footer from '../../components/Footer/Footer'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      {showLogin ? (
        <div className={styles.MainWrap}>
          <div>
            <Landing />
          </div>
          <div>
            <LoginForm setUser={setUser} />
            <div className={styles.subTitle}>
              <p onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? "Don't have an account? SIGN UP" : 'Already have an account? LOG IN'}
              </p>
            </div>
          </div>
        </div>
        ) : (
          <div className={styles.MainWrap}>
              <div>
                <Landing />
              </div>
              <div>
                <SignUpForm setUser={setUser} />
                <div className={styles.subTitle}>
                  <p onClick={() => setShowLogin(!showLogin)}>
                    {showLogin ? "Don't have an account? SIGN UP" : 'Already have an account? LOG IN'}
                  </p>
                </div>
              </div>
          </div>
        )}
          <div>
            <Footer />
          </div>
    </main>
  );
}