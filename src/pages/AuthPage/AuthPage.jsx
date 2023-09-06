import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Landing from '../../components/Landing/Landing';
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar';
import Overview from '../../components/Overview/Overview';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <NavBar />
      {showLogin ? (
        <div className={styles.MainWrap}>
          <div>
            <Landing />
          </div>
          <div>
            <LoginForm setUser={setUser} />
            <div className={styles.subTitle}>
              <div onClick={() => setShowLogin(!showLogin)} className={styles.hover}>
                {showLogin ? "Don't have an account? SIGN UP" : 'Already have an account? LOG IN'}
              </div>
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
                  <p onClick={() => setShowLogin(!showLogin)} className={styles.hover}>
                    {showLogin ? "Don't have an account? SIGN UP" : 'Already have an account? LOG IN'}
                  </p>
                </div>
              </div>
          </div>
        )}
          <div>
            <Overview />
            <Footer />
          </div>
    </main>
  );
}