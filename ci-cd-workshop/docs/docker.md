# Steps for docker in general(applies to both below)
* Modify the .env files(./ and ./frontend) for the local ports
* Modify the ./.github.workflows/nodejs.yml for the docker version(included in the comments of the file)

## Steps to run project in devcontainers commands
1. cd ```\workspace```
2. ```pg_ctlcluster 16 main start & sudo -u postgres psql & ALTER USER postgres PASSWORD 'hello1234'; & psql -U postgres -h localhost```
3. ```node migrate.js```
4. ```npm run dev```
5. open new terminal
6. ```cd \workspace\frontend```
6. ```npm start```
7. open a web browser and go to http://localhost:3000


## Steps to run project in terminal commands
1. ```docker build -t my-app .```
2. ```docker run -p 3000:3000 -p 4000:4000 -p 5432:5432 --name test_container -it --rm my-app``` 
3. ```pg_ctlcluster 16 main start```
4. ```cd ..```
5. ```node migrate.js```
6. ```npm run dev```
7. open new terminal
8. ```docker ps -a``` to get container-id
9.  ```docker exec -it container-id bash```
10. ```npm start```
11. open a web browser and go to http://localhost:3000
