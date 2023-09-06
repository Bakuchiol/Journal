import styles from './Overview.module.css'

export default function Overview(){
    return(
        <div className={styles.Wrapper}>
            <h3>Are you ready to embark on a journey of self-discovery and well-being?</h3>
            <br />
            <p>Introducing the Ultimate Self-Care Journal - Your Path to a Happier, Healthier You! </p>
            <br />
            <p>Some Benefits of Self-Care Journaling</p>
            <ul>
                <li>Reduced Stress</li>
                <li>Improved Well-Being</li>
                <li>Increased Creativity</li>
                <li>Enhanced Self-Awareness</li>
                <li>Better Problem-Solving</li>
                <li>Mindful Practice</li>
            </ul>
        </div>
    )
}