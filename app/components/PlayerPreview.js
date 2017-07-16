var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

function PlayerPreview(props) {
  return (
    <div>
      <div clasName='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className="username">@{props.username}</h2>
      </div>
      {props.children}
    </div>
)
}
      PlayerPreview.PropTypes = {
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }