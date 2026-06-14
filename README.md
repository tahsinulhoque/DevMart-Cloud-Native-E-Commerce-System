# 🚀 DevMart Cloud-Native E-Commerce Platform

A cloud-native e-commerce platform built to gain hands-on experience with modern backend development, DevOps practices, containerization, and cloud-native architecture.

The goal of this project is not only to build an e-commerce application, but also to understand how modern applications are developed, containerized, deployed, monitored, and managed in production environments.

---

## 📌 Project Goals

This project is being developed to explore:

* Backend Development with FastAPI
* MySQL Database Integration
* Service-Oriented Architecture
* Docker Containerization
* Kubernetes Deployment
* CI/CD Automation
* Cloud Deployment on AWS
* Monitoring and Observability

---

## ✅ Current Progress

### Frontend

* Next.js Application Setup
* Responsive UI Design
* Home Page
* Products Page
* Orders Page
* Profile Page
* Login Page
* Register Page
* Reusable Components
* Navigation System

### Backend

* FastAPI Auth Service Setup
* Backend Service Structure Initialized
* Prepared Service Separation for:

  * Auth Service
  * Product Service
  * Order Service

### Database

* MySQL Running in Docker
* SQLAlchemy Integration
* User Model Created
* Users Table Successfully Generated

### DevOps

* Dockerized Database Environment
* Git-Based Development Workflow
* Monorepo Project Structure

---

## 🏗️ Project Structure

```text
devmart-platform/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── auth-service/
│   │   ├── app/
│   │   ├── tests/
│   │   ├── requirements.txt
│   │   └── Dockerfile
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

## 🛠️ Technology Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Backend

* FastAPI
* SQLAlchemy
* Pydantic

### Database

* MySQL

### DevOps

* Docker

---

## 🐳 Docker Setup

Start MySQL Container:

```bash
docker compose up -d
```

Check Running Containers:

```bash
docker ps
```

---

## 🔄 Current Development Phase

The project is currently focused on implementing authentication features:

* User Registration API
* Login API
* Password Hashing
* JWT Authentication

---

## 🎯 Upcoming Milestones

### Backend

* Registration Endpoint
* Login Endpoint
* JWT Authentication
* Product Service Development
* Order Service Development

### DevOps

* Docker Compose for All Services
* GitHub Actions CI/CD Pipeline
* Kubernetes Deployments
* Kubernetes Services
* Ingress Configuration

### Cloud

* AWS Deployment
* Monitoring with Prometheus
* Grafana Dashboards

---

## 📚 Learning Objectives

This project is being built to gain practical experience with:

* Backend Development
* Database Design
* API Development
* Containerization
* Infrastructure Automation
* CI/CD Workflows
* Cloud-Native Application Architecture

---

## 📈 Project Status

🚧 Active Development

The project is currently under active development and new features are being added continuously.

---

## 👨‍💻 Author

**Md. Tahsinul Hoque Siddiki**

Aspiring DevOps & Cloud Engineer

GitHub:
https://github.com/tahsinulhoque
