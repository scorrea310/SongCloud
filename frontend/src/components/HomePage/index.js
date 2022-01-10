import ProfileButton from "../Navigation/ProfileButton"
import { NavLink } from "react-router-dom"
import HomeNavBar from "../HomeNavBar"

const HomePage = ({ user }) => {

    /*
    display navBar components and other homePage components here
    */
    return (
            <HomeNavBar user={user} />
        
    )
}

export default HomePage