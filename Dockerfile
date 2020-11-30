FROM node:12
WORKDIR /app
COPY package*.json .
RUN npm install
COPY src .
EXPOSE 3000
CMD npm run dev
