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
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)

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
            setNewSong(song.url)
            setUploadingInProgress(false)
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



        dispatch(updateSong(songInfo)).then(async (updatedSong) => {



            if (currentSongPlaying.songId === song.id) {

                const newCurrentSong = {
                    artistName: updatedSong.artistName,
                    currentSong: updatedSong.url,
                    isPlayingSong: false,
                    songId: updatedSong.id,
                    songImage: updatedSong.imageUrl,
                    songName: updatedSong.title
                }
                setShowEditModal(false)
                dispatch(setCurrentSong(newCurrentSong))

            }

        })

    };


    const handleDelete = async (e) => {

        let resetCurrentSongState = {
            songId: 1,
            currentSong: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Cudi+Zone.mp3",
            songImage: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/kid-cudi-man-on-the-moon-album-cover-art-2.jpeg",
            isPlayingSong: null,
            artistName: "Kid Cudi",
            songName: "Cudi Zone"
        }

        e.preventDefault()

        if (currentSongPlaying.songId === song.id) {
            await dispatch(setCurrentSong(resetCurrentSongState))
        }
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
            <button className="deleteSongButton" onClick={() => setShowDeleteModal(true)} > Delete</button>
            {showDeleteModal && (
                <Modal editForm={true} onClose={() => setShowDeleteModal(false)}>
                    <div className="deleteSongModalMainContent">
                        <div className="areYouSureDeleteTextContainer">Are you sure you want to delete this Song? This action cannot be undone.</div>
                        <div className="deleteAndCancelSongButtonContainer">
                            <div className="confirmDeleteSongbutton" onClick={handleDelete}>Delete</div>
                            <div className="cancel-delete-button" onClick={() => setShowDeleteModal(false)}>Cancel</div>
                        </div>
                    </div>
                </Modal>
            )}
            <button className="editSongButton" onClick={() => setShowEditModal(true)}>Edit Song</button>
            {showEditModal && (
                <Modal editForm={true} onClose={() => setShowEditModal(false)}>
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