# cParkChallenge
## *Introduction*
This project is a challenge proposed by the company cPark. The challenge was to create an application to send and consult 
reports via a Fetch API, a Node.js server and a mongoDb database.
## *Installation*
1. Pull the project
2. Yarn command in your local project shell to initialize the package manager
3. Yarn start command to start the application
## *Application*
The application is compose of three component, the two screen too display and the DatePicker component which allows the user to
choose a date for the report. 

### *Backend*
The Backend folder contains all the necessary files that manage the Backend part of the application. 
The connection between the server and the client part is manage by a fetch API. 
The Node.js server is deploy on Heroku, you can see it at this link: [cParkChallenge](https://cparkchallenge.herokuapp.com/report/lat/long).
The reports send by the user to the server are stored in a noSQL database mongoDb. 
Thanks to this database, the user can retrieve the reports and display them on the application.
The mongoDb database is manage with mLab.

### *Frontend*
The user is allow to navigate between two screens. One screen on which he can choose a title for a report and a date to finally
send it. And the other screen to see all the reports that have been send to the database.
