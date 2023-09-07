import { useState } from "react"
import { Link } from "react-router-dom"
// import { AppContext } from '../../context/app_context'
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css'
// import { useContext, useEffect } from "react"

export default function NavBar({user,setUser}) {

    const [scroll, setScroll] = useState(false);

    // let {fetchAffirmations , url} = useContext(AppContext)
    // let {fetchQuotes , url} = useContext(AppContext)

    // useEffect(() => {
    //     fetchAffirmations()
    // }, [fetchAffirmations])

    // useEffect(() => {
    //     fetchQuotes()
    // }, [fetchQuotes])

    const handleLogOut = () => {
        userService.logOut();
        setUser(null)
    }

  // function scroll
  const navScroll = () => {
    if(window.scrollY >= 90) {
      setScroll(true)
    } else{
      setScroll(false)
    }
  }

  window.addEventListener('scroll', navScroll)

    return(
        <div className={ scroll ? styles.navBarBg : styles.NavBarWrapper }>
        <nav>
            {user ? (
                <div className={styles.nav}>
                    <div className={styles.flex}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7194/7194128.png" alt="lavender" className={styles.logo}/>
                        <h3>Lavender Journal</h3>
                    </div>
                    <div>
                        <span className={styles.span}>Welcome, {user.name}</span>
                        &nbsp; | &nbsp;
                        <Link to="/">Home</Link>
                        &nbsp; | &nbsp;
                        <Link to="" onClick={handleLogOut}>
                        Log Out
                        </Link>
                        {/* &nbsp; | &nbsp; */}
                        {/* <Link to="/board"> Mood Board</Link> */}
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
                                {/* {url ? 
                                    (
                                    // <p>{url.affirmation}</p>
                                    <p>{url.content}</p>
                                    ) : (
                                    <p>Loading quote ...</p>
                                    )
                                } */}
                                "Nourish Your Soul with Each Entry"
                            </li>
                            {/* &nbsp; | &nbsp;
                            <li>Link to log in?</li> */}
                        </ul>
                    </div>
                </div>    
            )}
        </nav>
        </div>
    )
}