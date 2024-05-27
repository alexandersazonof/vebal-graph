import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ChangeFeeDistributor,
  ChangeGaugeController,
  ChangeOperator,
  ChangeVoter,
  ContractInitialized,
  LinkGaugeToDistributor
} from "../generated/VeBalContract/VeBalContract"

export function createChangeFeeDistributorEvent(
  oldValue: Address,
  newValue: Address
): ChangeFeeDistributor {
  let changeFeeDistributorEvent = changetype<ChangeFeeDistributor>(
    newMockEvent()
  )

  changeFeeDistributorEvent.parameters = new Array()

  changeFeeDistributorEvent.parameters.push(
    new ethereum.EventParam("oldValue", ethereum.Value.fromAddress(oldValue))
  )
  changeFeeDistributorEvent.parameters.push(
    new ethereum.EventParam("newValue", ethereum.Value.fromAddress(newValue))
  )

  return changeFeeDistributorEvent
}

export function createChangeGaugeControllerEvent(
  oldValue: Address,
  newValue: Address
): ChangeGaugeController {
  let changeGaugeControllerEvent = changetype<ChangeGaugeController>(
    newMockEvent()
  )

  changeGaugeControllerEvent.parameters = new Array()

  changeGaugeControllerEvent.parameters.push(
    new ethereum.EventParam("oldValue", ethereum.Value.fromAddress(oldValue))
  )
  changeGaugeControllerEvent.parameters.push(
    new ethereum.EventParam("newValue", ethereum.Value.fromAddress(newValue))
  )

  return changeGaugeControllerEvent
}

export function createChangeOperatorEvent(
  oldValue: Address,
  newValue: Address
): ChangeOperator {
  let changeOperatorEvent = changetype<ChangeOperator>(newMockEvent())

  changeOperatorEvent.parameters = new Array()

  changeOperatorEvent.parameters.push(
    new ethereum.EventParam("oldValue", ethereum.Value.fromAddress(oldValue))
  )
  changeOperatorEvent.parameters.push(
    new ethereum.EventParam("newValue", ethereum.Value.fromAddress(newValue))
  )

  return changeOperatorEvent
}

export function createChangeVoterEvent(
  oldValue: Address,
  newValue: Address
): ChangeVoter {
  let changeVoterEvent = changetype<ChangeVoter>(newMockEvent())

  changeVoterEvent.parameters = new Array()

  changeVoterEvent.parameters.push(
    new ethereum.EventParam("oldValue", ethereum.Value.fromAddress(oldValue))
  )
  changeVoterEvent.parameters.push(
    new ethereum.EventParam("newValue", ethereum.Value.fromAddress(newValue))
  )

  return changeVoterEvent
}

export function createContractInitializedEvent(
  controller: Address,
  ts: BigInt,
  block: BigInt
): ContractInitialized {
  let contractInitializedEvent = changetype<ContractInitialized>(newMockEvent())

  contractInitializedEvent.parameters = new Array()

  contractInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )
  contractInitializedEvent.parameters.push(
    new ethereum.EventParam("ts", ethereum.Value.fromUnsignedBigInt(ts))
  )
  contractInitializedEvent.parameters.push(
    new ethereum.EventParam("block", ethereum.Value.fromUnsignedBigInt(block))
  )

  return contractInitializedEvent
}

export function createLinkGaugeToDistributorEvent(
  gauge: Address,
  depositor: Address
): LinkGaugeToDistributor {
  let linkGaugeToDistributorEvent = changetype<LinkGaugeToDistributor>(
    newMockEvent()
  )

  linkGaugeToDistributorEvent.parameters = new Array()

  linkGaugeToDistributorEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  linkGaugeToDistributorEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )

  return linkGaugeToDistributorEvent
}
