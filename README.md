![CF](https://i.imgur.com/7v5ASc8.png)  Lab 14: Managing State
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

Let's circle back to our UI logic... You know, everything that sets up the page for interaction. Now we can use our new tools of routing, middleware, MVC separation, SQL, and resource rendering.

Let's use these new tools to review the refactored components of the UI: author filter, category filter, the teaser link, and a bunch of click events.

Work with your partner to *comment* on the execution path for sections labeled with "COMMENT:".  These items are essentially TODO items that have been done for you and demonstrate the concepts presented during lecture.  While you will not be building out any additional functionality for this assignment, you will need to describe what each newly refactored method does and where it points back to.  The navigator for this assignment should be tracing the execution path and determining what each new method/update is doing while the driver will need to summarize the navigator's thoughts into a 1-2 sentence comment (below each "COMMENT:" item).  Be sure to switch roles after 4-5 COMMENT items have been completed.

## Helpful Hints?
 - Don't forget to `npm i` to download our modules!
 - Review the `Article.findWhere` method.  This lets you grab a subset of articles by some field/value combo you pass in.
 - The "Read On" link is now a standard html link.
 - The filters now populate based on what's in the DB, not what's in the DOM: "single source of truth"
 - If there are spaces in a URL, we have replaced them with a '+'

## Technical Requirements and Grading Rubric
 - Accurately comment on each COMMENT item to demonstrate your understanding of the functionality and the execution path.
