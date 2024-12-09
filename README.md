# SQL-Employee-Tracker
License: MIT

Description
Employee Tracker is a simple command-line application that allows users to interact with an employee database. Users can view, add, and delete the workplace's departments, roles, and employees. Employee's roles and managers can be updated. More advanced database queries even allow users to easily view employees by manager or by department, or calculate the total salaries for any given department, all from the Terminal.

This project was an exercise in creating an application that combines PostgreSQL with the pg, inquirer, and TypeScript Node packages.

Installation
Download the project to your local environment by running the following commands in the terminal:
git clone https://github.com/MSJandres/SQL-Employee-Tracker.git
Rename the .env.EXAMPLE file to just .env, and add your PostgreSQL password.

Then, make sure to change directories into the Develop folder:

cd employee-tracker/Develop
Finally, install the required dependencies:
npm install
You're almost ready to use Employee Tracker!

Usage
After installing the application, you'll have to initialize the database and populate it with data. From the command line, cd src/db, start PostgreSQL with psql -U postgres, and enter your password. Use the \i schema.sql and then \i seeds.sql commands to get the database up and running.

Going back to cd ../../, simply run npm run build and then npm run start from the terminal from within the Develop folder. Then, follow the prompts using your keyboard's arrow keys and the return key.

See a video walkthrough of the application here.

License
This project uses an MIT License ↗️.
