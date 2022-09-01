# _1starter
This is where I start my ES6 projects with SCSS compiling, file watching, and browser_sync

## Steps to get started

1. Setup your own Git Repo using GitHub and make note of the repo name:
   (username/reponame) 
2. Clone this repo into a folder on your system
3. On the command line root of your local project, redirect the remote repository to the new repo you created in step 1:
   (git remote set-url origin git@github.com:username/reponame.git)
4. Push your new repo to github
5. Run "npm install"
6. Make changes
7. Run "npm start" to begin compiles, moving files into the _site folder (this is where the result of your work goes) and browser sync
8. commit your changes as you go to your new copy

## index.html is the organized app with preferred approaches

When you run "npm start" in the root folder of the project, it should load a browser
with "https://localhost:3000/index.html" and you can see the code at work.

## scratchpad.html contains a few samples of approaches

When you run "npm start" it will open the browser window and change the path from pointing to
"index.html" to "scratchpad.html"
