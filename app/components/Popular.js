var React = require('react');

class SelectLanguage extends React.component {
  render() {
    <ul className= 'languages'>
      {languages.map(function (lang){
        return (
          <li
            style={lang === this.props.selectedLanguage ? {color: red}: null}
            onClick={this.props.onSelect.bind(null, lang)} key={lang}>
            {lang}
          </li>
        )
      }, this)}
    </ul>
  }
}

class Popular extends React.component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (

    )
  }
}

module.exports = Popular;
