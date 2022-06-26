FROM node:lts AS build

# Create build directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

# The access token for the GitHub Package registry
ARG NODE_AUTH_TOKEN

# Setup registry credentials
RUN if [ ! -z "$NODE_AUTH_TOKEN" ]; then echo "//npm.pkg.github.com/:_authToken=$NODE_AUTH_TOKEN" > .npmrc; fi

# Install app dependencies
RUN npm ci --omit=dev

# Copy app source
COPY . .

# Build app
RUN npm run build

FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Add app bundle
COPY --from=build /app/build .

# Install server
RUN npm install -g serve

EXPOSE 8080

CMD [ "serve", "-s", "-p", "8080", "." ]
