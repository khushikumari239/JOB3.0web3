**Job3.0- A Web3 Decentralized Job Portal**

one of the most complex problems I’ve worked on recently was developing **Job3.0,** a Web3 decentralized job portal …

In centralized system , users ’data like resume, job applications and job postings everything is controlled by the platform, leading to privacy issues,

Job3.0 , which is built on web3 technologies , ensures that users retains the full control over their data, which is stored on IPFS can only be accessed by those who have permission…

### How I Approached the problem:

1. Identifying the challenge : - 
- I analyzed existing job portals to understand their limitations, focusing on data ownership and transparency issues.
1. Defining the Decentralized solution : - 
- I outlined a system where data ownership is decentralized and secure, ensuring that only authorized parties can access user information.
1. Iterative Development Process : - 
- I adopted an agile approach, breaking the project into smaller parts. this allowed me to test features like job posting and access control individually before integrating them into the larger system.

### **Technologies Used :-**

- React.js, for building front-end UI
- Ether.js :- for connecting the frontend with the Ethereum blockchain.
- Solidity :- for developing the smart contracts that manages job posting, application, and hiring processes in a decentralized way.
- IPFS(via Pinata):- for storing user data

**GitHub Link :-** https://github.com/khushikumari239/JOB3.0web3

### Although it’s an ongoing project here are some of it’s functionalities :-

- Job Posting , Employers can post jobs, which includes job title , description and everything…
- Job Application :- Applicants can apply for jobs
- Access Control :- through decentralized nature of this platform , employers and the applicants can control their data.
- Decentralized Storage (IPFS) :- All files such as resume, are stored on IPFS using Pinata for decentralized storage.

Importance of this project :-  Job3.0 stands out because it combines blockchain and decentralized technologies to solve a real-world problem.

Data ownership and transparency in the hiring process. By ensuring data is stored securely and controlled by the users themselves,




# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
