import { BigInt } from "@graphprotocol/graph-ts";
import {
  PaymentProcessed as PaymentProcessedEvent,
  PaymentWithdrawn as PaymentWithdrawnEvent,
  EmergencyWithdrawal as EmergencyWithdrawalEvent,
  Deposit as DepositEvent,
  PaymentReleased as PaymentReleasedEvent,
  ProjectCompleted as ProjectCompletedEvent,
  MilestoneCompleted as MilestoneCompletedEvent,
  ProjectCreated as ProjectCreatedEvent,
  MilestoneAdded as MilestoneAddedEvent,
} from "../generated/Adwumapa/Adwumapa";
import {
  PaymentProcessed,
  PaymentWithdrawn,
  EmergencyWithdrawal,
  Deposit,
  PaymentReleased,
  ProjectCompleted,
  MilestoneCompleted,
  ProjectCreated,
  MilestoneAdded,
} from "../generated/schema";

export function handlePaymentProcessed(event: PaymentProcessedEvent): void {
  let entity = new PaymentProcessed(event.transaction.hash.toHex());
  entity.recipient = event.params.recipient;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handlePaymentWithdrawn(event: PaymentWithdrawnEvent): void {
  let entity = new PaymentWithdrawn(event.transaction.hash.toHex());
  entity.recipient = event.params.recipient;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleEmergencyWithdrawal(event: EmergencyWithdrawalEvent): void {
  let entity = new EmergencyWithdrawal(event.transaction.hash.toHex());
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(event.transaction.hash.toHex());
  entity.sender = event.params.sender;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handlePaymentReleased(event: PaymentReleasedEvent): void {
  let entity = new PaymentReleased(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProjectCompleted(event: ProjectCompletedEvent): void {
  let entity = new ProjectCompleted(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleMilestoneCompleted(event: MilestoneCompletedEvent): void {
  let entity = new MilestoneCompleted(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.milestoneIndex = event.params.milestoneIndex;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProjectCreated(event: ProjectCreatedEvent): void {
  let entity = new ProjectCreated(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleMilestoneAdded(event: MilestoneAddedEvent): void {
  let entity = new MilestoneAdded(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.milestoneIndex = event.params.milestoneIndex;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}