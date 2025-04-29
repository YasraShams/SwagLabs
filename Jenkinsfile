pipeline {
    agent none  // Tells Jenkins not to use the default agent

    stages {
        stage('Install dependencies') {
            agent {
                docker {
                    image 'cypress/browsers:node-18.12.0-chrome-107'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'  // Allow Docker in Docker
                }
            }
            steps {
                sh 'npm ci'  // Install dependencies using npm
            }
        }

        stage('Run Cypress Tests') {
            agent {
                docker {
                    image 'cypress/browsers:node-18.12.0-chrome-107'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'  // Allow Docker in Docker
                }
            }
            steps {
                sh 'npx cypress run'  // Run Cypress tests
            }
        }
    }
}
