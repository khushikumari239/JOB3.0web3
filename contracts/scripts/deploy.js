const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();  // Get the deployer's address
    console.log("Deploying contracts with the account:", deployer.address);

    // Use ethers.provider to get the balance of the deployer
    const balance = await ethers.provider.getBalance(deployer.address);  
    console.log("Account balance:", ethers.utils.formatEther(balance));  // Format balance to ETH

    const Contract = await ethers.getContractFactory("JobPortal"); // Use your contract's name here
    const contract = await Contract.deploy();  // Deploy the contract
    console.log("Contract deployed to:", contract.address);  // Display the contract address
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
