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

# 📚 Documentation

Detailed documentation for each component is available in the `docs/` directory.

| Document | Description |
|----------|-------------|
| [Docker Guide](docs/docker.md) | Docker image creation, container management, and common Docker commands. |
| [Docker Compose Guide](docs/docker-compose.md) | Multi-container setup, networking, and Docker Compose workflow. |
| [Kubernetes Guide](docs/kubernetes.md) | Complete Kubernetes deployment using Kind, ConfigMaps, Secrets, Deployments, Services, PVCs, Namespaces, and Ingress. |
| [API Documentation](docs/api.md) | Authentication API endpoints, request/response examples, and Swagger usage. |
| [Architecture](docs/architecture.md) | Project architecture, request flow, and infrastructure diagrams. |
| [Troubleshooting](docs/troubleshooting.md) | Common issues, debugging steps, and solutions encountered during development. |

# 🗺️ Roadmap

## ✅ Phase 1 – Project Foundation
- [x] Initialize Monorepo Project Structure
- [x] Set Up Next.js Frontend
- [x] Set Up FastAPI Backend
- [x] Configure MySQL Database
- [x] Implement Authentication Service
- [x] Dockerize Auth Service
- [x] Configure Docker Compose
- [x] Deploy Auth Service on Kubernetes
- [x] Configure ConfigMaps & Secrets
- [x] Configure Persistent Storage (PVC)
- [x] Expose Service using NGINX Ingress

---

## 🚧 Phase 2 – Core Microservices
- [ ] Product Service
- [ ] Order Service
- [ ] Inventory Service
- [ ] API Gateway
- [ ] Inter-Service Communication
---

## 🚧 Phase 3 – Frontend Integration
- [ ] Connect Frontend with Backend APIs
- [ ] Product Management
- [ ] Shopping Cart
- [ ] Order Management
- [ ] User Profile
- [ ] Protected Client Routes
---

## 🚧 Phase 4 – DevOps & Automation
- [ ] Multi-Service Kubernetes Deployment
- [ ] GitHub Actions CI/CD Pipeline
- [ ] Automated Docker Image Build
- [ ] Automated Kubernetes Deployment
- [ ] Environment-Based Configuration
- [ ] Kubernetes Health Checks
---

## 🚧 Phase 5 – Cloud Deployment
- [ ] Deploy to AWS
- [ ] Push Images to Amazon ECR
- [ ] Deploy on Amazon EKS
- [ ] Configure Load Balancer
- [ ] Configure HTTPS
- [ ] Configure Domain Name
---

## 🚧 Phase 6 – Monitoring & Observability
- [ ] Prometheus Monitoring
- [ ] Grafana Dashboards
- [ ] Application Metrics
- [ ] Kubernetes Monitoring
- [ ] Log Collection
- [ ] Alerting
---

## 🚧 Phase 7 – Production Readiness
- [ ] Horizontal Pod Autoscaling (HPA)
- [ ] Resource Limits & Requests
- [ ] Rolling Updates
- [ ] Liveness & Readiness Probes
- [ ] Security Hardening
- [ ] Production Deployment

# 👨‍💻 Author

**Md. Tahsinul Hoque Siddiki**

Aspiring DevOps & Cloud Engineer

- GitHub: https://github.com/tahsinulhoque
- LinkedIn: https://www.linkedin.com/in/tahsinulhoque/
- Email: tahsinulhoquesiddiki@gmail.com
- Portfolio: https://tahsinulhoque.netlify.app/


---

⭐ If you found this project helpful, consider giving it a star on GitHub.