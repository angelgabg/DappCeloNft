require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

// 1. Import web3 and contractkit 
const Web3 = require("web3")
const ContractKit = require('@celo/contractkit')

// 2. Init a new kit, connected to the alfajores testnet
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

 module.exports = {
  
  solidity: {
    "version": "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }, 
  networks: {
    alfajores_TestNet: {
      url: "https://alfajores-forno.celo-testnet.org/",
      chainId: 44787,
      //Llave privada viene de la configuración de la billetera
      accounts: ['a7161b81980aa69d7c5835e422df14386afde0af6622d8cd2fb1a8be3c071d28'] 
    }
  }

 
};
