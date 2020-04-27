pipeline {
    agent any

    stages {
        stage('Build & Deploy') {
            steps {
                sh 'docker build --tag helloworld:$BUILD_NUMBER .'
                sh 'docker stop helloworld && docker rm helloworld'
                sh 'docker run --name helloworld -p 1337:1337 helloworld:$BUILD_NUMBER node /var/www/index.js &'
            }
        }
    }
}
