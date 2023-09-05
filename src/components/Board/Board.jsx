import { Link } from "react-router-dom"
import UserLogOut from "../UserLogOut/UserLogOut"
import BoardPage from "../../pages/BoardPage/BoardPage"


export default function Board({photos, user, setUser}) {
    return (
        <div>
            <h1>Vision board/ mood board</h1>
            {/* <div>
                {photos.map(({ photo, _id }) => {
                    return (
                        <div key={_id}>
                            <img src={`/uploads/${photo}`} alt="pic" />
                        </div>
                    )
                })}
            </div> */}
            <BoardPage />
        </div>
    )
}