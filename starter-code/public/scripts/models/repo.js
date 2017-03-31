'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // Comment: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function is making an AJAX request to get our repositories. It's called in "aboutController.js".
  // It's calling "repoView.index" in "aboutController.js" once it gets a response back from the server (around line 35) of server.js. Sending a request that's received by the server route app.get('/github/*', proxyGitHub);
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
