pipeline {
    agent {
        label 'docker' // Specify the label of the node running Docker
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --headless --browser chrome'
            }
        }
    }
}

