const PLAY_SONG = "currentSong/PLAY_SONG"
const PAUSE_SONG = "currentSong/PAUSE_SONG"

/*--------------------------------------------------------------------*/
// ACTION CREATORS

//play song action creator

export const playSong = (songUrl) => ({
    type: PLAY_SONG,
    payload: songUrl
})

export const pauseSong = () => ({
    type: PAUSE_SONG
})

/*--------------------------------------------------------------------*/



const initialState = {
    currentSong: null,
    isPlayingSong: false
}

const currentSong = (state = initialState, action) => {

    switch (action.type) {
        case PLAY_SONG:
            let new_state = {
                currentSong: action.payload,
                isPlayingSong: true
            }

            return new_state

        case PAUSE_SONG:
            let new_state_again = {
                ...state,
                isPlayingSong: false
            }

            return new_state_again

        default:
            return state
    }

}

export default currentSong