(function() {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());

  // Comment: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function show the number of words written by each author. It's called when init admin function is called.
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
})();
