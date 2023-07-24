import React from 'react';
import './UserDetail.css';
import blankPfp from './image/blank-pfp.jpg';

function UserDetail(props) {
  const pfp = props.user.images ? props.user.images[1].url : blankPfp;

  const loginScreen = (
    <button onClick={props.onLogin}>LOGIN WITH SPOTIFY</button>
  );

  const userDetail = (
    <>
      <div className='User-image'>
        <img src={pfp} />
      </div>
      <div className='User-name'>
        <h3>{props.user.display_name}</h3>
        <p>{props.user.id}</p>
      </div>
      
    </>
  );

  return (
    <div className='User-detail'>
      {props.user ? userDetail : loginScreen}
    </div>
  )
}

export default UserDetail;

/*
.Playlist-save {
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  cursor: pointer;
  width: 10rem;
  padding: .77rem 0;
  border-radius: 54px;
  border-width: 0px;
  margin-top: 1.27rem;
  background-color: #6c41ec;
  text-align: center;
  font-size: .83rem;
  transition: background-color .25s;
  color: #fff;
  font-weight: 500;
  transition: .25s;
}

.Playlist-save:hover {
  background-color: rgba(108, 65, 233, .7);
}
*/