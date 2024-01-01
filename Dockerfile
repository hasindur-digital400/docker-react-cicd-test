# Base image
FROM node:20-alpine

# Working directory of the container
WORKDIR /usr/app/

# Copy necessary folders and files into the working directory
COPY public/ /usr/app/public
COPY src/ /usr/app/src
COPY package.json /usr/app/

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]