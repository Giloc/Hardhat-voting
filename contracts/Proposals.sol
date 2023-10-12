// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;

contract Proposals{

    address owner;
    mapping (string => uint16) public proposalList;
    mapping (address => bool) public whiteList;

    function AddProposal(string memory proposalName) public {
        require(msg.sender == owner, "You're not owner");
        proposalList[proposalName] = 0;
    }

    function Vote(string memory proposalName) public returns (uint16){
        require(!whiteList[msg.sender], "not in list");
        proposalList[proposalName] += 1;
        whiteList[msg.sender] = true;
        return proposalList[proposalName];
    }

    constructor(){
        owner = msg.sender;
    }
}