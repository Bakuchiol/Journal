import styles from './Overview.module.css'

export default function Overview(){
    return(
        <div className={styles.Wrapper}>
            <h2 className={styles.title}>Are you ready to embark on a journey of self-discovery and well-being?</h2>
            <p>Introducing the Ultimate Self-Care Journal - Your Path to a Happier, Healthier You! </p>
            <p>Some Benefits of Self-Care Journaling</p>
            <ul className='flex margin'>
                <li>Reduced Stress</li>
                &nbsp; | &nbsp;               
                <li>Improved Well-Being</li>
                &nbsp; | &nbsp;
                <li>Increased Creativity</li>
                &nbsp; | &nbsp;
                <li>Enhanced Self-Awareness</li>
                &nbsp; | &nbsp;
                <li>Better Problem-Solving</li>
                &nbsp; | &nbsp;
                <li>Mindful Practice</li>
            </ul>
        </div>
    )
}