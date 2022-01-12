import "./UploadSong.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../../store/songs";
import { allSongsDelete } from "../../store/songs";
import { useHistory } from "react-router-dom";

const UpLoadSong = () => {

    const history = useHistory()

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null)
    const [song, setSong] = useState(null)
    const [errors, setErrors] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    let userId = user.id

    let loadingIconAndText = (
        <>
            <div>Loading...</div>
            <div className="loading"></div>
        </>
    )


    const handleSubmit = async (e) => {

        let audioTypes = /(\.|\/)(mp3|mp4)$/i;
        let imageTypes = /(\.|\/)(jpg|jpeg|png)$/i;


        e.preventDefault();

        let newErrors = [];

        if (imageTypes.test(image.name) === false) {

            newErrors.push("Image type can only be .jpg, .jpeg, or .png")
        }

        if (audioTypes.test(song.name) === false) {

            newErrors.push("Audio file must be mp3 or mp4 type.")
        }


        if (newErrors.length === 0) {

            setErrors([])
            setIsLoaded(true)

            const songInfo = {
                userId,
                albumId: null,
                title,
                image,
                song,
            }
            setTitle("")
            setImage(null)
            setSong(null)

            let newSong = await dispatch(createSong(songInfo))
            // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) setErrors(data.errors);
            // });

            if (newSong) {

                history.push("/mysongs")
            }


        } else {
            setErrors(newErrors)
        }


    };

    const addImage = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    }

    const addSong = (e) => {
        const file = e.target.files[0];
        if (file) setSong(file);
    }

    const errorsDivAndElements = (
        <div className="errorsDiv"> {errors.map((error) => <div className="errorLi" key={error}>{error}<br></br></div>)} </div>
    )

    return (
        <div className="middleSection">
            <div className="leftImageSection">
                <div className="pianoImage"></div>
            </div>
            <div className="formSection">

                <div className="formContainer">
                    {errors.length > 0 &&
                        errorsDivAndElements}
                    <div className="uploadText">Upload a Song</div>
                    <form
                        className="uploadSongForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="imageBox">
                            <span>Image</span>
                            <input className="imageInput" type="file" onChange={addImage} required />
                        </div>
                        <div className="songAndTitleContainer">
                            <label id="title">Title
                                <input required value={title} className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label>Song file:
                                <input required className="songInput" type="file" onChange={addSong} />
                            </label>
                        </div>
                        <div className="uploadButtonAndLoadingIcon">
                            {isLoaded ? loadingIconAndText : null}
                            <button id="uploadSongButton" type="submit">Upload Song</button>
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