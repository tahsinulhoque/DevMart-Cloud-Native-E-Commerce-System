# 🚀 DevMart — Cloud-Native E-Commerce System

> A cloud-native, microservices-based e-commerce platform built to explore modern backend development, containerization, Kubernetes orchestration, and DevOps practices.

**DevMart** is an actively evolving e-commerce platform designed around a microservices architecture. The project focuses on building independently deployable services and gradually introducing production-oriented DevOps practices such as Docker, Kubernetes, CI/CD, cloud deployment, monitoring, and observability.

At the current stage, the **Authentication Service is fully implemented** with FastAPI, JWT authentication, bcrypt password hashing, MySQL, Docker, Docker Compose, and Kubernetes. The Kubernetes setup includes ConfigMaps, Secrets, Persistent Volume Claims, Services, Namespaces, and NGINX Ingress.

> **Current Status:**  Active Development — Authentication Service completed and deployed locally with Docker & Kubernetes.

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Current Implementation](#-current-implementation)
* [Key Features](#-key-features)
* [System Architecture](#-system-architecture)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Authentication Service](#-authentication-service)
* [Docker Setup](#-docker-setup)
* [Kubernetes Deployment](#-kubernetes-deployment)
* [API Documentation](#-api-documentation)
* [Configuration](#-configuration)
* [Development Workflow](#-development-workflow)
* [Roadmap](#-roadmap)
* [Project Goals](#-project-goals)
* [Future Architecture](#-future-architecture)
* [Author](#-author)

---

# 🎯 Overview

DevMart is being developed as a practical **cloud-native e-commerce system** rather than a traditional monolithic application.

The project follows a gradual implementation approach:

```text
Application Development
        ↓
Microservice Architecture
        ↓
Containerization
        ↓
Docker Compose
        ↓
Kubernetes
        ↓
CI/CD
        ↓
AWS Cloud
        ↓
Monitoring & Observability
        ↓
Production Readiness
```

The current implementation establishes the foundation for this architecture by providing a working Authentication Service with persistent MySQL storage and Kubernetes deployment.

---

# ✅ Current Implementation

The following components are currently implemented:

### Authentication Service

* User registration
* User login
* JWT-based authentication
* Protected API routes
* Password hashing using bcrypt
* Duplicate email validation
* HTTP Bearer authentication
* FastAPI REST API
* SQLAlchemy ORM
* Pydantic validation
* MySQL database integration

### Containerization

* Dockerized Authentication Service
* Docker image build
* Docker Compose configuration
* Multi-container networking
* Environment-based configuration

### Kubernetes

* Kubernetes Namespace
* Deployment
* Service
* ConfigMap
* Secret
* Persistent Volume Claim
* MySQL Deployment
* MySQL Service
* NGINX Ingress
* Kubernetes service-to-service communication
* Local domain routing using `devmart.local`

---

# ✨ Key Features

## 🔐 Authentication

The Authentication Service provides the security foundation of the platform.

### Implemented

* Registration API
* Login API
* JWT token generation
* JWT token validation
* Password hashing
* Protected endpoints
* Email uniqueness validation
* Bearer token authentication

---

## 🐍 FastAPI Backend

The backend is implemented using **FastAPI** with a modular architecture.

Main technologies:

* Python
* FastAPI
* SQLAlchemy
* Pydantic
* JWT
* bcrypt

The backend separates API routes, business logic, database access, models, schemas, and configuration to keep the service maintainable.

---

## 🗄️ MySQL Database

MySQL is currently used as the persistent database for the Authentication Service.

The database is responsible for storing user-related information.

The Kubernetes deployment also uses persistent storage through a **Persistent Volume Claim (PVC)**.

---

## 🐳 Docker

The Authentication Service is containerized using Docker.

Docker is used to provide:

* Reproducible environments
* Isolated application runtime
* Consistent development environment
* Easy local deployment
* Container-to-container networking

---

## ☸️ Kubernetes

The current application can be deployed to a local Kubernetes environment.

The Kubernetes configuration includes:

* Namespace
* Deployment
* Service
* ConfigMap
* Secret
* Persistent Volume Claim
* NGINX Ingress

This provides the foundation for scaling the platform into multiple independent services.

---

# 🏗️ System Architecture

## Current Architecture

```text
                    ┌──────────────────┐
                    │      Client      │
                    └────────┬─────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │    NGINX Ingress    │
                  │   devmart.local     │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   Auth Service     │
                  │      FastAPI       │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   MySQL Service     │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │    MySQL Pod        │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Persistent Storage   │
                  │        PVC           │
                  └─────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

| Technology   | Purpose               |
| ------------ | --------------------- |
| Next.js      | Frontend framework    |
| TypeScript   | Type-safe development |
| Tailwind CSS | UI styling            |

---

## Backend

| Technology | Purpose                      |
| ---------- | ---------------------------- |
| Python     | Backend programming language |
| FastAPI    | REST API framework           |
| SQLAlchemy | ORM                          |
| Pydantic   | Data validation              |
| JWT        | Authentication               |
| bcrypt     | Password hashing             |

---

## Database

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| MySQL             | Relational database           |
| Persistent Volume | Persistent Kubernetes storage |

---

## DevOps & Infrastructure

| Technology     | Status     |
| -------------- | ---------- |
| Git            | ✅          |
| GitHub         | ✅          |
| Docker         | ✅          |
| Docker Compose | ✅          |
| Kubernetes     | ✅          |
| kubectl        | ✅          |
| Kind           | ✅          |
| NGINX Ingress  | ✅          |
| GitHub Actions | 🚧 Planned |
| AWS EC2        | 🚧 Planned |
| Amazon ECR     | 🚧 Planned |
| Amazon EKS     | 🚧 Planned |
| Prometheus     | 🚧 Planned |
| Grafana        | 🚧 Planned |

---

## Development Tools

* Visual Studio Code
* Postman
* Swagger UI
* Git & GitHub

---

# 📂 Project Structure

```text
DevMart-Cloud-Native-E-Commerce-System/
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
│   │   │   ├── api/
│   │   │   ├── core/
│   │   │   ├── database/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── schemas/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   ├── Dockerfile
│   │   ├── requirements.txt
│   │   └── .dockerignore
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
├── docs/
│
├── docker-compose.yml
│
└── README.md
```

---

# 🔐 Authentication Service

The Authentication Service is the first fully implemented microservice of DevMart.

## Responsibilities

```text
User
 │
 ├── Register
 │       ↓
 │   Validate Input
 │       ↓
 │   Hash Password
 │       ↓
 │   Store User
 │       ↓
 │   MySQL
 │
 └── Login
         ↓
     Validate Credentials
         ↓
     Generate JWT
         ↓
     Return Access Token
```

---

## Authentication Flow

### Registration

```text
Client
  ↓
POST /register
  ↓
FastAPI
  ↓
Pydantic Validation
  ↓
Check Existing Email
  ↓
bcrypt Password Hash
  ↓
SQLAlchemy
  ↓
MySQL
```

### Login

```text
Client
  ↓
POST /login
  ↓
FastAPI
  ↓
Validate Credentials
  ↓
Verify Password
  ↓
Generate JWT
  ↓
Return Access Token
```

### Protected Route

```text
Client
  ↓
Authorization: Bearer <JWT>
  ↓
JWT Validation
  ↓
Authenticated Request
  ↓
Protected Resource
```

---

# 🐳 Docker Setup

Docker Compose is used to run the current application stack locally.

## Start the application

```bash
docker compose up --build -d
```

Check running containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Stop the application:

```bash
docker compose down
```

---

# ☸️ Kubernetes Deployment

The current Kubernetes deployment uses separate resources for the application and database.

## 1. Create Namespace

```bash
kubectl apply -f k8s/namespace.yaml
```

## 2. Apply ConfigMap

```bash
kubectl apply -f k8s/configmap.yaml
```

## 3. Apply Secrets

```bash
kubectl apply -f k8s/auth-services/secret.yaml
```

## 4. Create Persistent Storage

```bash
kubectl apply -f k8s/mysql/pvc.yaml
```

## 5. Deploy MySQL

```bash
kubectl apply -f k8s/mysql/deployment.yaml
```

Create the MySQL service:

```bash
kubectl apply -f k8s/mysql/service.yaml
```

## 6. Deploy Authentication Service

```bash
kubectl apply -f k8s/auth-services/deployment.yaml
```

Create the service:

```bash
kubectl apply -f k8s/auth-services/service.yaml
```

## 7. Configure NGINX Ingress

```bash
kubectl apply -f k8s/ingress.yaml
```

---

## Verify Deployment

Check all resources:

```bash
kubectl get all -n devmart
```

Check pods:

```bash
kubectl get pods -n devmart
```

Check services:

```bash
kubectl get svc -n devmart
```

Check ingress:

```bash
kubectl get ingress -n devmart
```

---

# 🌐 Access the API

## Docker Compose

Swagger UI:

```text
http://localhost:8000/docs
```

## Kubernetes

Using the configured local ingress:

```text
http://devmart.local:8080/docs
```

The Swagger UI can be used to test the Authentication Service APIs.

---

# ⚙️ Configuration

Environment-specific configuration is managed through environment variables.

Typical configuration includes:

```env
DATABASE_URL=
SECRET_KEY=
ALGORITHM=
ACCESS_TOKEN_EXPIRE_MINUTES=
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
```

> ⚠️ Never commit real credentials, database passwords, JWT secrets, or other sensitive configuration to GitHub.

Use Kubernetes Secrets or environment-specific configuration for sensitive values.

---

# 🔄 Development Workflow

The current development workflow follows:

```text
Developer
    │
    ▼
Git / GitHub
    │
    ▼
Application Development
    │
    ▼
Docker Build
    │
    ▼
Docker Compose
    │
    ▼
Local Kubernetes
    │
    ▼
Testing & Validation
```

The architecture is intentionally being developed incrementally so that each infrastructure layer can be understood and tested before moving to the next stage.

---

#  Documentation

Additional project documentation is maintained under the `docs/` directory.

Current documentation areas include:

* Docker Guide
* Docker Compose Guide
* Kubernetes Guide
* API Documentation
* Architecture Documentation
* Troubleshooting Guide

---

#  Roadmap

DevMart is being developed in multiple phases.

## ✅ Phase 1 — Project Foundation

* [x] Initialize project structure
* [x] Set up Next.js frontend
* [x] Set up FastAPI backend
* [x] Configure MySQL
* [x] Implement Authentication Service
* [x] Implement JWT authentication
* [x] Implement password hashing
* [x] Dockerize Authentication Service
* [x] Configure Docker Compose
* [x] Create Kubernetes manifests
* [x] Configure Kubernetes Namespace
* [x] Configure ConfigMaps
* [x] Configure Secrets
* [x] Configure Persistent Volume Claim
* [x] Deploy MySQL on Kubernetes
* [x] Deploy Authentication Service on Kubernetes
* [x] Configure NGINX Ingress

---

##  Phase 2 — Core Microservices

* [ ] Product Service
* [ ] Order Service
* [ ] Inventory Service
* [ ] API Gateway
* [ ] Inter-service communication

---

##  Phase 3 — Frontend Integration

* [ ] Connect Next.js frontend with backend APIs
* [ ] Product management
* [ ] Product listing
* [ ] Shopping cart
* [ ] Order management
* [ ] User profile
* [ ] Protected frontend routes

---

##  Phase 4 — CI/CD & Automation

* [ ] GitHub Actions
* [ ] Automated testing
* [ ] Automated Docker image build
* [ ] Push images to container registry
* [ ] Automated Kubernetes deployment
* [ ] Environment-based deployments
* [ ] Health checks

---

##  Phase 5 — AWS Cloud Deployment

* [ ] AWS infrastructure
* [ ] Amazon ECR
* [ ] Amazon EKS
* [ ] Load Balancer
* [ ] HTTPS / TLS
* [ ] Domain configuration

---

##  Phase 6 — Monitoring & Observability

* [ ] Prometheus
* [ ] Grafana
* [ ] Application metrics
* [ ] Kubernetes metrics
* [ ] Log collection
* [ ] Alerting

---

##  Phase 7 — Production Readiness

* [ ] Horizontal Pod Autoscaling
* [ ] CPU / memory resource requests
* [ ] CPU / memory limits
* [ ] Rolling updates
* [ ] Liveness probes
* [ ] Readiness probes
* [ ] Security hardening
* [ ] Production deployment

---

# 🎯 Project Goals

The main goal of DevMart is to build practical experience with technologies commonly used in modern DevOps and cloud-native environments.

The project focuses on:

* Microservices architecture
* REST API development
* Authentication & authorization
* Containerization
* Docker networking
* Kubernetes orchestration
* Kubernetes networking
* Persistent storage
* Configuration management
* Secrets management
* CI/CD automation
* AWS cloud infrastructure
* Monitoring & observability
* Production deployment practices

---

# 🔮 Future Architecture

Once the planned services are implemented, the target architecture will evolve toward:

```text
                         ┌─────────────────┐
                         │      Users      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   Frontend      │
                         │    Next.js      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   API Gateway   │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
       ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
       │    Auth     │     │   Product   │     │    Order    │
       │   Service   │     │   Service   │     │   Service   │
       └──────┬──────┘     └──────┬──────┘     └──────┬──────┘
              │                   │                   │
              ▼                   ▼                   ▼
         ┌─────────┐         ┌─────────┐         ┌─────────┐
         │  MySQL  │         │  MySQL  │         │  MySQL  │
         └─────────┘         └─────────┘         └─────────┘

                         Kubernetes Cluster
                                  │
                  ┌───────────────┼───────────────┐
                  │               │               │
                  ▼               ▼               ▼
               CI/CD          Monitoring       Logging
             GitHub Actions   Prometheus       Future
                              Grafana
```

This architecture will be implemented incrementally as the project progresses.

---

# 🧪 Testing & Validation

The current Authentication Service can be tested using:

* Swagger UI
* Postman
* Docker Compose
* Kubernetes

Swagger provides an interactive interface for testing available API endpoints.

For Kubernetes troubleshooting, useful commands include:

```bash
kubectl get pods -n devmart
kubectl describe pod <pod-name> -n devmart
kubectl logs <pod-name> -n devmart
kubectl get svc -n devmart
kubectl get ingress -n devmart
```

---

# 🔒 Security Considerations

The current implementation includes:

* bcrypt password hashing
* JWT-based authentication
* Bearer token validation
* Kubernetes Secrets
* Environment-based configuration

Future security improvements will include:

* HTTPS/TLS
* Secure secret management
* Container image scanning
* Kubernetes security hardening
* Least-privilege access
* Network policies
* Production-grade authentication practices

---

# 👨‍💻 Author

**Md. Tahsinul Hoque Siddiki**

Computer Science Graduate | DevOps & Cloud Enthusiast

* GitHub: https://github.com/tahsinulhoque
* LinkedIn: https://www.linkedin.com/in/tahsinulhoque/
* Portfolio: https://tahsinulhoque.netlify.app/

---

>  **DevMart is an actively evolving project.**
> The architecture and roadmap will expand as additional microservices, automation, cloud infrastructure, and observability components are implemented.

---

⭐ **If you find this project useful, feel free to star the repository.**
