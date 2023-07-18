//import logo from './logo.svg';
import React, { useState, useEffect, useCallback } from 'react'

import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import Spotify from './util/Spotify'

import {sampleResult} from './sample/sampleResult.js';

function App() {

  // The app itself
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [term, setTerm] = useState('');

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

  const handleSearch = (e) => {
    e.preventDefault();
    Spotify.search(term).then(setSearchResults);
    setTerm(e.target.value);
  };


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
      <header>
        <h1>Jammming</h1>
      </header>

      <SearchBar 
        term={term}
        onSearch={handleSearch} />
      {/*<TrackList tracks={sampleResult} />*/}
      <SearchResults 
        searchResults={searchResults}
        onAdd={(e) => handleAddTrack(e, playlistTracks.id)} />
      <Playlist 
        playlistTracks={playlistTracks}
        playlistName={playlistName}
        onNameChange={handlePlaylistNameChange}
        onRemove={(e) => handleRemoveTrack(e, playlistTracks.id)} />
    </>
  );

  /*const shit = Spotify.search('dewa 19');
  console.log(shit);*/
  
  return (
    <div className="App">
      {theRealDeal}
    </div>
  );
}

export default App;
