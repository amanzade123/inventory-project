FROM node:18

# Set working directory to the backend subfolder
WORKDIR /app

# Copy package.json and package-lock.json from root
COPY package*.json ./

# Install dependencies from root
RUN npm install

# Copy all app files into container (include the subfolder)
COPY . .

# Change working directory to the actual app code folder
WORKDIR /app/inventory-backend

# App will listen to the PORT env variable
EXPOSE 8080

CMD ["node", "server.js"]
