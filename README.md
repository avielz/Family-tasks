# Family-tasks
angular node.js exam John Bryce

pre-requisits:

Apache web server to connect to mysql database
XAMPP is an easy to install Apache distribution: 
https://www.apachefriends.org/download.html

run xampp control panel->
start mysql module- should run on port 3306
start apache module - 
XAMPP includes phpMyAdmin, an open-source, browser-based tool for managing MySQL
to run click on mysql->admin and a web page with phpMyAdmin tool will open
or browse to http://localhost/phpmyadmin or http://127.0.0.1/phpmyadmin. 

import project database:
in phpMyAdmin browser-based tool
Select the new database from the left navigation pane. In the resulting page, select the "Import" command in the top navigation bar.
Click the "Browse…​" button and select the "homedb" sql file from the root project folder. Click "Go" to proceed.
phpMyAdmin will import the data from the file. Once complete, you will see a screen indicating the status of the import.
If you browse the contents of the database, you should now see your original data.


To install the application:

open CLI/terminal in the project folder

install node modules folder:
npm install

if not already installed also install nodemon:
npm install -g nodemon

you need to have mysql installed
npm install mysql

initiate the application
nodemon app.js

in the browser browse to 
http://localhost:8070


