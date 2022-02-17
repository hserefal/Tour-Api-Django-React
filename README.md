# Build Steps
To build app, use 

    docker-compose build
    docker-compose up
    
Docker will serve backend at http://localhost:3003 
and frontend at http://localhost:3000

After project is up, User can sign up to the system and browse tours by log in. 

## Capabilities
Django API route provides the following data back:

* tour company
* tour title
* tour description
* tour dates
* tour price

This should be displayed via a React app, when viewed on a web browser.
