import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css'

export default function NavBar({user,setUser}) {

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
                        <h4>Lavender Journal</h4>
                    </div>
                    <div>
                        <span>Welcome, {user.name}</span>
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
                        <span>Hello</span>
                    </div>
                </div>    
            )}
        </nav>
        </div>
    )
}