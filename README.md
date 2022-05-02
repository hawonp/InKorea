## Welcome to InKorea! (To Be Updated Later)

## Paper Prototyping Video Link
- [YouTube Link](https://youtu.be/tCOShCInpdI)


## Team Members
- Hawon Park (hawon.park@stonybrook.edu)
- Jeong Ho Shin (jeongho.shin@stonybrook.edu)
- Sangwoo Park (sangwoo.park.2@stonybrook.edu)
- Youngwon Choi (youngwon.choi@stonybrook.edu)

## Where to get the Latest Version of StudyBoard?
- The [main](https://github.com/hawonp/InKorea) branch of this git repository will always have the latest production version of StudyBoard
- The [dev](https://github.com/hawonp/InKorea/tree/dev) branch of this git repository will always be the latest development version of StudyBoard

## Step 1) Local Development Prep
- Download/Clone the [main](https://github.com/hawonp/InKorea) branch of InKorea

- Create a virtual environment in the **root** directory of the repository and activate it
  - VirtualEnv, Venv, Anaconda all work
## Step 2) Create Docker Network
- Create a user-defined bridge to link mariadb and flask
  > docker network create dbms_network
- Create a user-defined bridge to link nginx to all the different containers (if using nginx)
  > docker network create nginx-proxy
## Step 3) Initialize MariaDB database
- Change directories to dbms/
  > cd dbms

- Initialize Database Docker Container
  > docker-compose up --build

- Go back to root directory
  > cd ..

## Step 4) Initialize Flask Backend
- Change directories to backend/
  > cd backend

- Install Requirements
  > pip install -r requirements.txt

- Initialize Flask Docker Container
  > docker-compose up --build

- Go back to root directory
  > cd ..

## Step 5) Initial React Frontend
- Change directories to frontend/
  > cd dbms

- Install Requirements
  > yarn install

- 5a) Initialize NextJS Docker Container
  > docker-compose up --build

- 5b) Intialize React dev server
  > yarn run dev

## Required Specs / Compatability
 - Operating System : Any
 - Docker
 - Python 3.9 (Install via virtual environment)

## How to Submit an issue
 - You can submit an issue through the [Github issues](https://github.com/hawonp/InKorea/issues) tab
 - All outstanding issues will be located in the issues tab

## Useful Docker commands
 - Check which containers are running
    > docker ps

 - Go into the docker container
    > docker exec -it container_id/container_name bash

 - See logs
    > docker logs --follow container_id

 - Shutdown a docker container
    > docker-compose down
