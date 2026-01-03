// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Loktantra {
    string public name = "Loktantra";
    string public description = "A decentralized voting platform for transparent democracy";
    address public owner;
    uint256 public totalVotes;
    
    struct Proposal {
        uint256 id;
        string title;
        string description;
        uint256 voteCount;
        bool isActive;
        address proposer;
    }
    
    mapping(uint256 => Proposal) public proposals;
    mapping(address => mapping(uint256 => bool)) public hasVoted;
    uint256 public proposalCount;
    
    event ProposalCreated(uint256 indexed proposalId, string title, address proposer);
    event VoteCast(uint256 indexed proposalId, address voter);
    
    constructor() {
        owner = msg.sender;
        proposalCount = 0;
        totalVotes = 0;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    function createProposal(string memory _title, string memory _description) public {
        proposalCount++;
        proposals[proposalCount] = Proposal({
            id: proposalCount,
            title: _title,
            description: _description,
            voteCount: 0,
            isActive: true,
            proposer: msg.sender
        });
        
        emit ProposalCreated(proposalCount, _title, msg.sender);
    }
    
    function vote(uint256 _proposalId) public {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(proposals[_proposalId].isActive, "Proposal is not active");
        require(!hasVoted[msg.sender][_proposalId], "You have already voted for this proposal");
        
        proposals[_proposalId].voteCount++;
        hasVoted[msg.sender][_proposalId] = true;
        totalVotes++;
        
        emit VoteCast(_proposalId, msg.sender);
    }
    
    function getProposal(uint256 _proposalId) public view returns (
        uint256 id,
        string memory title,
        string memory description,
        uint256 voteCount,
        bool isActive,
        address proposer
    ) {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        Proposal memory proposal = proposals[_proposalId];
        return (
            proposal.id,
            proposal.title,
            proposal.description,
            proposal.voteCount,
            proposal.isActive,
            proposal.proposer
        );
    }
    
    function deactivateProposal(uint256 _proposalId) public onlyOwner {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        proposals[_proposalId].isActive = false;
    }
}