<div align="center">
  
  # 🏬 Property Tracker

  *A MERN stack application for managing and analyzing property listings* 📈

  ![ReactJS](https://img.shields.io/badge/React_JS-white?style=for-the-badge&logo=React&logoColor=61DAFB)
  ![Material UI](https://img.shields.io/badge/Material_UI-white?style=for-the-badge&logo=MUI&logoColor=007FFF)
  ![Refine](https://img.shields.io/badge/Refine-white?style=for-the-badge&logo=refine&logoColor=14141F)

  ![NodeJS](https://img.shields.io/badge/Node_JS-black?style=for-the-badge&logo=Node.js&logoColor=5FA04E)
  ![ExpressJS](https://img.shields.io/badge/Express_JS-black?style=for-the-badge&logo=express&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-black?style=for-the-badge&logo=MongoDB&logoColor=47A248)
  
  ![Docker](https://img.shields.io/badge/Docker-0A2647?style=for-the-badge&logo=Docker&logoColor=2496ED)
  ![Jenkins](https://img.shields.io/badge/Jenkins/CD-0A2647?style=for-the-badge&logo=Jenkins&logoColor=eadbc0)
  ![AWS EC2](https://img.shields.io/badge/AWS_EC2-0A2647?style=for-the-badge&logo=amazonwebservices&logoColor=FF9900)

  <img width="595px" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331059/PropertyTracker/Screenshot/1-Dashboard.png">

  [![Live Demo](https://img.shields.io/badge/🔗_Visit_website-white?style=flat)](https://property-tracker.enkay.live)

</div>

## 📘 Table of Contents
1. [Introduction](#introduction) 🧟
2. [Technologies](#technologies) 💻
3. [Features](#features) 🔎
4. [DevOps](#devops) ✈️
5. [Acknowledgements](#acknowledgements) 💙
6. [Contact](#contact) 🌐

## 🧟 <a name="introduction">Introduction</a>
*Welcome to Property Tracker, the **2nd** of 4 major projects I’ve built as part of my journey to create a strong portfolio for my first job application. As this is one of my first major project README files, some mistakes are to be expected. If you encounter any issues or need further support, please don't hesitate to reach out via the contact information below. I truly appreciate your understanding and thank you so much for taking the time to visit this project!* 😚

This project challenged me to tackle numerous compatibility issues with Refine. I still vividly remember spending an exhausting 10 hours, from 2 PM to midnight, just to set up the first 20 minutes of the tutorial video. It was truly a nightmare for me, haha! However, things became much easier after a few days as I got accustomed to building the front-end from my first project. The back-end was relatively straightforward for me, thanks to my prior exposure to it through freeCodeCamp.

I have truly learned a lot through this project, particularly in troubleshooting compatibility errors and adapting to new technologies like Refine and Material UI. Additionally, I witnessed the power of these technologies, as Refine automates most of the basic tasks seamlessly. This project also provided me the opportunity to review my back-end knowledge with Express and MongoDB, solidifying my understanding of these essential tools.

## 💻 <a name="technologies">Technologies</a>

<div align="center">
  
  ![Technologies](https://skillicons.dev/icons?i=react,materialui,nodejs,express,mongodb,docker,jenkins,aws)

</div>

- **ReactJS:** Used to build dynamic user interfaces with reusable components.
- **Material UI:** Provides modern and responsive design components.
- **Refine:** Accelerate development with pre-built React components and hooks.
- **NodeJS:** Serves as the runtime environment for server-side JavaScript.
- **ExpressJS:** Create RESTful APIs to handle client-server communication.
- **MongoDB:** Store and manage application data in a NoSQL database.
- **Docker:** Containerize the application for consistent deployment across environments.
- **Jenkins:** Automate the build and deployment processes.
- **AWS EC2:** Host and run the application on scalable cloud infrastructure.

## 🔎 <a name="features">Features</a>

**🔷 Dashboard Visualization:** View key metrics, revenue statistics, referral progress, and hot properties.

**🔷 List of Properties:** Display and manage property lists with sorting, filtering and pagination options.

**🔷 Property Creation:** Create new properties with detailed information and image uploads.

**🔷 Property Details:** View comprehensive details with options to edit or delete the property.

**🔷 List of Agents:** Display a list of real estate agents with general information and representative images.

**🔷 Agent Details:** View detailed agent information including contact details and property listings.


<img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331059/PropertyTracker/Screenshot/1-Dashboard.png" alt="Dashboard"> <img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331069/PropertyTracker/Screenshot/2-Properties.png" alt="Properties">

<img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331059/PropertyTracker/Screenshot/3-Create.png" alt="Property Creation"> <img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331072/PropertyTracker/Screenshot/4-Details.png" alt="Property Details">

<img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331061/PropertyTracker/Screenshot/5-Agents.png" alt="Agents"> <img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727331061/PropertyTracker/Screenshot/6-Profile.png" alt="Profile">

## ✈️ <a name="devops">DevOps</a>

### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [AWS](https://aws.amazon.com/)

### 🖥️ Development 

#### 1. Clone the repository:
```
https://github.com/eNKay2408/Property-Tracker.git
cd Property-Tracker
```

#### 2. Install dependencies:
```
cd client
npm install

cd server
npm install
```

#### 3. Set Up Environment Variables:
- Create a `.env` file in the `client` directory and add the following environment variables:
  ```
  VITE_APP_GOOGLE_CLIENT_ID=your_google_client_id
  VITE_API_URL=http://localhost:3000/api/v1
  ```

- Create a `.env` file in the `server` directory and add the following environment variables:
  ```
  MONGODB_URI=your_mongodb_uri

  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  ```
- Some useful resources to get the environment variables:
  - [Google OAuth](https://www.youtube.com/watch?v=HtJKUQXmtok)
  - [MongoDB Atlas](https://www.youtube.com/watch?v=SMXbGrKe5gM)
  - [Cloudinary](https://www.youtube.com/watch?v=MMPHybpGXDc)

#### 4. Start the development, run parallel in two terminals:
```
cd client
npm run dev

cd server
npm run start
```

#### 5. See the changes reflected in real-time:
- Navigate to [http://localhost:5173](http://localhost:5173) to view the application.
- Navigate to [http://localhost:3000/api/v1](http://localhost:3000/api/v1) to view the API. Example endpoints: `/api/v1/properties`, `/api/v1/users`.

### 🔄 CI/CD - Jenkins

#### 1. Create Github repository and add remote URL to the local repository.

#### 2. Set up AWS EC2 instance:
- Launch an EC2 instance with the following configurations: Amazon Linux, t2.micro (free tier eligible) and open port `22`, `80`, `443` in the security group.

- Connect to the instance directly or [using SSH](https://www.youtube.com/watch?v=8UqtMcX_kg0) and install Docker and nginx on the server:
  ```
  sudo yum update -y
  sudo amazon-linux-extras install docker
  sudo systemctl start docker
  sudo systemctl enable docker
  sudo systemctl status docker
  sudo usermod -a -G docker ec2-user

  sudo yum install nginx
  sudo systemctl start nginx
  sudo systemctl enable nginx
  sudo systemctl status nginx
  ```

- Configure Nginx to reverse proxy the application to port `5173`. Follow the [tutorial video](https://www.youtube.com/watch?v=B62QSbPhh1s) for detailed instructions.
- Also, configure Nginx to serve the API on port `3000`. Simply add the following configuration to the `*.conf` file.
  ```
  location / {
    proxy_pass http://localhost:5173;
  }
  location /api/v1 {
    proxy_pass http://localhost:3000;
  }
  ```

#### 3. Run Jenkins on the local machine (You can also run Jenkins using other methods):
- Run Jenkins locally using Docker:
  ```
  docker run --name jenkins \ 
  -p 8080:8080 -p 50000:50000 \ 
  -v /var/run/docker.sock:/var/run/docker.sock \ 
  -v jenkins_home:/var/jenkins_home \ 
  jenkins/jenkins:lts-jdk17
  ```

- **Important** get the Docker group ID on the host machine:
  ```
  cat /etc/group | grep docker
  ```

- Install Docker CLI and add permission for Jenkins user to run Docker commands (DinD):
  ```
  docker exec -u root -it jenkins bash
  apt update
  apt install docker.io
  docker --version

  groupdel docker
  groupadd -g <DOCKER_GROUP_ID_ON_HOST> docker
  usermod -a -G docker jenkins
  ```

- Exit and restart the Jenkins container.

#### 4. Configure Jenkins:
- Get the initial admin password from the Jenkins container:
  ```
  docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
  ```

- Open [Jenkins](http://localhost:8080) on the browser, login and install the recommended plugins.

- Install `NodeJS` plugin and then go to Tools Configuration > NodeJS > Add NodeJS and set the name to `20.10` and install automatically.

- Set up credentials: 
  - Go to Manage Jenkins > Manage Credentials > Global Credentials > Add Credentials. Add the following credentials with `ID`.
  - Add AWS credentials (Secret text): `ec2-host-ip`, `ec2-ssh-key`
  - Add Docker Hub credentials (Username with password): `dockerhub-access`
  - Add client and server `.env` file (Secret file): `client-env-file`, `server-env-file`

#### 5. Create a new Jenkins pipeline:
- Go to Jenkins dashboard and click on `New Item`.
- Create a new pipeline and go to the pipeline configuration.
- Choose `Pipeline script from SCM` and select `Git`.
- Add Github repository URL and change branch to build from `main`.

#### 6. Push the code to Github:
- Edit `IMAGE_CLIENT` and `IMAGE_SERVER` in the `Jenkinsfile` to your Docker Hub repository name.
- Push the code to the Github repository.
- Click on `Build Now` in the Jenkins pipeline.
- Once the pipeline is successful, the application will be deployed to IP public AWS EC2.

![Successful Deployment](https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727346129/PropertyTracker/Screenshot/7-Jenkins.png)

**NOTE:** The pipeline will automatically build and deploy the application whenever changes are pushed to the Github repository as long as the container Jenkins server is running. Because I have already set up pollSCM in the `Jenkinsfile` to check for changes every 1 minute.

### 🌟 I hope it saves you time debugging, as I’ve already gone through the tough parts for you, `XD`. And if you found it useful, a star on this GitHub repository would mean the world to me!

## 💙 <a name="acknowledgements">Acknowledgements</a>

- **[JS Mastery](https://www.jsmastery.pro/):** For the amazing [tutorial](https://www.youtube.com/watch?v=k4lHXIzCEkM) and resources that helped me build this project.
- **[Refine](https://refine.dev/):** For the powerful toolkit that helped me build the application with ease.
- **[MongoDB](https://www.mongodb.com/):** For the flexible and scalable database that helped me store and manage data.
- **[Docker](https://www.docker.com/):** For the free containerization service that helped me deploy the application.
- **[Jenkins](https://www.jenkins.io/):** For automating the build and deployment processes through CI/CD pipelines.
- **[AWS](https://aws.amazon.com/):** For the free tier EC2 services that helped me host and run the application.
- **[Cloudinary](https://cloudinary.com/):** For the free image hosting service that helped me store and serve images.
- **[anmolbaranwal](https://dev.to/anmolbaranwal):** For the amazing [article](https://dev.to/anmolbaranwal/make-github-readme-like-pro-15am) that helped me create this beautiful README.

## 🌐 <a name="contact">Contact</a>

- **Name:** Nguyen Phan Duc Khai - **eNKay**
- **Portfolio:** [enkay.live](https://enkay.live)
- **LinkedIn:** [en-kay](https://www.linkedin.com/in/en-kay)
- **Email:** [enkay.work@outlook.com](mailto:enkay.work@outlook.com)