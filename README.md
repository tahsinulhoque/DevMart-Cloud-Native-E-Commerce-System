# 🚀 DevMart Cloud-Native E-Commerce Platform

A cloud-native e-commerce platform built to gain hands-on experience with modern Backend Development, DevOps, Containerization, Microservices, Kubernetes, CI/CD, and Cloud Infrastructure.

The goal of this project is not only to build an e-commerce application but also to understand how production-grade systems are designed, containerized, deployed, monitored, and scaled.

---

# 🎯 Project Goals

This project is being built to gain practical experience with:

- FastAPI Backend Development
- MySQL Database Design
- Microservice Architecture
- JWT Authentication & Authorization
- Docker Containerization
- Docker Compose Orchestration
- Kubernetes Deployments
- CI/CD Automation
- AWS Cloud Deployment
- Monitoring & Observability

---

# 📌 Current Development Phase

Currently working on:

### Auth Service (Microservice)

Implemented:

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- Duplicate Email Validation
- MySQL Integration
- Docker Containerization
- Docker Compose Setup
- Service-to-Service Networking

---

# ✅ Completed Features

## Frontend

### Next.js Setup

- Next.js Application Initialized
- App Router Structure
- Reusable Components Structure
- TypeScript Setup
- Responsive UI Layout

### Pages Created

- Home Page
- Products Page
- Cart Page
- Orders Page
- Profile Page
- Login Page
- Register Page

---

## Backend

### Auth Service

Implemented:

### User Registration API

```http
POST /api/users/register
```

Features:

- User Creation
- Password Hashing
- MySQL Storage

---

### User Login API

```http
POST /api/users/login
```

Features:

- Email Validation
- Password Verification
- JWT Token Generation

---

### Protected User Route

```http
GET /api/users/me
```

Features:

- JWT Validation
- Authentication Middleware
- Protected Endpoint Access

---

### Security

Implemented:

- bcrypt Password Hashing
- JWT Authentication
- HTTP Bearer Authentication
- Protected Routes

---

### Validation

Implemented:

- Duplicate Email Validation
- Invalid Credential Validation
- JWT Token Validation

---

## Database

### MySQL

Implemented:

- MySQL Docker Container
- SQLAlchemy Integration
- User Model
- Users Table Creation
- Database Connection Layer

---

## DevOps

Implemented:

### Docker

Created:

- Dockerfile for Auth Service
- .dockerignore
- Docker Image Build
- Containerized FastAPI Application

---

### Docker Compose

Created:

- MySQL Service
- Auth Service
- Service Networking
- Environment Variables
- Persistent Volume

---

# 🏗️ Project Structure

```bash
devmart-platform/
│
├── frontend/
│
│   ├── app/
│   │   ├── cart/
│   │   ├── login/
│   │   ├── orders/
│   │   ├── products/
│   │   ├── profile/
│   │   └── register/
│   │
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   └── types/
│
├── backend/
│
│   ├── auth-service/
│   │
│   │   ├── app/
│   │   │
│   │   ├── api/
│   │   ├── core/
│   │   ├── database/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │
│   │   ├── Dockerfile
│   │   ├── .dockerignore
│   │   └── requirements.txt
│   │
│   ├── product-service/
│   │
│   └── order-service/
│
├── docker-compose.yml
│
└── README.md
```

---

# 🛠️ Technology Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS

---

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- JWT
- bcrypt

---

## Database

- MySQL

---

## DevOps

- Docker
- Docker Compose

---

# 🔐 Authentication Flow

### Register

```http
POST /api/users/register
```

↓

User Stored in MySQL

↓

Password Hashed using bcrypt

---

### Login

```http
POST /api/users/login
```

↓

Credentials Verified

↓

JWT Token Generated

↓

Token Returned

---

### Protected Route

```http
GET /api/users/me
```

↓

Bearer Token Sent

↓

JWT Validated

↓

User Information Returned

---

# 🐳 Docker Commands

## Build Auth Service Image

```bash
docker build -t auth-service .
```

---

## Run Auth Service Container

```bash
docker run -d \
--name auth-container \
-p 8000:8000 \
-e MYSQL_HOST=host.docker.internal \
-e MYSQL_PORT=3306 \
-e MYSQL_DATABASE=devmart_auth \
-e MYSQL_USER=root \
-e MYSQL_PASSWORD=root123 \
-e SECRET_KEY=my-super-secret-key-for-devmart \
-e ALGORITHM=HS256 \
-e ACCESS_TOKEN_EXPIRE_MINUTES=60 \
auth-service
```

---

## Check Running Containers

```bash
docker ps
```

---

## Check Logs

```bash
docker logs auth-container
```

---

## Stop Container

```bash
docker stop auth-container
```

---

## Remove Container

```bash
docker rm auth-container
```

---

# 🐳 Docker Compose Commands

## Build & Start

```bash
docker compose up --build -d
```

---

## Check Containers

```bash
docker compose ps
```

---

## View Logs

```bash
docker compose logs
```

---

## Stop Services

```bash
docker compose down
```

---

# 🌐 API Endpoints

## Register

```http
POST /api/users/register
```

Request:

```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Login

```http
POST /api/users/login
```

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}
```

---

## Get Current User

```http
GET /api/users/me
```

Authorization:

```http
Bearer JWT_TOKEN
```

---

# 📚 Key Concepts Learned

During development, the following concepts were explored:

- Microservice vs Route
- Docker Image vs Container
- Dockerfile vs Docker Compose
- Environment Variables
- Container Networking
- Service Discovery
- JWT Authentication
- Protected APIs
- Database Persistence
- FastAPI Dependency Injection
- SQLAlchemy ORM

---

# 🚀 Upcoming Milestones

## Backend

- Product Service
- Order Service
- API Gateway
- Inter-Service Communication

---

## DevOps

- Multi-Service Docker Compose
- GitHub Actions CI/CD
- Kubernetes Deployments
- Kubernetes Services
- Ingress Controller

---

## Cloud

- AWS Deployment
- ECR
- ECS / EKS
- Prometheus
- Grafana

---

# 📈 Current Status

### Project Status

🚧 Active Development

### Completed

✅ Frontend Setup

✅ Auth Service

✅ JWT Authentication

✅ Protected Routes

✅ MySQL Integration

✅ Dockerized Auth Service

✅ Dockerized MySQL

✅ Docker Compose Setup

✅ Service Networking

### In Progress

🔄 Product Service

🔄 Order Service

🔄 Kubernetes

🔄 CI/CD Pipeline

---

# 👨‍💻 Author

### Md. Tahsinul Hoque Siddiki

Aspiring DevOps & Cloud Engineer

GitHub:
https://github.com/tahsinulhoque