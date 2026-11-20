# POLAR Product Charter

**Version:** 0.1.0-draft | **Status:** Working product definition

## Purpose

Create an independently operable, internationally accessible polling system that makes public opinion, declared commitments and post-poll fulfilment distinguishable and auditable.

## Actors

- **Visitor:** discovers public polls and published results.
- **Participant:** verifies eligibility and allocates available credits to permitted choices.
- **Poller:** creates a poll, declares its maturity rules and, where applicable, predeclares commitments.
- **Reviewer:** assesses flagged content, evidence or disputes within delegated authority.
- **Institution:** licenses professional tools, reporting or API access.
- **Ordinal assessor:** performs a separately scoped trial or certification assessment under the common framework.

## Poll lifecycle

Draft → Review (if required) → Published → Open → Matured/Closed → Outcome finalised → Commitment fulfilment period → Evidence reviewed → Archived.

The poll outcome is not rewritten by later fulfilment. Fulfilment is a separate record linked to the poll.

## Voting and credits

A participant may have one account-level identity subject to privacy-preserving controls. Each poll declares whether it uses simple selection, credit allocation or another approved mechanism. The system reports:
- unique eligible participant count;
- valid ballot count;
- headcount by option;
- credit allocation by option;
- abstentions, invalid ballots and late/reversed entries;
- methodology and audit limitations.

Payment cannot purchase extra vote weight. If credits are earned, granted or purchased for non-voting platform services, their permitted uses and non-transferability must be explicit. A credit ledger is append-only and auditable.

## Poller commitments

A poller may publish a commitment before a poll opens or before the maturity point. The commitment record states the trigger, promised action, deadline, evidence requirements, exclusions and remedy/complaint process. A commitment is not represented as legally enforceable in every jurisdiction without review.

## Revenue

Potential revenue: paid professional features, publication fees, institutional licensing, verified reporting, certification assessment fees and API/service access. Public participation remains free at the base level. Commercial fees never change poll outcomes.

## Non-goals for first release

- No custody of seed phrases or private keys.
- No autonomous transfer of funds.
- No claim that poll outcomes are representative of a population unless sampling and weighting support that claim.
- No automatic punitive enforcement based solely on an allegation or algorithmic flag.
- No claim of universal legal recognition for Ordinal certification.
