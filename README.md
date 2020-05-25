## NOTE: The main app directory is remote, all npm commands are run from this directory(referred as root directory)
## NOTE: This project has all the dependencies installed and accounted for in "package.json" file in root directory
# Introduction 
- There are two tasks accomplised in this project 
- task-one is to redirect to "google.com" upon entering the url "localhost/goog"(this task is stored in remote dir)
- task-two is to display local json file content in browser(this task is also stored in remote dir)

# Getting Started
1.	a) download node from here https://nodejs.org/en/download/
    b) This link can help you through the process of downloading, installing and setting up node and express
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment
2.  Install "nodemon" to make server respond for dynamic changes by running command 'npm install -g nodemon'
3.  Tweak the "package.json" file by adding "start" to "scripts" and adding "nodemon app.js" to "start"(already done)
4.  now run command 'npm start' at the root directory

# Dependencies
- (for detailed dependencies you can visit "package.json" file in "remote" directory)
1.  nodemon(npm install -g nodemon)
2.  express(npm install --save express)
3.  fs(npm install --save fs)
4.  path(npm install --save path)

# Build and Test
- type in command 'npm start' to create server from directory "remote"
- now go to "localhost:8000" in your web browser(you can view the json content here)
- now visit "localhost:8000/goog"(you will be redirected to "www.google.com")
    # Note: tests are not yet made

# Contribute
- For task-one:
    - add more routings as necessary to variuos websites using express app.get()
- For task-two:
    - style the displayed json contents
