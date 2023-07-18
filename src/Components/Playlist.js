import React, { useCallback } from 'react';
import TrackList from './TrackList';

function Playlist(props) {
  return (
    <div className="Playlist">
      <input onChange={props.onNameChange} value={props.playlistName} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove} />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;

/*
function Playlist(props) {
  const { tracksObject } = props;
  const [playlist, setPlaylist] = useState(tracksObject);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  useEffect(() => {
    setPlaylist(tracksObject);
  }, [tracksObject]);

  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  function handleDeleteTrack(deletedIndex) {
      const filteredItems = playlist.filter((track, index) => index !== deletedIndex);
      console.log(filteredItems);
      setPlaylist(filteredItems);
    }
    const tracks = playlist.map((item, index) => 
      (<div>
        <Track track={item}/>
        <button onClick={() => handleDeleteTrack(index)}>-</button>
      </div>)
    );
  
    return (
      <div>
        <input id='playlist-name' value={playlistName} onChange={handleNameChange} />
        {tracks}
        <button type='submit'>Save Playlist</button>
      </div>
    );
}
*/