import { csrfFetch } from "./csrf";

/*--------------------------------------------------------------------*/
//constants
const LOAD_SONGS = "allSongs/LOAD_SONGS"



/*--------------------------------------------------------------------*/
//Action Creators
const loadSongsActionCreator = (allSongs) => ({
    type: LOAD_SONGS,
    payload: allSongs,
});



/*--------------------------------------------------------------------*/
//Thunks

export const loadSongsThunk = () => async (dispatch) => {

    const res = await csrfFetch("/api/songs")

    if (res.ok) {
        const allSongs = await res.json()
        dispatch(loadSongsActionCreator(allSongs))
    } else {
        console.log("something went wrong in load Songs Thunk .")
    }
}

/*--------------------------------------------------------------------*/
//Reducer

const initialState = {

};

const allSongsReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_SONGS:

            return action.payload;
        default:
            return state;
    }
}


export default allSongsReducer;