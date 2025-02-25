pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = '971422704823'  // Replace with your AWS account ID
        AWS_REGION = 'us-east-1'  // Set your AWS region
        REPO_NAME = 'my_app'  // Your ECR repository name
        IMAGE_VERSION = '1.0-${BUILD_NUMBER}'  // Define a version (can be dynamically set)
        IMAGE_TAG = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:${IMAGE_VERSION}"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'develop', url: 'https://github.com/anye-web/backrose.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${REPO_NAME}:${IMAGE_VERSION} ."
                }
            }
        }

        stage('Authenticate to AWS ECR') {
            steps {
                script {
                    sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 971422704823.dkr.ecr.us-east-1.amazonaws.com"
                }
            }
        }

        stage('Tag and Push Image to ECR') {
            steps {
                script {
                    sh "docker tag ${REPO_NAME}:${IMAGE_VERSION} ${IMAGE_TAG}"
                    sh "docker push ${IMAGE_TAG}"
                }
            }
        }

        stage('Pull and Run Container from ECR') {
            steps {
                script {
                    // Stop and remove any running container
                    sh "docker stop ${REPO_NAME} || true"
                    sh "docker rm ${REPO_NAME} || true"
                    
                    // Pull the latest image from AWS ECR
                    sh "docker pull ${IMAGE_TAG}"
                    
                    // Run the container on port 45
                    sh "docker run -d -p 80:80 --name ${REPO_NAME} ${IMAGE_TAG}"
                }
            }
        }

        stage('Test App') {
            steps {
                script {
                    sh 'docker ps | grep ${REPO_NAME}'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
        failure {
            echo 'Deployment Failed'
        }
    }
}
