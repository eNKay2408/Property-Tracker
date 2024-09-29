pipeline {
  agent any

  tools {
    nodejs "20.10"
  }

  triggers {
    pollSCM "* * * * *"
  }

  environment {
    EC2_HOST_IP=credentials("ec2-host-ip")
    EC2_SSH_KEY=credentials("ec2-ssh-key")
    EC2_USER="ec2-user"

    DOCKERHUB=credentials("dockerhub-access")
    IMAGE_CLIENT="enkay2408/property-tracker-client"
    IMAGE_SERVER="enkay2408/property-tracker-server"
    CONTAINER_CLIENT="property-tracker-client"
    CONTAINER_SERVER="property-tracker-server"

    CLIENT_ENV_FILE=credentials("client-env-file")
    SERVER_ENV_FILE=credentials("server-env-file")
  }

  stages {
    stage("Create .env file") {
      steps {
        sh "cp $CLIENT_ENV_FILE client/.env"
        sh "cp $SERVER_ENV_FILE server/.env"

        sh "chmod 600 client/.env server/.env"
      }
    }

    stage("Build app") {
      steps {
        dir("client") {
          sh "npm install"
          sh "npm run build"
        }
        dir("server") {
          sh "npm install"
        }
      }
    }

    stage("Build Docker images") {
      steps {
        sh """
          docker login -u $DOCKERHUB_USR -p $DOCKERHUB_PSW

          docker build -t $IMAGE_CLIENT client
          docker build -t $IMAGE_SERVER server

          docker push $IMAGE_CLIENT
          docker push $IMAGE_SERVER
        """
      }
    }

    stage("Deploy to EC2") {
      steps {
        sh """
          ssh -o StrictHostKeyChecking=no -i $EC2_SSH_KEY $EC2_USER@$EC2_HOST_IP '
            docker rm -f $CONTAINER_CLIENT || true
            docker rm -f $CONTAINER_SERVER || true

            docker rmi $IMAGE_CLIENT || true
            docker rmi $IMAGE_SERVER || true

            docker run -dp 5173:80 --name $CONTAINER_CLIENT $IMAGE_CLIENT
            docker run -dp 3000:3000 --name $CONTAINER_SERVER $IMAGE_SERVER
          '
        """
      }
    }
  }
}