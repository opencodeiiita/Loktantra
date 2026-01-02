// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Loktantra {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    address public admin;
    mapping(address => bool) public voters;
    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;

    event CandidateAdded(uint indexed candidateId, string name);
    event VoteCast(address indexed voter, uint indexed candidateId);
    
    constructor() {
        admin = msg.sender;
    }

    function addCandidate(string memory _name) public {
        require(msg.sender == admin, "Only admin can add candidates");
        candidatesCount++;

        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        emit CandidateAdded(candidatesCount, _name);
    }

    function vote(uint _candidateId) public {
        require(!voters[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID");
    
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;

        emit VoteCast(msg.sender, _candidateId);
        
    }
    
    function getCandidate(uint _id) public view returns (uint, string memory, uint) {
        return (
            candidates[_id].id,
            candidates[_id].name,
            candidates[_id].voteCount
        );
    }
}
