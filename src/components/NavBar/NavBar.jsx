import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar({user,setUser}) {

    const handleLogOut = () => {
        userService.logOut();
        setUser(null)
    }

    return(
        <div className={styles.NavBarWrapper}>
        <nav>
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>
                Log Out
            </Link>
            &nbsp; | &nbsp;
            <Link to="/board"> Mood Board</Link>
            &nbsp; | &nbsp;
            <NavLink to="/board">Work?</NavLink>
        </nav>
        </div>
    )
}