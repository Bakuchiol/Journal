import All from '../../components/All/All'
import styles from './MainPage.module.css'

export default function MainPage() {
    return (
        <div>
            <h1>Welcome to Your Self-Care Sanctuary</h1>
            <br />
            <div className={styles.flex}>
                <All />
            </div>
            
        </div>
    )
}