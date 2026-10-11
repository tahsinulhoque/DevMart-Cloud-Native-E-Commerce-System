
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        FRONTEND_DIR = 'frontend'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'DevMart source code checked out.'
            }
        }

        stage('Validate Project') {
            steps {
                sh '''
                    test -f frontend/package.json
                    test -f backend/auth-service/requirements.txt
                    test -f backend/product-service/requirements.txt
                    test -f backend/order-service/requirements.txt
                    echo "Project structure validation passed."
                '''
            }
        }

        stage('Frontend Build') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$WORKSPACE/frontend:/app" \
                      -w /app \
                      node:22-alpine sh -c \
                      "npm ci && npm run build"
                '''
            }
        }

        stage('Backend Syntax Check') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$WORKSPACE/backend:/app" \
                      -w /app \
                      python:3.12-slim \
                      python -m compileall -q .
                '''
            }
        }

        stage('Security Scanning') {
            steps {
                echo 'Security scanners will be integrated next.'
            }
        }
    }

    post {
        success {
            echo 'DevMart CI pipeline completed successfully.'
        }
        failure {
            echo 'DevMart CI pipeline failed. Check the stage logs.'
        }
        always {
            echo 'Pipeline execution finished.'
        }
    }
}
