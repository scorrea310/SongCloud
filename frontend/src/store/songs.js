import { csrfFetch } from "./csrf";

const CREATE_SONG = "songs/CREATE_SONG"
const ALL_DELETE = "songs/ALL_DELETE"
const UPDATE_SONG = "songs/UPDATE_SONG"
const DELETE_SONG = "songs/DELETE_SONG"
const LOAD_USERS_SONGS = "songs/LOAD_USERS_SONGS"
/*--------------------------------------------------------------------*/
//song action creators

const setSong = (song) => ({
    type: CREATE_SONG,
    payload: song,
});

export const allSongsDelete = () => ({
    type: ALL_DELETE,
});



const deleteSong = (id) => ({
    type: DELETE_SONG,
    payload: id
})

const loadSongsAction = (data, id) => ({
    type: LOAD_USERS_SONGS,
    data,
    id
})

/*--------------------------------------------------------------------*/
//thunks

export const createSong = (songInfo) => async (dispatch) => {


    const { userId, albumId, title, image, song } = songInfo

    const formData = new FormData();

    formData.append("userId", userId)
    formData.append("title", title)
    formData.append("albumId", albumId)
    formData.append("files", image)
    formData.append("files", song)

    const res = await csrfFetch('/api/songs', {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData
    })

    const data = await res.json()


    dispatch(setSong(data))

    return data

}



export const updateSong = (songInfo) => async (dispatch) => {
    const { id, title, image, newSong } = songInfo

    const formData = new FormData();

    formData.append("title", title)

    if (typeof image === "string") {
        formData.append("image", image)
    } else {
        formData.append("files", image)
    }

    if (typeof newSong === "string") {
        formData.append("newSong", newSong)
    } else {

        formData.append("files", newSong)
    }


    const res = await csrfFetch(`/api/songs/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData
    })

    const data = await res.json()

    data.artistName = data.User.username

    dispatch(setSong(data))

    return data
}


export const deleteSongThunk = (id) => async (dispatch) => {


    const res = await csrfFetch(`/api/songs/${id}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        const data = await res.json()

        dispatch(deleteSong(id))
    }


}


export const loadUsersSongs = (id) => async (dispatch) => {



    const res = await csrfFetch(`/api/songs/${id}`)


    if (res.ok) {

        const data = await res.json()

        for (let i = 0; i < data.length; i++) {
            data[i].artistName = data[i].User.username
        }

        dispatch(loadSongsAction(data, id))

        return data;
    }


}
/*--------------------------------------------------------------------*/

const initialState = {

};


const songReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case CREATE_SONG:

            newState = { ...state }
            newState[`${action.payload.id}`] = action.payload
            return newState

        case ALL_DELETE:

            const otherState = {
            }
            return otherState;

        case DELETE_SONG:

            const updateState = {
                ...state
            }

            delete updateState[`${action.payload}`]

            return updateState

        case LOAD_USERS_SONGS:
            const newSongs = {};

            action.data.forEach(song => {
                newSongs[song.id] = song;
            })


            return {
                ...newSongs
            }
        default:
            return state;
    }
}


export default songReducer;