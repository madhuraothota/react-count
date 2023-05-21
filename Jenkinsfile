pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/madhuraothota/react-count', branch: 'dev')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit tests') {
          steps {
            sh 'cd madhuraothota/react-count && npm i && npm run test:unit'
          }
        }

      }
    }

  }
}