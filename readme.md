# node-auth 

session based auth - node api - cookies - redis() - mongodb

## curl 
 ```sh 
 curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' -d '{"email": "mani@gmail.com", "name": "Mani", "password": "Password10", "passwordConfirmation": "Password10"}'

 curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email": "mani@gmail.com", "password": "Password10"}'
 ```