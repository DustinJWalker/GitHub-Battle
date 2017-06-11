vat axios = require('axios');

var id = "Your_client_id";
var sec = "Your_secret_id";
var params= "?clent_id=" +id+ "&client_secret" + sec;

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then(function (user) {
      return user.data;
    });
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' +username + '/repos' + params +
  '&per_page=100')
}

function getStarCount (repos) {
  return repos.data.reduce(function(count, repo) {
    return count + repo.stargazers_count;
  }, 0)
}

function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return(followers * 3) + totalStars;
}

function handleError (error) {
  console.warn(error);
  return null;
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
