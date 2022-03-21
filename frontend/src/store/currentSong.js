const PLAY_SONG = "currentSong/PLAY_SONG"
const PAUSE_SONG = "currentSong/PAUSE_SONG"
const SET_SONG = "currentSong/SET_SONG"
/*--------------------------------------------------------------------*/
// ACTION CREATORS

//play song action creator

export const playSong = (song) => ({
    type: PLAY_SONG,
    payload: song
})

export const pauseSong = () => ({
    type: PAUSE_SONG
})

export const setCurrentSong = (newCurrentSong) => ({
    type: SET_SONG,
    payload: newCurrentSong
})

/*--------------------------------------------------------------------*/


const initialState = {
    songId: 1,
    currentSong: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/Cudi+Zone.mp3",
    songImage: "https://songcloud-song-images.s3.us-west-1.amazonaws.com/kid-cudi-man-on-the-moon-album-cover-art-2.jpeg",
    isPlayingSong: null,
    artistName: "Kid Cudi",
    songName: "Cudi Zone"
}

const currentSong = (state = initialState, action) => {

    switch (action.type) {
        case PLAY_SONG:
            let new_state = {
                songId: action.payload.songId,
                currentSong: action.payload.currentSong,
                songImage: action.payload.songImage,
                isPlayingSong: true,
                artistName: action.payload.artistName,
                songName: action.payload.songName
            }

            return new_state

        case PAUSE_SONG:
            let new_state_again = {
                ...state,
                isPlayingSong: false
            }

            return new_state_again

        case SET_SONG:

            return action.payload
        default:
            return state
    }

}

export default currentSong