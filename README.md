# Setup
- npm i --legacy-peer-deps
- npm start

# How to setup with a new firebase project:
- Go to firebase website, create new project
- Add web app
- Develop -> Cloud Firestore -> Create database (production mode)
- Enable google adsense tracking for 'measurementId' var
- Enable authentication by going to Authentication -> Get Started -> Email, google, etc...
- Project settings, scroll down, your apps -> web apps
- Copy vars from npm sdk setup and add to new file `.env` (view `.env_template` for formatting reference)
