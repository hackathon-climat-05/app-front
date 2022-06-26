FROM node:lts AS build

# Create build directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

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
RUN npm install --no-save serve

EXPOSE 8080

CMD [ "serve", "-s", "-p", "8080", "." ]
