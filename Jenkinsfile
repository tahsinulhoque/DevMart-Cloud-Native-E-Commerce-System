
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate Project') {
            steps {
                sh '''
                    set -eu

                    test -f frontend/package.json
                    test -f frontend/package-lock.json
                    test -f backend/auth-service/requirements.txt
                    test -f backend/product-service/requirements.txt
                    test -f backend/order-service/requirements.txt

                    echo "Project structure validation passed."
                '''
            }
        }

        stage('Backend Syntax Check') {
            steps {
                sh '''
                    docker run --rm \
                        --volumes-from devmart-jenkins \
                        -w "$WORKSPACE" \
                        python:3.12-slim \
                        python -c "import ast,pathlib,sys; files=list(pathlib.Path('backend').rglob('*.py')); print(f'Checking {len(files)} Python files'); sys.exit('No Python files found') if not files else None; [ast.parse(p.read_text(encoding='utf-8'), filename=str(p)) for p in files]; print('Python syntax check passed')"
                '''
            }
        }

        stage('Frontend Build') {
            steps {
                sh '''
                    docker run --rm \
                        --volumes-from devmart-jenkins \
                        -w "$WORKSPACE/frontend" \
                        node:22-alpine \
                        sh -c "npm ci && npm run build"
                '''
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool 'SonarScanner'

                        sh """
                            "\${scannerHome}/bin/sonar-scanner" \
                                -Dsonar.projectKey=DevMart \
                                -Dsonar.projectName=DevMart \
                                -Dsonar.sources=frontend,backend \
                                -Dsonar.sourceEncoding=UTF-8
                        """
                    }
                }
            }
        }

        stage('Pipeline Complete') {
            steps {
                echo 'DevMart CI and SonarQube analysis completed successfully.'
            }
        }
    }

    post {
        success {
            echo 'DevMart CI pipeline passed.'
        }

        failure {
            echo 'Pipeline failed. Check Console Output.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
