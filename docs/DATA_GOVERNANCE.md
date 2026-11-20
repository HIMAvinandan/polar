# POLAR Data Governance & Security

**Version:** 0.1.0-draft

## Data classes

- Public: published polls, options, declared methodology and final aggregate results.
- Account: identity, preferences, eligibility and account security metadata.
- Financial: payment references, invoices, settlement state and credit ledger entries.
- Commitment: declared poller conditions, evidence and review outcomes.
- Restricted: abuse investigations, security logs, private correspondence and sensitive evidence.

## Separation of records

Maintain separate ledgers or record domains for:
1. platform revenue;
2. payment settlement;
3. participant credit issuance and use;
4. poller commitments and performance;
5. certification and assessment fees;
6. royalties and institutional revenue.

Never treat a payment record as a vote, or a vote as a payment instruction.

## Wallet and payment controls

- Support hosted provider payment flows and non-custodial wallet connections as distinct patterns.
- Official Binance Pay only if merchant eligibility, API support and regional availability are confirmed.
- UPI and bank payment methods only through authorised payment partners; store provider references, not banking credentials.
- Explicit confirmation before every consequential payment or withdrawal.
- Transaction ceilings, velocity limits, fraud monitoring and reversible test environments.
- No user passwords, OTPs, seed phrases or private keys in POLAR.

## Audit and privacy

Record actor, action, object, timestamp, request/correlation ID and outcome for privileged operations. Minimise personal data, define retention periods, support correction/deletion where legally required and preserve only lawful audit exceptions. Public result pages should default to aggregates, not expose participant identity.

## Operational readiness gate

Before real-money use: independent security review, provider onboarding, legal review for each launch jurisdiction, incident response plan, key/secret rotation, backup/restore test, reconciliation test and explicit user approval.
