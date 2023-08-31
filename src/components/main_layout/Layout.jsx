import Test from '../Test'
import styles from './layout.module.css'

export default function Layout({children}){
    <div className={styles.Nav}>
        <Test />
        <div>
        {children}
        </div>
    </div>
}