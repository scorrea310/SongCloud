import "./UploadSong.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../../store/songs";
import { allSongsDelete } from "../../store/songs";
import { useHistory } from "react-router-dom";
import ImageInputWithPreview from "../ImageInputWithPreview";
import { Bars } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const UpLoadSong = () => {

    const history = useHistory()


    const [image, setImage] = useState(false)
    const [song, setSong] = useState(null)
    const [errors, setErrors] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [title, setTitle] = useState("");
    const [src, setSrc] = useState(null)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    let userId = user.id

    const loadingIconAndText = (
        <>
            <div>Loading...</div>
            <div className="loading"></div>
        </>
    )

    const toObjectURL = (file) => {
        console.log("hjjjj")
        if (file === null || file === undefined) return
        return URL.createObjectURL(file)
    };

    const updateImages = (e) => {
        e.stopPropagation()



        if (e.target.files[0] === undefined || e.target.files[0] === null) return

        setImage(e.target.files[0])
        setSrc(toObjectURL(e.target.files[0]))
        e.target.value = ''

    };

    const handleDelete = (e, i) => {
        e.stopPropagation()
        e.preventDefault()
        setImage(false);
        setSrc(null)
    };

    const handleSubmit = async (e) => {

        let audioTypes = /(\.|\/)(mp3|mp4)$/i;
        let imageTypes = /(\.|\/)(jpg|jpeg|png)$/i;


        e.preventDefault();

        let newErrors = [];

        if (!image) {
            console.log("no image")
            newErrors.push("you must submit a song cover.")
            setErrors(newErrors)
            return;
        }

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
            setImage(false)
            setSong(null)

            let newSong = await dispatch(createSong(songInfo))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

            if (newSong) {

                history.push("/mysongs")
            }


        } else {
            setErrors(newErrors)
        }


    };

    const addSong = (e) => {
        const file = e.target.files[0];
        if (file) setSong(file);
    }

    const errorsDivAndElements = (
        <div className="errorsDiv"> {errors.map((error) => <div className="errorLi" key={error}>{error}<br></br></div>)} </div>
    )

    const changeTitle = (e) => {
        e.stopPropagation()
        setTitle(e.target.value)


    }

    return (
        <div className="middleSection">
            <div className="leftImageSection">
                <div className="pianoImage"></div>
            </div>
            <div className="formSection">

                <div className="formContainer">

                    <div className="uploadText">Upload a Song</div>


                    <form
                        className="uploadSongForm"
                        onSubmit={handleSubmit}
                    >
                        <div className="songCoverAndTitleParentContainer">
                            <div>
                                <ImageInputWithPreview
                                    index={0}
                                    src={src}
                                    onChange={updateImages}
                                    onClick={handleDelete}
                                />
                            </div>
                            <div className="songTitleAndSongFileContainer">
                                <div className="titleInputContainerUploadSong">
                                    <div className="titleTextContainerUploadSong"><label id="title">Title </label></div>
                                    <input required value={title} className="titleInput" type="text" onChange={changeTitle} />
                                </div>
                                <div className="songAndTitleContainer">
                                    <label className="songFileLabel">Song file:</label>
                                    <input required className="songInput" type="file" accept=".mp3,.mp4" onChange={addSong} />

                                </div>
                            </div>
                        </div>


                        <div className="uploadButtonAndLoadingIcon">
                            {isLoaded ? <div style={{ marginLeft: "0px" }}><Bars color="#f50" height={50} width={50} /></div> : null}
                            <button id="uploadSongButton" type="submit">upload song</button>
                        </div>
                        {errors.length > 0 &&
                            errorsDivAndElements}
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