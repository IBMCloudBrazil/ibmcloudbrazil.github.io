pipeline {
  agent {
    docker {
      image 'nginx:latest'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'print "Build"'
      }
    }
  }
}