import { Link } from "react-router-dom"
import { AppContext } from '../../context/app_context'
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css'
import { useContext, useEffect } from "react"

export default function NavBar({user,setUser}) {

    let {fetchAffirmations} = useContext(AppContext)
    let { url } = useContext(AppContext)

    useEffect(() => {
        fetchAffirmations()
    }, [])

    const handleLogOut = () => {
        userService.logOut();
        setUser(null)
    }

    return(
        <div className={styles.NavBarWrapper}>
        <nav>
            {user ? (
                <div className={styles.nav}>
                    <div className={styles.flex}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7194/7194128.png" alt="lavender" className={styles.logo}/>
                        <h3>Lavender Journal</h3>
                    </div>
                    <div>
                        <span>Welcome, {user.name}</span>
                        &nbsp; | &nbsp;
                        <Link to="/">Home</Link>
                        &nbsp; | &nbsp;
                        <Link to="" onClick={handleLogOut}>
                        Log Out
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to="/board"> Mood Board</Link>
                    </div>
                </div>
            ):(
                <div className={styles.nav}>
                    <div className={styles.flex}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7194/7194128.png" alt="lavender" className={styles.logo}/>
                        <h4>Lavender Journal</h4>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            <li className={styles.quote}>
                                {url}
                            </li>
                            &nbsp; | &nbsp;
                            <li>About</li>
                            &nbsp; | &nbsp;
                            <li>Resources</li>
                        </ul>
                    </div>
                </div>    
            )}
        </nav>
        </div>
    )
}