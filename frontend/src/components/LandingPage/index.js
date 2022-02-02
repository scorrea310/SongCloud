import LandingNavSection from "./LandingNavSection"
import "./LandingPage.css"
import LandingGallery from "../LandingGallery"
import { useHistory } from "react-router-dom"
import AudioPlayer from "../AudioPlayer"
import SignUpFormModal from "../SignUpformModal"
const LandingPage = () => {

    const history = useHistory()

    /*
    1. include LandingNavSection component as first child of LandingPage ✅
    2. Create Demo user functionality ✅
    3. Style LandingNavSection section TODO:
    4. include SongGallery component as second child of LandingPage
    5. then, manually add JSX (not a component) for Calling Creators section.
    6.Last, manually add JSX for footer and include login and Sing up buttons there. 
     */
    return (
        <div className="LandingPage">
            <LandingNavSection />
            <LandingGallery />
            <div className="devicesContainer">
                <div className="devicesImage">
                </div>
                <div className="listeningText">
                    Listen anywhere
                    <div className="coloredUnderline"></div>
                </div>

            </div>
            {/* <div className="githubAndLinkedinContainer">
                <a href="https://www.linkedin.com/in/steve-correa/"><i className="fab fa-linkedin" id="linkedin"></i></a>
                <a href="https://github.com/scorrea310"><i className="fab fa-github" id="github" ></i></a>

            </div>
            <div id="steveText">Steve Correa</div> */}
            <div className="creatorSection">
                <p id="getOnSoundCloud">Get on SongCloud to connect with fans and share your sounds.</p>
                <p id="whatAreYouText"> What are you waiting for?</p>
                <SignUpFormModal />
            </div>
        </div>
    )
}

export default LandingPage;