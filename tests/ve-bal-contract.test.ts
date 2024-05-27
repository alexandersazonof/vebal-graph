import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ChangeFeeDistributor } from "../generated/schema"
import { ChangeFeeDistributor as ChangeFeeDistributorEvent } from "../generated/VeBalContract/VeBalContract"
import { handleChangeFeeDistributor } from "../src/ve-bal-contract"
import { createChangeFeeDistributorEvent } from "./ve-bal-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let oldValue = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newValue = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newChangeFeeDistributorEvent = createChangeFeeDistributorEvent(
      oldValue,
      newValue
    )
    handleChangeFeeDistributor(newChangeFeeDistributorEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChangeFeeDistributor created and stored", () => {
    assert.entityCount("ChangeFeeDistributor", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChangeFeeDistributor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldValue",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ChangeFeeDistributor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newValue",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
