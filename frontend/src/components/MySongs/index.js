import PlaySong from "../PlaySong";

const MySongs = () => {

    /*
    
    -loop through songs in redux store and make a song component for each song.
    
    */


    return (<div style={{ width: "400px", height: '500px' }}>
        <PlaySong />
    </div>)
}


export default MySongs;