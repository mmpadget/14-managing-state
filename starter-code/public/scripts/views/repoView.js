'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // Comment: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // Empty the list items in UI constant defined above, showing everything, then hiding the siblings of about. Then append the repos that have a name -- each one is being rendered with handlebars.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
