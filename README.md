#Book-App  

FUNCTIONALITY STILL TO BE IMPLEMENTED/FIXED AT CLIENT SIDE FOR A USER:  

i- Login  
ii- Register  
iii- Logout  
iv- Cart Add/Delete   

WORKING FUNCTIONALITY:  

i- Renders all books from the database  
ii- Search the book by book title.  

Steps:

1. Create a database in postgresql.
2. Import this project into Eclipse/VSCode or IntelliJ. You can clone it from github with the following command:
   i- git clone http_path


3. In application.properties file set the following Environment variables to connect to the PostgreSQL database.
```
URL = jdbc:postgresql://localhost:5432/yourdatabase
USERNAME = your_user_name
PASSWORD= your_password
```
4. Run the main method in BookApplication.java file.
5. In you terminal cd to react-code folder.
6. These are couple of commands to run react
```
    npm run build
    npm start
   ```
7. The http://localhost:3000 will open up and show the list of books.
8. Search the book by book title in the search box.

SERVER SIDE:
You can check API in the app Postman.

1. User can sign up with http://localhost:8080/api/auth/signup. The fields will be username, email, password, role.
2. Check the database to see if user has been entered or 'user registered successfully' message will appear in postman.
3. User roles have been inserted in the table when run main method.
4. Use http://localhost:8080/api/auth/signin url to sign in the user you registered earlier.
5. Use http://localhost:8080/api/auth/signOut to sign out the user.
 


