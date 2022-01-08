import LandingNavSection from "./LandingNavSection"
import "./LandingPage.css"

const LandingPage = () => {

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
        </div>
    )
}

export default LandingPage;