import All from '../../components/All/All'
import CreateForm from '../../components/CreateForm/CreateForm'
import styles from './MainPage.module.css'

export default function MainPage() {
    return (
        <div>
            <h1>Main Page ?</h1>
            <div className={styles.flex}>
                <All />
            </div>
            
        </div>
    )
}