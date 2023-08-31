import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user,setUser}) {
    const handleLogOut = () => {
        userService.logOut();
        setUser(null)
    }


    return(
        <nav>
            <Link to="" onClick={handleLogOut}>
                Log Out
            </Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
        </nav>
    )
}