import { csrfFetch } from "./csrf";

const CREATE_SONG = "songs/CREATE_SONG"

/*--------------------------------------------------------------------*/
//song action creators

const setSong = (song) => ({
    type: CREATE_SONG,
    payload: song,
});

/*--------------------------------------------------------------------*/


/*--------------------------------------------------------------------*/
//thunks

export const createSong = (songInfo) => async (dispatch) => {

    console.log(songInfo);

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

    console.log(">>>>>>>>>>>>>>>>.", data)

    dispatch(setSong(data))

    return data

}



/*--------------------------------------------------------------------*/



const initialState = {
    songs: null
};


const songReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case CREATE_SONG:
            newState = Object.assign({}, state)
            newState[`${action.payload.id}`] = action.payload
            return newState

        default:
            return state;
    }
}


export default songReducer;