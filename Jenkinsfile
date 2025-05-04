pipeline {
    agent none

    stages {
        stage('Install dependencies') {
            agent {
                docker {
                    image 'cypress/browsers:node-18.12.0-chrome-107'
                    args '-v /dev/shm:/dev/shm'
                }
            }
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            agent {
                docker {
                    image 'cypress/browsers:node-18.12.0-chrome-107'
                    args '-v /dev/shm:/dev/shm'
                }
            }
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
