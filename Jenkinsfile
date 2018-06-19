pipeline {
  agent {
    docker {
      image 'nginx:latest'
    }

  }
  stages {
    stage('teste') {
      steps {
        sh 'echo "test"'
      }
    }
  }
}