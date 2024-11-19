// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JobPortal {
    
    struct Job {
        address employer;
        string title;
        string description;
        uint payment;
        bool isFilled;
    }

    struct Application {
        address applicant;
        string resumeIPFS;
    }

    Job[] public jobs;
    mapping(uint => Application[]) public applications;

    function postJob(string memory title, string memory description, uint payment) public {
        jobs.push(Job(msg.sender, title, description, payment, false));
    }

    function applyForJob(uint jobId, string memory resumeIPFS) public {
        require(jobId < jobs.length, "Job does not exist.");
        require(!jobs[jobId].isFilled, "Job already filled.");
        applications[jobId].push(Application(msg.sender, resumeIPFS));
    }

    function hireApplicant(uint jobId, uint applicantIndex) public {
        require(jobs[jobId].employer == msg.sender, "Only employer can hire.");
        jobs[jobId].isFilled = true;
        payable(applications[jobId][applicantIndex].applicant).transfer(jobs[jobId].payment);
    }
}
