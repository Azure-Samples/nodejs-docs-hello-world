pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build --tag helloworld:$BUILD_NUMBER .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop helloworld && docker rm helloworld'
                sh 'docker run --name helloworld -p 1337:8080 helloworld:$BUILD_NUMBER node index.js &'
            }
        }
    }
}
