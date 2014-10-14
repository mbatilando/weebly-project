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

Frontend Levels 1-2
I used SCSS for my CSS, and CommonJS to modularize my backend code.
I used Angular to manage my front-end events and modularize my components, views and server interaction.

Backend Levels 1-2 (some of 3)
I have a client-side rendering app which has Mongo, Node, and Express on the backend.
I use Mongoose as an ORM.

I store the user and the API key in cookies, this isn't secure however I felt that it was fine to persist state since
this is a demo application.

I have a REST api for pages but I did not implement authentication using the user's API key.