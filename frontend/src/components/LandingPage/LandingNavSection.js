import LoginFormModal from "../LoginFormModal"
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./LandingNavSection.css"
import SignUpFormModal from "../SignUpformModal";
import { pauseSong } from "../../store/currentSong"

const LandingNavSection = () => {

    const dispatch = useDispatch()

    const login = (e) => {

        dispatch(pauseSong())

        const loginInfo = {
            credential: 'Demo-lition',
            password: 'password'
        }

        e.preventDefault();
        dispatch(sessionActions.login(loginInfo));
    }


    return (
        <div className="landingNavSection">

            <div className="landingNavBar">
                <div id="iconContainer">
                    <i className="fab fa-soundcloud"></i>
                    <p id="songCloudTex">SongCloud</p>
                </div>
                <div id="landingNavLink">
                    <LoginFormModal />
                    <SignUpFormModal />
                    <button
                        id="demoUserButton"
                        onClick={login}>Demo User</button>
                </div>
            </div>
            <div className="landingNavText">
                <p id="navSectionText"> What's next in music is first &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on SongCloud.</p>
            </div>
        </div>
    )
}


export default LandingNavSection