import {
  ChangeFeeDistributor as ChangeFeeDistributorEvent,
  ChangeGaugeController as ChangeGaugeControllerEvent,
  ChangeOperator as ChangeOperatorEvent,
  ChangeVoter as ChangeVoterEvent,
  ContractInitialized as ContractInitializedEvent,
  LinkGaugeToDistributor as LinkGaugeToDistributorEvent
} from "../generated/VeBalContract/VeBalContract"
import {
  ChangeFeeDistributor,
  ChangeGaugeController,
  ChangeOperator,
  ChangeVoter,
  ContractInitialized,
  LinkGaugeToDistributor
} from "../generated/schema"

export function handleChangeFeeDistributor(
  event: ChangeFeeDistributorEvent
): void {
  let entity = new ChangeFeeDistributor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldValue = event.params.oldValue
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeGaugeController(
  event: ChangeGaugeControllerEvent
): void {
  let entity = new ChangeGaugeController(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldValue = event.params.oldValue
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeOperator(event: ChangeOperatorEvent): void {
  let entity = new ChangeOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldValue = event.params.oldValue
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeVoter(event: ChangeVoterEvent): void {
  let entity = new ChangeVoter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldValue = event.params.oldValue
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractInitialized(
  event: ContractInitializedEvent
): void {
  let entity = new ContractInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controller = event.params.controller
  entity.ts = event.params.ts
  entity.block = event.params.block

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLinkGaugeToDistributor(
  event: LinkGaugeToDistributorEvent
): void {
  let entity = new LinkGaugeToDistributor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gauge = event.params.gauge
  entity.depositor = event.params.depositor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
