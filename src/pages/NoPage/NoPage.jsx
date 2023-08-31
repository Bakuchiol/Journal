import styles from './NoPage.module.css'

export default function NoPage(){
    return (
        <div className={styles.Error}>
            <h1>** ERROR 404: PAGE NOT FOUND **</h1>
            <p>Go back to the <a href='/'>home page.</a></p>
        </div>
    )
}