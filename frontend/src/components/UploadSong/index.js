import "./UploadSong.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../../store/songs";

const UpLoadSong = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null)
    const [song, setSong] = useState(null)
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    let userId = user.id

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = [];

        const songInfo = {
            userId,
            albumId: null,
            title,
            image,
            song,
        }

        let newSong = await dispatch(createSong(songInfo))

        if (newSong) {
            setTitle("")
            setImage(null)
            setSong(null)

            console.log(newSong)
        }


        /*
    
        TODO: 
        1. Create song reducer, thunk, and action creator. 
        2. dispatch create song action to song reducer.
    
        */

    };

    const addImage = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    }

    const addSong = (e) => {
        const file = e.target.files[0];
        if (file) setSong(file);
    }

    return (
        <div className="middleSection">
            <div className="leftImageSection">
                <div className="pianoImage"></div>
            </div>
            <div className="formSection">

                <div className="formContainer">
                    {errors.length > 0 &&
                        errors.map((error) => <div key={error}>{error}</div>)}
                    <div className="uploadText">Upload a Song</div>
                    <form
                        className="uploadSongForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="imageBox">
                            <span>Image</span>
                            <input className="imageInput" type="file" onChange={addImage} />
                        </div>
                        <div className="songAndTitleContainer">
                            <label id="title">Title
                                <input value={title} className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label>Song file:
                                <input className="songInput" type="file" onChange={addSong} />
                            </label>
                        </div>

                        <button type="submit">Upload Song</button>
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