// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol'; 
import '@openzeppelin/contracts/access/Ownable.sol';

contract NFT is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('NFT', 'PZ'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 100;
        maxPerWallet = 1;
        isPublicMintEnabled = true;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory){
        return "https://ipfs.io/ipfs/QmX6QJuYSSttF2fcQhYhUNbScwFtdZz2LrberhEPpxa5om";
}


    function mint(uint256 quantity_) public payable {
    require(isPublicMintEnabled, 'minting not enabled');
    require(msg.value == quantity_ * mintPrice, 'wrong mint value');
    require(totalSupply + quantity_ <= maxSupply, 'sold out');
    require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

    for (uint256 i = 0; i < quantity_; i++){
        uint256 newTokenId = totalSupply + 1;
        totalSupply++;
        _safeMint(msg.sender, newTokenId);
    }
    }

}