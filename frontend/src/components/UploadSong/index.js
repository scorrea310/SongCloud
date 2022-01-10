import "./UploadSong.css"

const UpLoadSong = () => {

    /*
    
    
    */


    return (
        <div className="middleSection">
            <div className="leftImageSection">
                <div className="pianoImage"></div>
            </div>
            <div className="formSection">

                <div className="formContainer">
                    <div className="uploadText">Upload a Song</div>
                    <form className="uploadSongForm">
                        <div className="imageBox">
                            <span>Image</span>
                            <input className="imageInput" type="file" />
                        </div>
                        <div className="songAndTitleContainer">
                            <label id="title">Title
                                <input className="titleInput" type="text" />
                            </label>
                            <label>Song file:
                                <input className="songInput" type="file" />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="rightImage">
                <div className="micImage"></div>
            </div>
        </div>
    )
}


export default UpLoadSong