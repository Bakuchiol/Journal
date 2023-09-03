import styles from './Landing.module.css'

export default function Landing() {
    return (
        <div className={styles.LandingWrapper}>
            <h1>Landing Page here</h1>
            <p>inside main page PAGE</p>
            <a href="/">Where does this lead?</a>
            <a href="/login">is this log in?</a>
        </div>
    )
}