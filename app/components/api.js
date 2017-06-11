vat axios = require('axios');

var id = "Your_client_id";
var sec = "Your_secret_id";
var params= "?clent_id=" +id+ "&client_secret" + sec;

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
}
module.exports = {
  battle: functions (players) {

  },
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodedURI(

    );
    return axios.get(encodedURI)
    .then(function(response) {

    })
  }
}
