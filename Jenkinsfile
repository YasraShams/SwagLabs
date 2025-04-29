pipeline {
  agent {
    docker {
      image 'cypress/browsers:node-18.12.0-chrome-107'
      args '-v /var/run/docker.sock:/var/run/docker.sock' // Allow Docker to run inside container
    }
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci' // Install dependencies using npm
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run' // Run Cypress tests
      }
    }
  }
}
