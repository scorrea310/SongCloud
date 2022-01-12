import { Modal } from "../../context/Modal";
import { useState } from "react";
import "./EditModal.css"
import { useDispatch, useSelector } from "react-redux";
import { updateSong } from "../../store/songs";
import { useHistory } from "react-router-dom";

function EditSongFormModal({ song }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null)
    const [newSong, setNewSong] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const addImage = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    }

    const addSong = (e) => {
        const file = e.target.files[0];
        if (file) setNewSong(file);
    }


    /*
    -make handleSubmit function for Form submission.
    -make song reducer action, thunk, and switch case for editing song.
    -dispatch from here the thunk and pass in new song info.
    -api route for put request where we update item in database.
    */

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoaded(true)
        let newErrors = [];

        const songInfo = {
            id: song.id,
            title,
            image,
            newSong
        }

        let updatedSong = await dispatch(updateSong(songInfo))

        console.log(updatedSong, "9999999999")

        if (updatedSong) {
            setTitle("")
            setImage(null)
            setNewSong(null)

            console.log("does this owkr!!!!!")
            setTimeout(() => {
                history.push("/mysongs")
            }, 5000)


        }

    };



    return (
        <>
            <button className="editSongButton" onClick={() => setShowModal(true)}>Edit Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <form
                        className="editSongForm"
                        onSubmit={handleSubmit}
                    >
                        <div id="editSongText">Edit Song</div>

                        <div className="newImage">
                            <span>Image</span>
                            <input className="imageInput" type="file" onChange={addImage} />
                        </div>
                        <div className="editSongAndTitleContainer">
                            <label id="title">Title
                                <input value={title} className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label>Song file:
                                <input className="songInput" type="file" onChange={addSong} />
                            </label>
                        </div>

                        <button type="submit">Upload</button>
                    </form>
                </Modal>
            )}
        </>
    );
}

export default EditSongFormModal;