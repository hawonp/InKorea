## Welcome to InKorea!
InKorea is a website geared towards foreigners who are having trouble overcoming the language barrier while living in South Korea. InKorea offers two features that will hopefully help users learn something new with each visit.
- Scenario Guide contains helpful information about common scenarios that occur while living in Korea
  - List of Common Documents
  - Widely Used Phrases
  - Practice Quizzes
- App Catalog is a currated list of apps that are useful when living in South Korea

## Team Members
- Hawon Park (hawon.park@stonybrook.edu)
- Jeong Ho Shin (jeongho.shin@stonybrook.edu)
- Sangwoo Park (sangwoo.park.2@stonybrook.edu)
- Youngwon Choi (youngwon.choi@stonybrook.edu)

## Where to get the Latest Version of InKorea?
- The [main](https://github.com/hawonp/InKorea) branch of this git repository will always have the latest production version of InKorea
- The [dev](https://github.com/hawonp/InKorea/tree/dev) branch of this git repository will always be the latest development version of InKorea

## Step 1) Local Development Prep
- Download/Clone the [main](https://github.com/hawonp/InKorea) branch of InKorea
- NOTE: Order of deployment is DBMS --> FastAPI --> Frontend

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

## Step 4) Initialize Fast API Backend
- Change directories to fastapi/
  > cd fastapi

- Create a virtual environment 
  > python -m venv venv

- Windows / Unix Activation Respectively  
  > venv\Scripts\activate 
  > source venv/bin/activate

- Install Requirements
  > pip install -r requirements.txt

- 4a) Initialize FastAPI Docker Container
  > docker-compose up --build

- 4b) Initialize FastAPI Dev Server
  > uvicorn app.main:app

- 4c) Initialize FastAPI Dev Server (dynamic reloading)
  > uvicorn app.main:app --reload

- Go back to root directory
  > cd ..

## Step 5) Initial React Frontend
- Change directories to frontend/
  > cd frontend

- Install Requirements
  > npm install

- 5a) Initialize NextJS Docker Container
  > docker-compose up --build

- 5b) Intialize React dev server
  > npm start

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

## Website Link
- [Final Prototype](https://www.inkorea.co/)
- [FastAPI](https://www.backend.inkorea.co/docs)
