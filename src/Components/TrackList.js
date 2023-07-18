import React, { useState, useEffect } from 'react';
import Track from './Track';
import './TrackList.css';

function TrackList(props) {
  const { tracks } = props;

  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;