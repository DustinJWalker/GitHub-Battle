var React = require('react');

class Battle extends React.Copmonent {
  constructor() {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
  }
  render() {
    return (
      <div>
        Battle!
      </div>
    )
  }
}
