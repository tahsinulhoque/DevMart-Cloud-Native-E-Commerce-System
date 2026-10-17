pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
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
                // Network unstable hole 1 bar fail korle auto retry korbe.
                // npm cache volume thakay retry-te already download howa package abar download hobe na.
                retry(3) {
                    sh '''
                        set -eu

                        docker volume create devmart-npm-cache >/dev/null

                        docker run --rm \
                            --dns 8.8.8.8 --dns 1.1.1.1 \
                            -e NODE_OPTIONS=--dns-result-order=ipv4first \
                            --volumes-from devmart-jenkins \
                            -v devmart-npm-cache:/root/.npm \
                            -w "$WORKSPACE/frontend" \
                            node:22-alpine \
                            sh -c '
                                set -eu

                                npm ci \
                                    --prefer-offline \
                                    --no-audit \
                                    --no-fund \
                                    --maxsockets=2 \
                                    --fetch-retries=5 \
                                    --fetch-retry-mintimeout=20000 \
                                    --fetch-retry-maxtimeout=120000 \
                                    --fetch-timeout=120000

                                npm run build
                            '
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool 'SonarScanner'

                        sh """
                            "${scannerHome}/bin/sonar-scanner" \\
                                -Dsonar.projectKey=DevMart \\
                                -Dsonar.projectName=DevMart \\
                                -Dsonar.sources=frontend,backend \\
                                -Dsonar.exclusions=**/node_modules/**,**/.next/**,**/__pycache__/** \\
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