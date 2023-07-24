import React, { useCallback } from 'react';
import TrackList from './TrackList';
import './Playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist">
      <div className="Playlist-name">
        <input onChange={props.onNameChange} value={props.playlistName} />
      </div>
      <div className="Track-thingy">
        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
          className="TrackList" />
      </div>
      <div className="Save-it">
        <button className="Playlist-save" onClick={props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
      
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