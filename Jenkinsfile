pipeline {
  agent {
    docker {
      image 'nginx'
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