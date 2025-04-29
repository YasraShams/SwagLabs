pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh '''
          docker run --rm \
            -v $PWD:/e2e \
            -w /e2e \
            cypress/included:13.11.0
        '''
      }
    }
  }
}
