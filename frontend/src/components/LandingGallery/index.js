import SignUpFormModal from "../SignUpformModal"
import "./LandingGallery.css"
import SongCoverPlayPause from "../SongCoverPlayPause"

const LandingGallery = () => {

    const cudi = {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Cudi+Zone.mp3",
        title: "Cudi Zone",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/kid-cudi-man-on-the-moon-album-cover-art-2.jpeg",
        songId: 1,
        artistName: "Kid Cudi"
    }

    const trav = {
        userId: 6,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Travis+Scott+-+90210+ft.+Kacy+Hill+(Audio).mp3",
        title: "90210",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/travis-scott.jpeg",
        songId: 7,
        artistName: "Travis Scott"
    }

    const cudiTwo = {
        userId: 4,
        albumId: null,
        url: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Kid+Cudi+-+Just+What+I+Am+feat+King+Chip+(indicud).mp3",
        title: "Just What I am ",
        imageUrl: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/e6cf8fb555c7d3a3add9bbbabb654891.1000x1000x1.jpg",
        songId: 2,
        artistName: "Kid Cudi"
    }


    return (
        <div className="galleryContainer">
            <div className="discoverNewSongsText">Discover New Songs</div>
            <div className="songImagesContainer">
                <SongCoverPlayPause song={cudi} />
                <SongCoverPlayPause song={trav} />
                <SongCoverPlayPause song={cudiTwo} />
            </div>
        </div>
    )

}


export default LandingGallery