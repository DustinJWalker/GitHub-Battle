var React = require('react');
var PropTypes = require('prop-types');


function PlayerPreview(props) {
  return (
    <div>
      <div clasName='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' props.username}
        />
        <h2 className="username">@{props.username}</h2>
      </div>

    </div>
  )
}

PlayerPreview.PropTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.function.isRequired
}
class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event)  {
    var value = event.target.value;
    this.setState(function () {
      return {
        username: value
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render () {
    return (
      <form className='colum' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
          Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propType = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Copmonent {
  constructor() {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }
  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;


    return (
      <div>
        <div className='row'>
            {!playerOneName &&
            <PlayerInput
            id='playerOne'
            label= 'Player One'
            onSubmit={this.handleSubmit}
          />}

            {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label= 'Player Two'
              onSubmit={this.handleSubmit}
            />}
        </div>
      </div>
    )
  }
}
