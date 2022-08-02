# FROM node:15.13-alpine
# WORKDIR /balmco
# ENV PATH="./node_modules/.bin:$PATH"
# COPY package.json .
# COPY . .
# RUN npm install
# CMD ["npm", "start"]

FROM node:16

# Create app directory
WORKDIR /balmco

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]