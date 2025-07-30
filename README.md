# Inventory Management System

## Features
- User registration/login with JWT
- Add new products
- Update product quantity
- View product list (paginated)
- Swagger API documentation

## Tech Stack
- Node.js + Express
- MongoDB (via Mongoose)
- JWT for authentication
- Dockerized deployment with Docker Compose

## Project Structure
root/
├── Dockerfile # Root-level Dockerfile (as required)
├── docker-compose.yml # Compose setup for backend and MongoDB
├── package.json # Declared in root for Docker build
├── inventory-backend/ # Actual application code
│ ├── server.js / app.js
│ ├── routes/
│ ├── models/
│ └── ...

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/inventory-backend.git
cd inventory-backend

2. Create a .env file (in root) with the following:

PORT=8080
MONGO_URI=mongodb://mongo:27017/inventory
JWT_SECRET=your_jwt_secret

3. Start the Application Using Docker
docker-compose up --build

4. Access the API Documentation
http://localhost:8080/api-docs
