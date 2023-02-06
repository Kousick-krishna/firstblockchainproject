// SPDX-License-Identifier : MIT;
pragma solidity ^0.8.0;

contract Example{
    uint public count;
    string public name;

    function setcount() public view returns(uint){
        return count;
    }
     function setname() public view returns(string memory){
        return name;
        
    }
    function increment() public{
        count++;
    }
    function decrement() public{
        count--;
    }
    
}