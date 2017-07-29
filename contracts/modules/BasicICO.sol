// Description: people send exp and get tokens

pragma solidity ^0.4.8;

import "../Balances.sol";
import "../SafeMath.sol";

contract BasicICO is SafeMath {

  event Mint(address indexed User, string Action, uint Amount);

  address public root; // address that creates the contract
  address public payout; // address that recieves the ico payout

  uint public startTime; // when the ico starts
  uint public endTime; // when the ico ends
  uint public tokenExchangeRate; // exchange rate

  bool public isFinalized;

  Balances balances;

  modifier onlyRoot(){
    if(root == msg.sender){ _ ;} else { throw; }
  }

  function ICO(address _balances, address _payout, uint _tokenExchangeRate, uint _startTime, uint _endTime){

    if(_startTime == 0){
      startTime = block.timestamp;
    }

    if(_endTime < block.timestamp){
      throw;
    }

    root = msg.sender;
    payout = _payout;
    tokenExchangeRate = _tokenExchangeRate;
    balances = Balances(_balances);

  }

  function () {
    createTokens();
  }

  function createTokens() payable returns(bool success){
  if (isFinalized) throw;
  if (block.timestamp < startTime) throw;
  if (block.timestamp > endTime) throw;
  if (msg.value == 0) throw;

  uint256 tokens = safeMult(msg.value, tokenExchangeRate); // check that we're not over totals

  balances.incBalance(msg.sender, tokens);  // safeAdd not needed; bad semantics to use here
  balances.incTotalSupply(tokens);

  Mint(msg.sender, "ico" , tokens);  // logs token creation
  return true;
  }

  function finalize() onlyRoot returns(bool success){
      if (isFinalized) throw;
      if(block.timestamp <= (endTime + 30 day)) throw;
      // move to operational
      isFinalized = true;
      if(!payout.send(this.balance)) throw;  // send the eth to Brave International
      return true;
  }

}
