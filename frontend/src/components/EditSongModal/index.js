import { Modal } from "../../context/Modal";
import { useState } from "react";
import "./EditModal.css"

function EditSongFormModal({ song }) {
    const [showModal, setShowModal] = useState(false);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null)
    const [newSong, setNewSong] = useState(null)

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



    return (
        <>
            <button className="editSongButton" onClick={() => setShowModal(true)}>Edit Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <form
                        className="editSongForm"
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