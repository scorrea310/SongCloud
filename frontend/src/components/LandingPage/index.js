import LandingNavSection from "./LandingNavSection"
import "./LandingPage.css"
import LandingGallery from "../LandingGallery"
import { useHistory } from "react-router-dom"
import AudioPlayer from "../AudioPlayer"
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
            <div className="aboutInfo">
                <div className="techUsed"> Technologies Used </div>
                <div className="iconContainer">
                    <div className="logoAndTextContainer">
                        <i className="fab fa-js" id="jsLogo"></i>
                        <p>Javascript</p>
                    </div>
                    <div className="logoAndTextContainer">
                        <i className="fab fa-react" id="reactIcon"></i>
                        <p> React </p>
                    </div>
                    <div className="logoAndTextContainer postgress" >
                        <i className="fas fa-database" id="postgres"></i>
                        <p id="postgressText"> postgres </p>
                    </div>
                    <div className="logoAndTextContainer">
                        <i className="fab fa-html5" id="htmlLogo"></i>
                        <p> HTML </p>
                    </div>
                    <div className="logoAndTextContainer">
                        <i className="fab fa-css3-alt" id="cssLogo"></i>
                        <p> CSS </p>
                    </div>
                    <div id="reduxLogoContainer">
                        <div className="reduxLogo"></div>
                        <p> Redux </p>
                    </div>
                </div>
                <div className="githubAndLinkin">
                    <div className="lineBreaker">

                    </div>
                    <div className="helloWorld"> _hello world I made this site with love.</div>
                </div>

            </div>
            <div className="githubAndLinkedinContainer">
                <a href="https://www.linkedin.com/in/steve-correa/"><i className="fab fa-linkedin" id="linkedin"></i></a>
                <a href="https://github.com/scorrea310"><i className="fab fa-github" id="github" ></i></a>

            </div>
            <div id="steveText">Steve Correa</div>
        </div>
    )
}

export default LandingPage;