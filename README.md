# 🚀 DevMart Cloud-Native E-Commerce Platform

DevMart is a cloud-native microservices-based e-commerce platform built to gain hands-on experience with modern backend development, DevOps, containerization, Kubernetes, CI/CD, and cloud infrastructure.

The project is designed to simulate a production-ready environment by developing independent microservices, containerizing applications with Docker, orchestrating workloads using Kubernetes, and following cloud-native best practices for scalability, maintainability, and reliability.

Currently, the platform includes a fully functional Authentication Service built with FastAPI, featuring JWT-based authentication, secure password hashing (bcrypt), MySQL integration, Docker containerization, Docker Compose orchestration, and Kubernetes deployment using ConfigMaps, Secrets, Persistent Volume Claims (PVC), Services, Namespaces, and NGINX Ingress.

As the project evolves, additional microservices—including Product Service, Order Service, API Gateway, and other cloud-native components—will be integrated alongside CI/CD pipelines, monitoring, and AWS deployment to reflect real-world software engineering and DevOps workflows.

> **Current Status:** 🚧 Active Development (Auth Service Completed)

# ✨ Features

## Frontend
- Next.js Application
- Responsive User Interface
- App Router Architecture
- Reusable Components
- TypeScript Support
---

## Authentication Service
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing (bcrypt)
- Duplicate Email Validation
- Secure HTTP Bearer Authentication
---

## Backend
- FastAPI REST APIs
- SQLAlchemy ORM
- Pydantic Data Validation
- Modular Project Structure
- Environment-Based Configuration
---

## Database
- MySQL Integration
- User Management
- Persistent Data Storage
---

## DevOps
- Dockerized Microservices
- Docker Compose Orchestration
- Multi-Container Networking
- Environment Variable Management
---

## Kubernetes
- Kubernetes Deployments
- Kubernetes Services
- ConfigMaps
- Secrets
- Persistent Volume Claims (PVC)
- Namespaces
- NGINX Ingress Controller
- Local Domain Routing (`devmart.local`)
- Kubernetes Service-to-Service Communication
---

## Cloud-Native Architecture
- Microservice-Based Design
- Containerized Applications
- Kubernetes-Ready Infrastructure
- Production-Oriented Project Structure

# 🎯 Project Goals

The primary objective of this project is to gain practical experience with production-grade backend and DevOps technologies.
This project focuses on learning:

* FastAPI Backend Development
* REST API Design
* JWT Authentication
* Password Hashing (bcrypt)
* SQLAlchemy ORM
* MySQL Database
* Docker Containerization
* Docker Compose
* Kubernetes
* Microservice Architecture
* Service Discovery
* Kubernetes Networking
* ConfigMaps & Secrets
* Persistent Storage
* NGINX Ingress
* CI/CD Pipelines
* AWS Cloud Deployment
* Monitoring & Observability

---
# 🛠️ Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
---

## Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic
- JWT
- bcrypt
---

## Database
- MySQL
---

## DevOps & Cloud
- Git & GitHub
- Docker & Docker Compose
- Kubernetes (Kind,kubectl)
- NGINX Ingress Controller
- GitHub Actions *(Planned)*
- AWS *(Planned)*
  - Amazon EC2
  - Amazon ECR
  - Amazon EKS
- Prometheus *(Planned)*
- Grafana *(Planned)*
---

## Development Tools
- Visual Studio Code
- Postman
- Swagger UI

# 🏗 High-Level Architecture

```
                        Client
                           │
                           ▼
                  NGINX Ingress
                           │
                           ▼
                    Auth Service
                           │
                           ▼
                     FastAPI Pod
                           │
                           ▼
                    MySQL Service
                           │
                           ▼
                      MySQL Pod
                           │
                           ▼
                 Persistent Volume
```

---

# 📂 Project Structure

```text
devmart-platform/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   └── types/
│
├── backend/
│   ├── auth-service/
│   │   ├── app/
│   │   │
│   │   ├── api/
│   │   ├── core/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   │
│   │   ├── Dockerfile
│   │   ├── requirements.txt
│   │   ├── .dockerignore
│   │   └── .env
│   │
│   ├── product-service/
│   └── order-service/
│
├── k8s/
│   ├── auth-services/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── secret.example.yaml
│   │
│   ├── mysql/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── pvc.yaml
│   │
│   ├── namespace.yaml
│   ├── configmap.yaml
│   ├── ingress.yaml
│   ├── secret.yaml
│   └── .gitignore
│
├── docker-compose.yml
└── README.md
```
---

# 🚀 Quick Start

## 1. Clone the Repository
```bash
git clone https://github.com/tahsinulhoque/devmart-platform.git
cd devmart-platform
```
---
## 2. Start the Application with Docker Compose
```bash
docker compose up --build -d
```
Verify running containers:
```bash
docker compose ps
```
---

## 3. Deploy to Kubernetes (Optional)
Create the Kubernetes resources:
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/auth-services/secret.yaml
kubectl apply -f k8s/mysql/pvc.yaml
kubectl apply -f k8s/mysql/deployment.yaml
kubectl apply -f k8s/mysql/service.yaml
kubectl apply -f k8s/auth-services/deployment.yaml
kubectl apply -f k8s/auth-services/service.yaml
kubectl apply -f k8s/ingress.yaml
```
Verify the deployment:
```bash
kubectl get all -n devmart
```
---

## 4. Access the Application

### Docker Compose
```
http://localhost:8000/docs
```
### Kubernetes (Ingress)
```
http://devmart.local:8080/docs
```
---
## 5. Stop the Application
Docker Compose:
```bash
docker compose down
```



# 🔑 Auth Service Overview

The Auth Service is the first microservice of the DevMart platform.

Current implementation includes:

* User Registration
* User Login
* JWT Authentication
* Password Hashing
* Protected Routes
* Duplicate Email Validation
* MySQL Integration
* Docker Support
* Kubernetes Deployment
* Ingress Support

---
# 🔐 Authentication Flow

The Auth Service is responsible for handling user authentication and authorization.

Implemented authentication features include:

* User Registration
* User Login
* Password Hashing (bcrypt)
* JWT Token Generation
* Protected Routes
* Duplicate Email Validation

---

## Authentication Workflow

### User Registration

```text
Client
   │
   ▼
POST /api/users/register
   │
   ▼
Validate Request
   │
   ▼
Check Duplicate Email
   │
   ▼
Hash Password (bcrypt)
   │
   ▼
Store User in MySQL
   │
   ▼
Registration Successful
```

---

### User Login

```text
Client
   │
   ▼
POST /api/users/login
   │
   ▼
Verify Email
   │
   ▼
Verify Password
   │
   ▼
Generate JWT Token
   │
   ▼
Return Access Token
```

---

### Protected Route

```text
Client
   │
   ▼
Authorization: Bearer <JWT_TOKEN>
   │
   ▼
Validate JWT
   │
   ▼
Load Current User
   │
   ▼
Return Protected Data
```

---

# 🌐 API Endpoints

## Register User

```http
POST /api/users/register
```

### Request

```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Response

```json
{
  "message": "User registered successfully"
}
```

---

## Login User

```http
POST /api/users/login
```

### Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Response

```json
{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}
```

---

## Current User

```http
GET /api/users/me
```

### Header

```http
Authorization: Bearer JWT_TOKEN
```

---

# 🐳 Docker Setup

The Auth Service is fully containerized using Docker.

## Build Docker Image

Navigate to the Auth Service directory.

```bash
cd backend/auth-service
```

Build the Docker image.

```bash
docker build -t devmart-platform-auth-service:latest .
```

Verify the image.

```bash
docker images
```

---

## Run Docker Container

```bash
docker run -d ^
--name auth-service ^
-p 8000:8000 ^
-e MYSQL_HOST=host.docker.internal ^
-e MYSQL_PORT=3306 ^
-e MYSQL_DATABASE=devmart_auth ^
-e MYSQL_USER=root ^
-e MYSQL_PASSWORD=root123 ^
-e SECRET_KEY=my-super-secret-key ^
-e ALGORITHM=HS256 ^
-e ACCESS_TOKEN_EXPIRE_MINUTES=60 ^
devmart-platform-auth-service:latest
```

---

## Verify Running Containers

```bash
docker ps
```

---

## View Logs

```bash
docker logs auth-service
```

---

## Execute Inside Container

```bash
docker exec -it auth-service bash
```

---

## Stop Container

```bash
docker stop auth-service
```

---

## Start Existing Container

```bash
docker start auth-service
```

---

## Remove Container

```bash
docker rm auth-service
```

---

## Remove Docker Image

```bash
docker rmi devmart-platform-auth-service:latest
```

---

## Remove Unused Docker Resources

```bash
docker system prune -a
```

---

# 🐳 Docker Compose

Docker Compose is used to orchestrate multiple services locally.

Current services include:

* Auth Service
* MySQL Database

---

## Build and Start Services

```bash
docker compose up --build -d
```

---

## Start Existing Services

```bash
docker compose up -d
```

---

## View Running Services

```bash
docker compose ps
```

---

## View Logs

```bash
docker compose logs
```

Follow logs continuously:

```bash
docker compose logs -f
```

---

## Restart Services

```bash
docker compose restart
```

---

## Stop Services

```bash
docker compose down
```

---

## Stop Services and Remove Volumes

```bash
docker compose down -v
```

---

## Rebuild Services

```bash
docker compose build --no-cache
```

---

## Verify Containers

```bash
docker ps
```

---

# 🌍 Local Access

After running Docker Compose:

## FastAPI Root

```text
http://localhost:8000/
```

---

## Swagger UI

```text
http://localhost:8000/docs
```

---

## OpenAPI Specification

```text
http://localhost:8000/openapi.json
```

---

# ✅ Docker Development Checklist

* Docker Desktop Installed
* Auth Service Dockerfile Created
* MySQL Container Running
* Docker Compose Networking Configured
* Environment Variables Configured
* FastAPI Accessible
* Swagger UI Accessible
* MySQL Connected Successfully
* JWT Authentication Working
* Protected Routes Tested

---

# 📚 Docker Concepts Learned

During this phase, the following concepts were explored:

* Docker Images
* Docker Containers
* Dockerfile
* Docker Compose
* Multi-Container Applications
* Environment Variables
* Container Networking
* Port Mapping
* Bind Mounts
* Named Volumes
* Service-to-Service Communication
* Image Build Process
* Container Lifecycle
* Docker Logs
* Docker Debugging
