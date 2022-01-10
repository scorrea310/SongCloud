import "./UploadSong.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpLoadSong = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null)
    const [song, setSong] = useState(null)
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = [];

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
                    <div className="uploadText">Upload a Song</div>
                    <form className="uploadSongForm">
                        <div className="imageBox">
                            <span>Image</span>
                            <input className="imageInput" type="file" onChange={addImage} />
                        </div>
                        <div className="songAndTitleContainer">
                            <label id="title">Title
                                <input className="titleInput" type="text" />
                            </label>
                            <label>Song file:
                                <input className="songInput" type="file" onChange={addSong} />
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