import All from '../../components/All/All'
import CreateForm from '../../components/CreateForm/CreateForm'
import styles from './MainPage.module.css'

export default function MainPage() {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Header}>
                <h1 className='italiana'>Welcome to Your Self-Care Sanctuary</h1>
            </div>
            <br />
            <div className={styles.flex}>
                <All />
                <CreateForm />
            </div>
            
        </div>
    )
}