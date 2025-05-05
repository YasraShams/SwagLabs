pipeline {
  agent {
    docker {
      image 'cypress/browsers:node-18.12.0-chrome-107'
      args '-u root'
    }
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
