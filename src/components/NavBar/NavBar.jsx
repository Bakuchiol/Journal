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
            <Link to="" onClick={handleLogOut}>
                Log Out
            </Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
        </nav>
        </div>
    )
}