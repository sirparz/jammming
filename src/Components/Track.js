import React, { useCallback, useState } from 'react';
import './Track.css';
import DefaultAlbum from './image/no-album.jpg';

function Track(props) {
  const { track } = props;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonStyle = (hoverColor) => {return {
    color: isHover ? hoverColor : 'black',
    cursor: 'pointer',
  }};


  // ADD/REMOVE TRACK
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button 
          className="track-action" 
          onClick={removeTrack}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={buttonStyle("rgb(219, 18, 58)")}>
          –
        </button>
      );
    }
    return (
      <button 
        className="track-action" 
        onClick={addTrack}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle("rgb(54, 181, 40)")}>
        +
      </button>
    );
  };

  // THE MAKING OF IT
  const artists = track.artist
    .map(t => <span>{t}</span>)
    .reduce((prev, curr) => [prev, ', ', curr])
  
  return (
    <div className='album-card'>
      <img 
        className='album-pic' 
        src={track.albumImg ? track.albumImg : DefaultAlbum} 
        alt={track.albumName ? track.albumName : 'Unknown Album'}
      />
      <div className='album-det'>
        <div className='song-title'>
          <p style={{fontWeight: 'bold'}}>{track.title ? track.title : 'Untitled'}</p>
        </div>
        <div>
          <p style={{fontSize: '.75rem'}}><b>{artists}</b>{track.albumName  ? ' • ' + track.albumName : ''}</p>
        </div>
      </div>
      <div className='action-container'>
        {renderAction()}
      </div>
    </div>
  );
}

Track.defaultProps = {
  track: {
    albumName: 'Unknown Album',
    albumImg: DefaultAlbum,
    artist: ['Unknown Artist'],
    title: 'Untitled',
  }
};

export default Track;