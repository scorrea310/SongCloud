# SongCloud

SongCloud is a clone of SoundCloud where users can listen to songs uploaded by other users as well as upload their own songs.

Visit Live Site: https://song-cloud-clone.herokuapp.com/



# Walkthrough 

Landing Page

<img width="1425" alt="Screen Shot 2022-03-21 at 10 25 31 AM" src="https://user-images.githubusercontent.com/46228676/159329720-a2e7ee29-25cf-47a5-b1c1-eefeaa31bbce.png">

Users can sign, login, or use Demo User
<img width="1425" alt="Screen Shot 2022-03-21 at 10 25 59 AM" src="https://user-images.githubusercontent.com/46228676/159329785-29a04b24-c0a3-4485-b715-47e52955e18e.png">

Users are directed to home page when logged in. Users can see their own songs as well as discover other sounds.
<img width="1426" alt="Screen Shot 2022-03-21 at 10 26 30 AM" src="https://user-images.githubusercontent.com/46228676/159329880-d5ef39cf-6e3f-46d3-ab31-e316cce013d4.png">

Users can upload a song with a cover image here.
<img width="1428" alt="Screen Shot 2022-03-21 at 10 27 20 AM" src="https://user-images.githubusercontent.com/46228676/159330022-608ff356-da91-475d-adf6-e70339e5b932.png">

Users can edit their own songs or delete in the my Songs tab.
<img width="1426" alt="Screen Shot 2022-03-21 at 10 28 34 AM" src="https://user-images.githubusercontent.com/46228676/159330256-cfbc4006-6b37-4269-a613-1a538bcf5ec6.png">



# Getting Started

1. Clone this repo.

`git clone`

2. Install dependencies from the root directory.

`npm install`

3.Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

`CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`
  
4.Create a .env file in the backend directory based on the .env.example found within the respective directory.

5.Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6.Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.

`"proxy": "http://localhost:5000"`

7.Create Database, Migrate, and Seed models.

`npx dotenv sequelize db:create`
`npx dotenv sequelize db:migrate`
`npx dotenv sequelize db:seed:all`
8.Start the services in the backend directory.

9.Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.
`npm start`


10.You can use the Demo user or create an account to begin using SongCloud.
`npm start`
