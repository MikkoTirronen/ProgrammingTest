## ProgrammingTest

Frontend:

This will install the packages:
  
- npm install

This will start the client from the root directory:

- npm start -w ./packages/client
  
Backend:

  This will create an sql container with some different password and user values than suggested , see docker-compose file. I forgot to change them after first venturing into the sql database. I ONLY managed to return all the data in the sql database before I ran out of time:
  
- docker-compose up
  
This should start the backend:

- npm start -w ./packages/server


### Assignment Status:
The three links at the top of the react app will navigate you to the 3 somewhat functional frontend assigments.
- Anogram assignment: I am missing tests for this.
- Puppy Page: This should be working.
- Dashboard Frontend: This is working with imported json data.
- Dashboard Backend: Only the getAll function for the database was working. Using the docker-compose file I provided probably isnt recommended as I did have different authentication values in there. Plus I didnt have time to import the sql data in its own dockerfiles to complete the docker container environment.
