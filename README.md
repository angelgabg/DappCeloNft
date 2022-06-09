#Dapp para Mintear un NFT en la red de Celo

NFT para celebrar la Finalizacion del curso en Solidity impartido por Platzi

#Integrantes del Equipo

Angel Gonzalez

Agustin Vessoni

# Dependencias necesarias

npm install --save-dev hardhat

npm install @nomiclabs/hardhat-etherscan

npm install -D @nomiclabs/hardhat-waffle ethereum-waffle

npm install --save-dev @nomiclabs/hardhat-ethers@^2.0.0

npm install @openzeppelin/contracts

npx hardhat run scripts/deploy.js --network alfajores_TestNet
