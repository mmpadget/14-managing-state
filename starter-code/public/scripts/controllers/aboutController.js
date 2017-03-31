'use strict';

(function(module) {
  const aboutController = {};

  // Comment: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // Hide everything, show the about content. Called in routes.js. It calls "repos.requestRepos()" in "repo.js".
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
