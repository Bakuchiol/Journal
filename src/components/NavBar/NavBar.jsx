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
            {user ? (
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
                    &nbsp; | &nbsp;
                    <NavLink to="/board">Work?</NavLink>
                </div>
            ):(
                <div className={styles.nav}>
                    <div className={styles.flex}>
                        {/* <img src="https://images.vexels.com/media/users/3/244181/isolated/preview/1564942e5a77d8de588b8dae34140177-lavender-flowers-color-stroke.png" alt="lavender" className={styles.logo}/> */}
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