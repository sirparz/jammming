//import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Track from './Components/Track';
import TrackList from './Components/TrackList';
import {sampleResult} from './sample/sampleResult.js';

function App() {
  console.log(sampleResult)
  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
      </header>
      <SearchBar />
      {/*<TrackList tracksObject={sampleResult}/>*/}
      <TrackList tracks={sampleResult} />
    </div>
  );
}

export default App;
