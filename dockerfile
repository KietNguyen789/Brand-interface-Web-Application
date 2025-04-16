FROM node:20.11.0-alpine
WORKDIR /brand-ui/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build