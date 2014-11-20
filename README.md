weebly-project
==============
Reached Maximum File so I couldn't attach it in a zip file, I uploaded it to Git instead.

Git Url: https://github.com/mbatilando/weebly-project

Installation Instructions:
Must have Sass, npm, Bower, Grunt and Mongo installed

1. Clone repo
2. 'sudo npm install' in root project directory
3. 'bower install' in root project directory
4. 'mongod' in root project directory
5. 'grunt serve' in root project directory

Front-end Level One: Project Setup & Structure
------
###### (DONE) Set up the basic DOM structure to match the mockups provided
###### (DONE) Set up your Javascript and CSS
###### (DONE Optional) Use a dependency management tool for your Javascript (RequireJS, Browserify, etc.)
I used Common.js on the server-side and Angular on the client-side to divide my application into modules.
###### (DONE Optional) Use a CSS pre-processor for your CSS (LESS, SASS)
I used SCSS to organize my client-side CSS.


Front-end Level Two: Basic Design & Interaction
------
###### (DONE) Design implementation should be 60% complete
###### (DONE) Users can create, delete, and rename pages
###### (DONE Optional) Use or create a reusable framework to manage events and interactions
I used Angular to manage my front-end events, modularize my components, views and server interaction.
This application is using client-side rendering.

Backend Level One: Basic Design & Interaction
------
###### (DONE) Your project should be served via a webserver, not static files.  You can use any language/webserver you want

###### (DONE) Basic backend persistence should be set up.  Pages, elements, position, and content should persist.  The persistence layer you use is entirely up to you

###### (DONE Optional) Make use of a "Data Access Layer" to talk to your datastore.  This can be a full-fledged ORM, or a custom piece of code
I have a client-side rendering app which has Mongo, Node, and Express on the backend.
I use Mongoose as an ORM.

I store the user and the API key in cookies, this isn't secure however I felt that it was fine to persist state since
this is a demo application.

Backend Level Two: Authentication
------
###### (DONE) Your application must be behind an authentication wall.  Users must authenticate with a Google account (via OAuth 2) before being able to access the tool (Note: There does NOT need to be actual user accounts.  All authenticated users can see the same data/pages/elements at this point)
###### (DONE) The first time a user authenticates, their information should be persisted in a datastore.  In addition to their user information, they should be given a random auto-generated API Token.
###### (Optional) Extend your OAuth library/implementation to allow authentication from Facebook as well as Google (Only do this if you have extra time!)

Backend Level Three: REST API
------
###### (DONE) Your application must provided a "REST" API to access and manipulate page data.  The API must provide the following
###### (DONE) Your API must be authenticated via the API Token that was generated in Backend Level Two
###### (DONE) You can use any data format you want for your API (JSON, XML, YAML)
###### (DONE Optional) Allow users to request specific data formats back by providing an extension on their API request (/api/page/1.json, /api/page/1.xml, etc.)

Backend Level Four: Caching
------
###### (DONE) Implement a caching layer for your REST API.  It can use any caching tool/library you prefer
###### (DONE) Multiple requests to the same endpoint should be cached, avoiding extra hits/connections to your database/datastore
###### (DONE) Whenever a page is updated, the cache for that page should be invalidated
###### (DONE Optional) Benchmark and perform performance tests on your caching implementation.  Can you show us how well it improved performance?  Use any tools you need to benchmark your caching.
