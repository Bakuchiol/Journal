import styles from  './Footer.module.css'


export default function Footer() {
    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.footerText}>
                <h2 className='beth'>Get Started Today!</h2>
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
                    <li>
                        <a href="https://github.com/Bakuchiol/Journal" target='_blank' rel='noreferrer'>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" className={styles.github}/>
                        </a>
                    </li>
                    &nbsp; | &nbsp;
                    <li>Lavender Journal</li>
                    &nbsp; | &nbsp;
                    <li>
                        <a href="https://www.figma.com/file/DqwD7UkKCfZZ94OJpC739F/MERN-Journal?type=whiteboard&node-id=0%3A1&t=Fkl5hq2017aoNb8R-1" target='_blank' rel='noreferrer'>
                            <img src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png" alt="figma" className={styles.figma}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/7194/7194128.png" alt="logo" className={styles.logo}/>
            </div>
        </div>
    )
}