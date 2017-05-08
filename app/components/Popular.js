var React = require('react');

class Popular extends React.component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul>
        {languages.map(function (lang){
          return (
            <li>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Popular;
