import { Deposit, VeBalContract, Withdraw } from '../generated/VeBalContract/VeBalContract';
import { Address, BigInt } from '@graphprotocol/graph-ts';
import { VeBal } from '../generated/schema';

export function handleDeposit(event: Deposit): void {
  updateVeBal(event.address);
}

export function handleWithdraw(event: Withdraw): void {
  updateVeBal(event.address);
}

function updateVeBal(address: Address): void {
  let veBal = VeBal.load(address.toHexString());
  if (veBal == null) {
    veBal = new VeBal(address.toHexString());
  }
  veBal.totalSupply = VeBalContract.bind(address).totalSupply();
  veBal.save()
}