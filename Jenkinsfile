pipeline {
  agent any
  tools { nodejs "node" }
  
  stages {
    stage('Clone git') {
      steps {
        git 'https://github.com/alexkaufman06/wdio.git'
      }
    }
      
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
      
    stage('Run selenium automation') {
      steps {
        sh 'npm run test'
      }
    }
  }
  
  post {
    always {
      emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
      recipientProviders: [[$class: 'DevelopersRecipientProvider'], 
      [$class: 'RequesterRecipientProvider']],
      subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"
    }
  }
}