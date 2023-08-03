//import logo from './logo.svg';
import React, { useState, useEffect } from 'react'

import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import UserDetail from './Components/UserDetail';
import Spotify from './util/Spotify'

import {sampleResult} from './sample/sampleResult.js';

function App() {

  // The app itself
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [term, setTerm] = useState('');
  const [user, setUser] = useState({});

  // the handler and effects
  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.value);
  }
 
  useEffect(() => {
    setPlaylistTracks(playlistTracks);
  }, [playlistTracks]);

  const handleRemoveTrack = (deletedTrack) => {
    const filteredItems = playlistTracks.filter((item) => item.id !== deletedTrack.id);
    setPlaylistTracks(filteredItems);
  }

  const handleAddTrack = (addedTrack) => {
    if (playlistTracks.some((item) => item.id === addedTrack.id)) return;
    setPlaylistTracks((prevTracks) => [...prevTracks, addedTrack]);
  }

  useEffect(() => {
    Spotify.search(term).then(setSearchResults);
  }, [term]);

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  useEffect(() => {
    Spotify.user().then(setUser);
    console.log(user)
  }, []);

  // Not authenticated yet
  /*
  const loginPage = (
    <>
      <h1>Jammming</h1>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    </>
  );*/
  // The main stuff if it authenticates
  const theRealDeal = (
    <>
      <UserDetail 
        user={user} />
      <SearchBar 
        term={term}
        onSearch={handleTermChange} />
      {/*<TrackList tracks={sampleResult} />*/}
      <div className='Real-thing'>
        <SearchResults 
          searchResults={searchResults}
          onAdd={(e) => handleAddTrack(e, playlistTracks.id)} />
        <Playlist 
          playlistTracks={playlistTracks}
          playlistName={playlistName}
          onNameChange={handlePlaylistNameChange}
          onRemove={(e) => handleRemoveTrack(e, playlistTracks.id)}
          onSave={savePlaylist} />
      </div>
      
    </>
  );
  
  return (
    <div className="App">
      <header>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </header>
      {theRealDeal}
      <footer>
        A Codecademy Project Made By SirParz
        <p>If the search feature is not working, this is because this app is on Development Mode. Reach me out on Discord (@sirparz) to have your search result whitelisted.</p>
      </footer>
    </div>
  );
}

export default App;
