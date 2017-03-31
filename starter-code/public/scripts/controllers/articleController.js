'use strict';

(function(module) {
  const articleController = {};

  // Comment: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // When "page('/about', aboutController.index);" is called in "routes.js". If we pass in parameter ctx, it passes ctx.article when it calls article view. Initializing the article view. ctx allows us to pass different arrays and objects.
  articleController.index = (ctx) => articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = article => {
      ctx.articles = article; // This is holding all of our articles.
      next();
    };

  // Comment: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // When this function is called it send a get request that is intercepted by routes.js "page('/article/:article_id'" Before it returns, it calls "articleController.loadById" and  "articleController.index".
    Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  // REVIEW: Middleware for loading up articles by a certain author:
  articleController.loadByAuthor = (ctx, next) => {
    let authorData = articlesByAuthor => {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // REVIEW: Middleware for grabbing all articles with a certain category:
  articleController.loadByCategory = (ctx, next) => {
    let categoryData = articlesInCategory => {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

// REVIEW: Middleware for grabbing ALL articles:
  articleController.loadAll = (ctx, next) => {
    let articleData =  () => {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };

  module.articleController = articleController;
})(window);
