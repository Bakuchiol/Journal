import All from '../../components/All/All'
import CreateForm from '../../components/CreateForm/CreateForm'
import styles from './MainPage.module.css'

export default function MainPage() {
    return (
        <div className={styles.Wrapper}>
            <h1>Welcome to Your Self-Care Sanctuary</h1>
            <br />
            <div className={styles.flex}>
                <All />
                <CreateForm />
            </div>
            
        </div>
    )
}