import ProfileButton from "../Navigation/ProfileButton"
import { NavLink } from "react-router-dom"

const HomePage = ({ user }) => {

    /*
    show logout button as well.
    */
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <ProfileButton user={user} />
        </div>
    )
}

export default HomePage