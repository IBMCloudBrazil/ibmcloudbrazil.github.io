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
        sh '''print "Build"
curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \\
&& tar xzvf docker-17.04.0-ce.tgz \\
&& mv docker/docker /usr/local/bin \\
&& rm -r docker docker-17.04.0-ce.tgz
'''
      }
    }
  }
}