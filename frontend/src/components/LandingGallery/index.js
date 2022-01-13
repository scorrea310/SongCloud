import SignUpFormModal from "../SignUpformModal"
import "./LandingGallery.css"


const LandingGallery = () => {

    return (
        <div className="galleryContainer">
            <div className="discoverNewSongsText">Discover New Songs</div>
            <div className="songImagesContainer">
                <div className="artPiece">
                    <img className="songCover beverly" src="https://songcloud-song-images.s3.us-west-1.amazonaws.com/travis-scott.jpeg" alt=""></img>
                    <div className="travisScottText"> 90210 </div>
                    <div className="travisScottText"> Travis Scott </div>
                </div>
                <div className="artPiece">
                    <img className="songCover" src="https://songcloud-song-images.s3.us-west-1.amazonaws.com/e6cf8fb555c7d3a3add9bbbabb654891.1000x1000x1.jpg" alt=""></img>
                    <div className="kidCudiText"> Just What I am </div>
                    <div className="kidCudiText"> Kid Cudi </div>
                </div>
                <div className="artPiece">
                    <img className="songCover" src=' https://songcloud-song-images.s3.us-west-1.amazonaws.com/kid-cudi-man-on-the-moon-album-cover-art-2.jpeg' alt=""></img>
                    <div className="kidCudiText"> Cudi Zone </div>
                    <div className="kidCudiText"> Kid Cudi </div>
                </div>
            </div>
            <div className="discoverSongsSignUp">
                <SignUpFormModal />
            </div>
        </div>
    )

}


export default LandingGallery