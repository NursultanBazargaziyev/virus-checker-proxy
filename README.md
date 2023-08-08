# Virus Checker Proxy 🛡️

## 1. Introduction
Welcome! This Virus Checker Proxy is a core part of a browser extension project, developed with the objective of safeguarding your internet adventures. 
It scans URLs using the VirusTotal API to identify any potential threats.

### Tools I Used
   - **Google Cloud**: My deployment platform of choice.
   - **Node.js**:      The main runtime environment for the server.
   - **Express**:      To handle routing and server setup.
   - **Axios**:        Making HTTP requests easy and reliable.

## 2. Before You Start
You're gonna need **Node.js** on your computer. If you don't have it, get it [here](https://nodejs.org/).
   
## 3. Let's Get Rolling!
### How to Get It Up and Running

Clone the Repo:
```
git clone https://github.com/https://github.com/NursultanBazargaziyev/virus-checker-proxy.git
```

Navigate to the Project Directory:
```
cd virus-checker-proxy/
```

Install the Dependencies:
```
npm install
```

Start the Server:
```
npm start
```

## 4. Inside the Repo
This service is essentially a middleman between you and the VirusTotal API. It's a crucial part of a larger browser extension project and helps users to have a safer browsing experience. The Proxy allows you to submit URLs for scanning and obtain the reports of specific scans.

### Data Handling
Axios is used to make requests to the VirusTotal API. Simple and reliable.

### Deployment
The proxy server is deployed on Google Cloud Runner. A cost-effective and efficient solution for our requirements.

Feel free to explore, provide feedback, or contribute to the project. If you have any questions or ideas to make it even better, don't hesitate to open an issue or make a pull request. Happy coding and safe browsing! 🚀
