import React from 'react';

/*
function Playlist(props) {
  const { tracksObject } = props;
  const [playlist, setPlaylist] = useState(tracksObject);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  useEffect(() => {
    setPlaylist(tracksObject);
  }, [tracksObject]);

  const handlePlaylistNameChange = (e) => {
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
        <input id='playlist-name' value={playlistName} onChange={handlePlaylistNameChange} />
        {tracks}
        <button type='submit'>Save Playlist</button>
      </div>
    );
}
*/