import LandingNavSection from "./LandingNavSection"

const LandingPage = () => {

    /*
    1. include LandingNavSection component as first child of LandingPage ✅
    2. Create Demo user functionality 
    3. include SongGallery component as second child of LandingPage
    4. then, manually add JSX (not a component) for Calling Creators section.
    5.Last, manually add JSX for footer and include login and Sing up buttons there. 
     */
    return (
        <div>
            Landing Page

            <LandingNavSection />
        </div>
    )
}

export default LandingPage;