# POLAR Domain Model & Integrity Rules

**Version:** 0.1.0-draft

## Separate but linked records
- **Ballot:** the participant's submitted selection.
- **Vote allocation:** the allocation of voting credits across options.
- **Credit transaction:** an append-only change in a participant's credit account.
- **Poll outcome:** a calculated, versioned result after maturity and validation.
- **Poller commitment:** an action declared by the poller before the relevant trigger.
- **Evidence:** material submitted to support a fulfilment finding.
- **Assessment/certification:** a separate review record governed by the Ordinal framework in Xone.

## Invariants to enforce in service layer and database transactions
1. A participant cannot allocate more credits than their available, eligible balance.
2. Ballot headcount and credit-weighted allocation are reported independently.
3. A payment never creates extra vote weight.
4. A poll cannot be finalised before its declared maturity and validation conditions are met.
5. Finalised outcomes are immutable; corrections create a new version and preserve the earlier record.
6. A poller's later action or evidence cannot modify the original ballot or result.
7. Evidence acceptance is a review decision, not a user-submitted status.
8. Credit movements use idempotency keys and are written in the same transaction as the associated allocation or reversal.
9. All privileged state changes emit audit events.
10. Deletion rules must preserve lawful financial, audit and dispute records while respecting applicable privacy law.

## Implementation note
The initial Prisma schema is a foundation, not a complete enforcement layer. Cross-record invariants require transactional service logic, database constraints where feasible, tests and independent security review before production.
