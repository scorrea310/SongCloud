import ProfileButton from "../Navigation/ProfileButton"
import { NavLink } from "react-router-dom"
import "./HomeNavBar.css"

const HomeNavBar = ({ user }) => {
    return (
        <nav className="homeNavBar">
            <div className="middleSectionNav">
                <div id="leftNavSection">
                    <div id="navIcon">
                        <i className="fab fa-soundcloud"></i>
                    </div>
                    <NavLink className="homeButton" exact to="/">Home</NavLink>
                </div>
                <div id="songCloud">SongCloud</div>
                <div className="rightSection">
                    <NavLink className="uploadButton" exact to="/upload">Upload</NavLink>
                    <div id="profileButtonContainer">
                        <ProfileButton user={user} />
                    </div>
                </div>
            </div>
        </nav>
    )
}




export default HomeNavBar;