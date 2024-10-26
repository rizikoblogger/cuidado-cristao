# The choice of Docker image should be made according to the version
# of Node.js that the developer used when the app was created,
# because all the library definitions in the package.json file
# during the prototype creation depended on that.

# To know which version of Node.js was used by the code 'generator',
# locate the following entry in the package.json file:
#   "engines": {
#       "node": "^16.15" <-- Node.js version used for installation
#    }
#

# To install the most updated image...
# FROM registry.ccarj.intraer/mirror/library/node:lts-alpine AS build
# To install the image compatible with the 'generation' version of the app
# FROM node:16.15.1 AS build

FROM node:20.11.1 AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
USER node
COPY . .
COPY --chown=node:node . .
EXPOSE 80:80
ENV NODE_ENV=production
CMD [ "node", "./app.js" ]

# See README.md to know how to run under Docker Containers
