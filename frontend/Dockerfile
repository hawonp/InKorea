# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

# start app
# RUN npm run build
# CMD serve -s build
# CMD ["npm", "run", "build"]
