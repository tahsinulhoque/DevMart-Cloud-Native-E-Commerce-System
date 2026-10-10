# DevMart --- Secure CI/CD & DevSecOps Platform

> A cloud-native e-commerce platform evolving toward automated CI/CD,
> security scanning, Kubernetes orchestration, AWS deployment, GitOps,
> and observability.

**Repository:**
[`devmart-jenkins-devsecops`](https://github.com/tahsinulhoque/devmart-jenkins-devsecops)\
**Project status:** Active development\
**Primary CI/CD target:** Jenkins\
**Deployment target:** Amazon EKS (planned)\
**GitOps target:** Argo CD (planned)

------------------------------------------------------------------------

## Overview

DevMart is an evolving cloud-native e-commerce project used to practice
backend development, containerization, Kubernetes, CI/CD, DevSecOps, and
cloud infrastructure.

The current implementation includes a FastAPI Authentication Service
with JWT-based authentication, bcrypt password hashing, SQLAlchemy,
MySQL, Docker, Docker Compose, and local Kubernetes manifests. The
frontend and additional backend service directories are part of the
repository; full application integration and the wider production
architecture remain in progress.

The next phase is to make **Jenkins the primary CI/CD orchestrator**,
add code-quality and security gates, publish versioned container images
to Amazon ECR, and deploy to Amazon EKS. Argo CD is planned to manage
Kubernetes delivery through GitOps, while Prometheus and Grafana will
provide monitoring and dashboards.

> **Status note:** Tools and infrastructure marked *Planned* or *In
> progress* are target work, not claims of an already completed
> deployment.

## Table of Contents

-   [Current Implementation](#current-implementation)
-   [Target Architecture](#target-architecture)
-   [Technology Stack](#technology-stack)
-   [Repository Structure](#repository-structure)
-   [Authentication Service](#authentication-service)
-   [Run Locally with Docker Compose](#run-locally-with-docker-compose)
-   [Local Kubernetes](#local-kubernetes)
-   [Configuration and Secrets](#configuration-and-secrets)
-   [Jenkins CI/CD and DevSecOps Plan](#jenkins-cicd-and-devsecops-plan)
-   [AWS Deployment Plan](#aws-deployment-plan)
-   [GitOps with Argo CD](#gitops-with-argo-cd)
-   [Monitoring and Observability](#monitoring-and-observability)
-   [Security Principles](#security-principles)
-   [Roadmap](#roadmap)
-   [Testing and Troubleshooting](#testing-and-troubleshooting)
-   [Author](#author)

------------------------------------------------------------------------

## Current Implementation

### Implemented foundation

-   FastAPI Authentication Service
-   User registration and login endpoints
-   JWT token generation and validation
-   Password hashing with bcrypt
-   Protected API routes and HTTP Bearer authentication
-   SQLAlchemy ORM and Pydantic validation
-   MySQL integration
-   Dockerized authentication service
-   Docker Compose configuration for local development
-   Kubernetes manifests for namespace, application deployment, service,
    configuration, secrets, MySQL, persistent volume claim, and NGINX
    Ingress
-   Local routing configuration using `devmart.local`
    (environment-dependent)

### In progress / not yet confirmed as production-ready

-   Complete frontend-to-backend integration
-   Full e-commerce user flows
-   Automated CI/CD using Jenkins
-   Automated quality and security gates
-   AWS infrastructure and EKS deployment
-   GitOps delivery with Argo CD
-   Monitoring, alerting, and centralized logs

------------------------------------------------------------------------

## Target Architecture

The following diagram describes the **planned target architecture**, not
a currently deployed production environment.

``` text
Developer
   |
   v
GitHub Repository (monorepo)
   |
   | push / pull request
   v
Jenkins Pipeline (Jenkinsfile)
   |
   +--> Checkout and change detection
   +--> Build and automated tests
   +--> SonarQube analysis and Quality Gate
   +--> OWASP Dependency-Check
   +--> Trivy filesystem / configuration scan
   +--> Build container images
   +--> Trivy container image scan
   |
   | required checks pass
   v
Amazon ECR (versioned container images)
   |
   v
Deployment configuration / GitOps repository
   |
   v
Argo CD (planned)
   |
   v
Amazon EKS (planned Kubernetes runtime)
   |
   +--> Frontend workload (when integrated)
   +--> Authentication Service
   +--> Additional services as they are implemented
   +--> Ingress / AWS Load Balancer
   +--> Database (Amazon RDS for MySQL is the preferred production option)
   |
   v
Prometheus + Grafana + Kubernetes metrics
   |
   +--> Dashboards and alerts
   +--> AWS CloudWatch for AWS/platform logs and metrics where configured
```

### Pipeline responsibilities

  -----------------------------------------------------------------------
  Component               Responsibility          Status
  ----------------------- ----------------------- -----------------------
  GitHub                  Source control and pull Implemented
                          requests                

  Jenkins                 CI orchestration        Planned
                          through `Jenkinsfile`   

  SonarQube               Static analysis and     Planned
                          Quality Gate            

  OWASP Dependency-Check  Dependency              Planned
                          vulnerability analysis  

  Trivy                   Filesystem and          Planned
                          container image         
                          scanning                

  Docker                  Build container images  Local containerization
                                                  implemented; CI image
                                                  pipeline planned

  Amazon ECR              Store versioned         Planned
                          container images        

  Amazon EKS              Run Kubernetes          Planned
                          workloads on AWS        

  Argo CD                 Reconcile Kubernetes    Planned
                          desired state from Git  

  Prometheus              Collect metrics         Planned

  Grafana                 Dashboards and          Planned
                          visualization           

  CloudWatch              AWS logs and metrics    Planned
                          where configured        
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Technology Stack

  -----------------------------------------------------------------------
  Area                    Technologies            Status
  ----------------------- ----------------------- -----------------------
  Frontend                Next.js, TypeScript,    Present in repository;
                          Tailwind CSS            integration work
                                                  remains

  Backend                 Python, FastAPI,        Authentication service
                          SQLAlchemy, Pydantic    implemented

  Authentication          JWT, bcrypt, HTTP       Implemented for
                          Bearer                  authentication service

  Database                MySQL                   Local integration
                                                  implemented

  Containers              Docker, Docker Compose  Local setup implemented

  Orchestration           Kubernetes, kubectl,    Local Kubernetes
                          Kind, NGINX Ingress     foundation implemented

  CI/CD                   Jenkins, Jenkinsfile    Planned

  Code quality            SonarQube, Quality Gate Planned

  Dependency security     OWASP Dependency-Check  Planned

  Container / filesystem  Trivy                   Planned
  security                                        

  Registry                Amazon ECR              Planned

  Cloud Kubernetes        Amazon EKS              Planned

  Infrastructure as Code  Terraform               Planned

  GitOps                  Argo CD                 Planned

  Monitoring              Prometheus, Grafana,    Planned
                          Node Exporter,          
                          kube-state-metrics      

  AWS observability       CloudWatch              Planned
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Repository Structure

The structure below reflects the repository's main areas. Individual
services and manifests should be checked in the working tree before
assuming every planned component is complete.

``` text
devmart-jenkins-devsecops/
├── frontend/
├── backend/
│   ├── auth-service/
│   ├── product-service/        # Verify implementation status
│   └── order-service/          # Verify implementation status
├── k8s/
│   ├── auth-services/
│   ├── mysql/
│   ├── namespace.yaml
│   ├── configmap.yaml
│   ├── ingress.yaml
│   └── .gitignore
├── docs/
├── docker-compose.yml
├── .gitignore
├── Jenkinsfile                 # To be added
└── README.md
```

Do not commit local `.env` files or real credentials. If a file such as
`k8s/secret.yaml` contains real values, remove those values from version
control and replace them with a safe example or a secret-management
approach before publishing.

------------------------------------------------------------------------

## Authentication Service

The Authentication Service is the first documented backend service in
DevMart.

### Main responsibilities

-   Register a user
-   Validate input
-   Check email uniqueness
-   Hash passwords with bcrypt
-   Store user data through SQLAlchemy and MySQL
-   Authenticate login requests
-   Generate JWT access tokens
-   Validate bearer tokens for protected endpoints

### Typical request flow

``` text
Registration:
Client -> POST /register -> Validate input -> Hash password
       -> Store user in MySQL -> Return response

Login:
Client -> POST /login -> Validate credentials
       -> Verify password -> Generate JWT -> Return token

Protected endpoint:
Client -> Authorization: Bearer <JWT>
       -> Validate token -> Authorize request
```

Use the service's actual API routes and configuration as the source of
truth; endpoint names can differ between implementations.

------------------------------------------------------------------------

## Run Locally with Docker Compose

Run these commands from the repository root, where `docker-compose.yml`
is located.

### Start services

``` bash
docker compose up --build -d
```

### Inspect containers

``` bash
docker compose ps
```

### Follow logs

``` bash
docker compose logs -f
```

### Stop services

``` bash
docker compose down
```

Review the Compose file and required environment variables before
starting the stack. Do not publish passwords or tokens from local
environment files in logs, screenshots, or documentation.

------------------------------------------------------------------------

## Local Kubernetes

The repository includes Kubernetes manifests for local deployment.
Validate each manifest against the current cluster and configuration
before applying it.

Typical workflow (run from the repository root):

``` bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
```

Apply the appropriate Secret securely, then create database storage and
database resources if those manifests are present and intended for your
local environment:

``` bash
kubectl apply -f k8s/mysql/pvc.yaml
kubectl apply -f k8s/mysql/deployment.yaml
kubectl apply -f k8s/mysql/service.yaml
kubectl apply -f k8s/auth-services/deployment.yaml
kubectl apply -f k8s/auth-services/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Verify resources

``` bash
kubectl get pods -n devmart
kubectl get svc -n devmart
kubectl get ingress -n devmart
kubectl describe pod <pod-name> -n devmart
kubectl logs <pod-name> -n devmart
```

These commands assume the namespace and manifest paths match the current
repository. Confirm names and paths before running them.

A local URL such as `http://devmart.local:8080/docs` works only if local
Ingress, port mapping, and host-file configuration are set up
accordingly.

------------------------------------------------------------------------

## Configuration and Secrets

The application may use environment variables such as:

``` env
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

Use a local `.env` file only for local development and ensure it is
ignored by Git. Commit a sanitized `.env.example` if needed, containing
placeholders only.

**Never commit real credentials, database passwords, JWT secrets, AWS
keys, registry credentials, or Kubernetes secret values.** For CI/CD,
use Jenkins Credentials and AWS IAM roles or short-lived credentials
where supported. For Kubernetes, use an appropriate secret-management
solution and least-privilege access.

------------------------------------------------------------------------

## Jenkins CI/CD and DevSecOps Plan

Jenkins will be the **primary CI/CD orchestrator**. The `Jenkinsfile`
will be stored at the repository root and will define the pipeline.

### Proposed stages

1.  **Checkout** --- retrieve the selected Git revision.
2.  **Change detection** --- identify whether frontend, backend, or
    shared configuration changed (an optimization to add after the basic
    pipeline works).
3.  **Build and test** --- run the appropriate frontend and backend
    checks.
4.  **SonarQube analysis** --- analyze supported source code.
5.  **Quality Gate** --- stop the pipeline if the configured gate fails.
6.  **OWASP Dependency-Check** --- scan supported dependency manifests
    and publish the report.
7.  **Trivy filesystem/configuration scan** --- scan source and
    supported configuration files.
8.  **Docker build** --- build images for services that have validated
    Dockerfiles.
9.  **Trivy image scan** --- scan each built image before publishing.
10. **Publish to ECR** --- push versioned images only when required
    checks pass.
11. **Update deployment configuration** --- update the intended image
    tag in the GitOps/deployment configuration.
12. **Verify delivery** --- Argo CD and/or deployment checks confirm the
    desired state is healthy.

### Security gate policy

Define thresholds deliberately. For example, the pipeline can fail on a
failed SonarQube Quality Gate or on vulnerabilities that meet an agreed
severity threshold. Start with report-only scans if necessary to
understand existing findings, then enforce blocking policies after
reviewing and documenting the baseline.

Do not place secrets directly in the `Jenkinsfile`. Use Jenkins
Credentials, scoped permissions, and secure agent configuration.

> Jenkins integration and these scans are planned until the pipeline has
> been implemented and successfully run.

------------------------------------------------------------------------

## AWS Deployment Plan

The intended AWS path is **Amazon ECR + Amazon EKS**, provisioned and
managed with Terraform where practical.

### High-level sequence

1.  Design the AWS network and access model: VPC, subnets, security
    groups, IAM roles, and required endpoints.
2.  Create ECR repositories for each deployable service.
3.  Create an EKS cluster and configure worker capacity and access
    controls.
4.  Configure Jenkins access to AWS using least-privilege IAM
    permissions or short-lived credentials.
5.  Build and scan images, then publish immutable/versioned tags to ECR.
6.  Update Kubernetes deployment configuration to reference the
    published image tags.
7.  Deploy through Argo CD after GitOps configuration is in place, or
    use a temporary controlled deployment method during initial
    validation.
8.  Verify rollout health, application endpoints, logs, and rollback
    procedures.

### Database decision

The existing local Kubernetes setup includes MySQL and persistent
storage. For an AWS deployment, Amazon RDS for MySQL is the preferred
production-oriented option to evaluate. Keeping MySQL inside EKS can be
useful for learning, but requires deliberate storage, backup, recovery,
upgrades, and availability planning.

### Operational and cost considerations

EKS, compute, load balancers, NAT gateways, ECR storage, and monitoring
can incur charges. Use a small learning environment, set billing alerts,
avoid exposing cluster endpoints unnecessarily, and delete disposable
resources when finished. Check persistence and backups before destroying
infrastructure.

------------------------------------------------------------------------

## GitOps with Argo CD

Argo CD is planned as the continuous delivery controller for Kubernetes.

**Intended responsibility split:**

-   **Jenkins:** test code, run quality/security checks, build images,
    publish to ECR, and update the intended deployment configuration.
-   **Git:** store the desired Kubernetes configuration and image
    version.
-   **Argo CD:** observe Git and synchronize the desired configuration
    to EKS.
-   **EKS:** run the application workloads.

Avoid having Jenkins and Argo CD independently manage the same
deployment in competing ways. Once Argo CD owns delivery, Jenkins should
generally update Git rather than directly applying the same application
manifests to the cluster.

------------------------------------------------------------------------

## Monitoring and Observability

The planned monitoring stack is:

  Tool                 Intended purpose
  -------------------- ---------------------------------------------------
  Prometheus           Scrape and store metrics
  Grafana              Dashboards and visualization
  Node Exporter        Host/node metrics where applicable
  kube-state-metrics   Kubernetes object-state metrics
  Alertmanager         Route alerts from Prometheus
  AWS CloudWatch       AWS service metrics and configured log collection

### Planned implementation sequence

1.  Deploy the application to a working Kubernetes environment.
2.  Install a compatible monitoring stack, for example through Helm.
3.  Confirm Prometheus targets and metric availability.
4.  Configure Grafana dashboards for nodes, pods, workloads, and
    application metrics.
5.  Add alerts for unavailable workloads and selected resource
    thresholds.
6.  Configure log collection and retention appropriate to the
    environment.
7.  Document dashboards, alerts, and test evidence.

Monitoring is not complete until the data sources, dashboards, and
alerts have been validated in the target environment.

------------------------------------------------------------------------

## Security Principles

-   Keep real `.env` files and credentials out of Git.
-   Use least-privilege IAM and Kubernetes RBAC.
-   Use TLS for public endpoints when deployed.
-   Scan dependencies, filesystem/configuration, and container images.
-   Pin and version container images; avoid relying on mutable tags for
    releases.
-   Configure resource requests, limits, and health probes for
    workloads.
-   Restrict network access and cluster/API exposure.
-   Review Kubernetes Secrets handling; base64 encoding alone is not
    encryption.
-   Document scan findings and the chosen remediation or exception
    policy.
-   Back up persistent data before migrations or destructive
    infrastructure operations.

------------------------------------------------------------------------

## Roadmap

### Phase 1 --- Existing application foundation

-   [x] Repository structure and GitHub version control
-   [x] FastAPI Authentication Service foundation
-   [x] JWT authentication and password hashing
-   [x] MySQL integration for authentication
-   [x] Docker and Docker Compose foundation
-   [x] Local Kubernetes manifest foundation
-   [ ] Validate all current manifests and document reproducible local
    startup

### Phase 2 --- Application integration

-   [ ] Complete and verify product/order service functionality
-   [ ] Connect the Next.js frontend to backend APIs
-   [ ] Implement and test core shopping and order flows
-   [ ] Add repeatable automated tests

### Phase 3 --- Jenkins CI

-   [ ] Configure Jenkins and repository trigger
-   [ ] Add root-level `Jenkinsfile`
-   [ ] Automate frontend/backend build and tests
-   [ ] Publish build and test reports

### Phase 4 --- DevSecOps controls

-   [ ] Integrate SonarQube analysis and Quality Gate
-   [ ] Integrate OWASP Dependency-Check
-   [ ] Integrate Trivy filesystem/configuration scanning
-   [ ] Integrate Docker image scanning with Trivy
-   [ ] Define and document failure thresholds
-   [ ] Secure Jenkins credentials and permissions

### Phase 5 --- AWS and container registry

-   [ ] Provision required AWS infrastructure with Terraform
-   [ ] Configure Amazon ECR repositories and image publishing
-   [ ] Provision Amazon EKS
-   [ ] Validate AWS-compatible manifests, storage, networking, and
    secrets
-   [ ] Configure ingress/load balancing and HTTPS
-   [ ] Decide and document the database deployment approach

### Phase 6 --- GitOps delivery

-   [ ] Configure Argo CD
-   [ ] Store deployment configuration in Git
-   [ ] Automate image-tag/configuration updates
-   [ ] Validate synchronization, health checks, and rollback

### Phase 7 --- Monitoring and production readiness

-   [ ] Deploy Prometheus and Grafana
-   [ ] Add Kubernetes and application metrics
-   [ ] Configure dashboards and alerts
-   [ ] Configure log collection
-   [ ] Add resource requests/limits and health probes
-   [ ] Review autoscaling, backup/recovery, access controls, and cost
-   [ ] Capture final test evidence and update documentation

------------------------------------------------------------------------

## Testing and Troubleshooting

Useful commands for local validation:

``` bash
docker compose ps
docker compose logs -f
kubectl get pods -n devmart
kubectl describe pod <pod-name> -n devmart
kubectl logs <pod-name> -n devmart
kubectl get svc -n devmart
kubectl get ingress -n devmart
git status
git log -5 --oneline
```

Before reporting a feature as complete, verify it in the actual
environment and record the relevant output or screenshot. Keep README
status labels synchronized with the implementation.

------------------------------------------------------------------------

## Author

**Md. Tahsinul Hoque Siddiki**\
Computer Science Graduate \| DevOps & Cloud Enthusiast

-   GitHub: [tahsinulhoque](https://github.com/tahsinulhoque)
-   LinkedIn:
    [tahsinulhoque](https://www.linkedin.com/in/tahsinulhoque/)
-   Portfolio:
    [tahsinulhoque.netlify.app](https://tahsinulhoque.netlify.app/)

------------------------------------------------------------------------

> DevMart is an actively evolving portfolio project. The AWS, Jenkins,
> DevSecOps, GitOps, and monitoring components will be marked as
> implemented only after they are configured, tested, and documented.

⭐ If you find this project useful, feel free to star the repository.
