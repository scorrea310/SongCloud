import { Modal } from "../../context/Modal";
import { useState, useRef } from "react";
import "./EditModal.css"
import { useDispatch, useSelector } from "react-redux";
import { updateSong } from "../../store/songs";
import { useHistory } from "react-router-dom";
import { deleteSongThunk } from "../../store/songs";
import ImageInputWithPreview from "../ImageInputWithPreview";
import { Bars } from 'react-loader-spinner'
import { pauseSong } from "../../store/currentSong"
import { playSong } from "../../store/currentSong"
import { setCurrentSong } from "../../store/currentSong";
import { useEffect } from "react";

function EditSongFormModal({ song }) {
    const isMounted = useRef(true)
    const dispatch = useDispatch();
    let currentSongPlaying = useSelector(state => state.currentSong);
    const [showModal, setShowModal] = useState(false);


    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [newSong, setNewSong] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [uploadingInProgress, setUploadingInProgress] = useState(false)
    const [src, setSrc] = useState(song.imageUrl)

    useEffect(() => {
        if (isMounted) {
            setTitle(song.title)
            setImage(song.imageUrl)
        }

        return (() => {
            isMounted.current = false
        })
    }, [song]);

    const addSong = (e) => {
        const file = e.target.files[0];
        if (file) setNewSong(file);
        return;
    }

    const toObjectURL = (file) => {

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

    // useEffect(() => {

    // })

    /*
    -make handleSubmit function for Form submission.
    -make song reducer action, thunk, and switch case for editing song.
    -dispatch from here the thunk and pass in new song info.
    -api route for put request where we update item in database.
    */

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (currentSongPlaying.songId === song.id) {
        //     dispatch(pauseSong())
        // }

        setUploadingInProgress(true)
        if (image === null) {
            setImage(song.imageUrl)
        }

        if (newSong === null) {
            setNewSong(song.url)
        }

        setIsLoaded(true)
        let newErrors = [];

        const songInfo = {
            id: song.id,
            title,
            image,
            newSong
        }

        await dispatch(updateSong(songInfo)).then(async (updatedSong) => {



            if (currentSongPlaying.songId === song.id) {

                const newCurrentSong = {
                    artistName: updatedSong.artistName,
                    currentSong: updatedSong.url,
                    isPlayingSong: false,
                    songId: updatedSong.id,
                    songImage: updatedSong.imageUrl,
                    songName: updatedSong.title
                }
                // setUploadingInProgress(false)
                dispatch(setCurrentSong(newCurrentSong))
                // setShowModal(false)
            }


            // setUploadingInProgress(false)

            // setShowModal(true)
        })

        // setShowModal(true)

    };


    const handleDelete = async (e) => {
        e.preventDefault()
        let deleteSong = await dispatch(deleteSongThunk(song.id))
    }

    const handleDeleteImage = (e, i) => {
        e.stopPropagation()
        e.preventDefault()
        setImage(false);
        setSrc(null)
    };

    return (
        <>
            <button className="deleteSongButton" onClick={handleDelete} > Delete</button>
            <button className="editSongButton" onClick={() => setShowModal(true)}>Edit Song</button>
            {showModal && (
                <Modal editForm={true} onClose={() => setShowModal(false)}>
                    <form
                        className="editSongForm"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <div id="editSongText">Edit Song</div>
                        </div>
                        <ImageInputWithPreview
                            index={0}
                            src={src}
                            onChange={updateImages}
                            onClick={handleDeleteImage}
                        />
                        <div className="editSongAndTitleContainer">
                            <label id="title">Title
                                <input value={title} className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label>Song file:
                                <input accept=".mp3,.mp4" className="songInput" type="file" onChange={addSong} />
                            </label>
                        </div>

                        <div className="uploadEditSongButtonContainer">
                            {uploadingInProgress && <Bars color="#f50" height={30} width={30} />}

                            <button type="submit" className="editSongUploadButton">Upload</button>
                        </div>

                    </form>
                </Modal>
            )}
        </>
    );
}

export default EditSongFormModal;