
pipeline {
  agent any

  stages {
    stage ('Clone Repo'){
      steps {
        git 'https://github.com/anye-web/backrose.git'
      }
    }

    stage ('Build Docker Image'){
      steps{
        script{
        sh 'docker build -t backrose-app .'
      }
      }
    }

    stage ('Run Container'){
      steps{
        script{
          sh 'docker stop backrose-app || true'
          sh 'docker rm backrose-app || true'
          sh 'docker run -d -p 80:80 --name backrose-app backrose-app'
        }
      }
    }

    stage ('Test App'){
      steps{
        script{
          sh 'docker ps | grep backrose-app'
        }
      }
    }

   
  }

   post{
      success{
        echo 'Deployment Successful'
      }
      failure{
        echo 'Deployment Failed'
      }
    }
}
