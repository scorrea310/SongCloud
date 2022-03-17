import { Modal } from "../../context/Modal";
import { useState } from "react";
import "./EditModal.css"
import { useDispatch, useSelector } from "react-redux";
import { updateSong } from "../../store/songs";
import { useHistory } from "react-router-dom";
import { deleteSongThunk } from "../../store/songs";
import ImageInputWithPreview from "../ImageInputWithPreview";
import { Bars } from 'react-loader-spinner'

function EditSongFormModal({ song }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const [title, setTitle] = useState(song.title);
    const [image, setImage] = useState(song.imageUrl)
    const [newSong, setNewSong] = useState(song.url)
    const [isLoaded, setIsLoaded] = useState(false)
    const [uploadingInProgress, setUploadingInProgress] = useState(false)
    const [src, setSrc] = useState(null)

    const addSong = (e) => {
        const file = e.target.files[0];
        if (file) setNewSong(file);
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

        // setTitle("")
        // setImage(null)
        // setNewSong(null)

        await dispatch(updateSong(songInfo)).then(() => {
            setUploadingInProgress(false)
            setShowModal(false)
        })

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

                        {/* <div className="newImage">
                            <span>Image</span>
                            <input className="imageInput" type="file" onChange={addImage} />
                        </div> */}
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
                                <input className="songInput" type="file" onChange={addSong} />
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