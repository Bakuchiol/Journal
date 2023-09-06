import styles from  './Footer.module.css'


export default function Footer() {
    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.footerText}>
                <h3>Get Started Today!</h3>
                <p>
                    Join countless of others who have unlocked
                    the benefits of self-care journaling.
                    <br/>
                    Start your journey to a happier, healthier you now!
                    <br />
                    Get your Self-Care Journal today and embrace the magic of self-discovery!
                </p>
                {/* <img src="https://images.vexels.com/media/users/3/240364/isolated/preview/f49352bbcf63fe58118979267aa43313-cute-lavender-flower-flat.png" alt="lavender" className={styles.border}/> */}
                <p>
                </p>
                <ul className={styles.list}>
                    <li>MOD 3 MERN CRUD</li>
                    &nbsp; | &nbsp;
                    <li>
                        <a href="https://github.com/Bakuchiol/Journal" target='_blank' rel='noreferrer'>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" className={styles.github}/>
                        </a>
                    </li>
                    &nbsp; | &nbsp;
                    <li>Images credited to their respective owners.</li>
                </ul>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/7194/7194128.png" alt="logo" className={styles.logo}/>
            </div>
        </div>
    )
}