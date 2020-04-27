pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build --tag helloworld:$BUILD_NUMBER .'
            }
        }
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == 'SUCCESS' 
              }
              branch 'master'
            }
            steps {
                sh 'docker stop helloworld && docker rm helloworld'
                sh 'docker run --name helloworld -p 1337:1337 helloworld:$BUILD_NUMBER node /var/www/index.js &'
            }
        }
    }
}
