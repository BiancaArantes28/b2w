# Imagem de Origem
FROM node:13-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# Add environment variables
copy .env /app
copy .env.local /app
copy .env.production /app
# Install dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
# start app
CMD ["npm", "start"]