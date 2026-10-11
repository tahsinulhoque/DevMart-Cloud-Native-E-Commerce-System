
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
                    test -f backend/auth-service/requirements.txt
                    test -f backend/product-service/requirements.txt
                    test -f backend/order-service/requirements.txt

                    echo "Project structure validation passed."
                '''
            }
        }

        stage('Backend Syntax Check') {
            steps {
                echo 'Python syntax check deferred until a Python-capable build agent is configured.'
            }
        }

        stage('Pipeline Complete') {
            steps {
                echo 'DevMart CI validation completed successfully.'
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
