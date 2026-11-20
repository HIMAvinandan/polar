# POLAR Architecture

**Version:** 0.1.0-draft

## Proposed stack

- Next.js + TypeScript application.
- PostgreSQL as primary relational store.
- Prisma for schema and migrations.
- Auth.js or equivalent standards-based authentication, selected after threat modelling.
- Versioned REST API under `/api/v1`.
- Server-Sent Events for initial live poll updates; Redis only when scale requires it.
- Portable deployment; Cloudflare-compatible edge components where technically appropriate.

## Bounded modules

`identity`, `polling`, `credits`, `payments`, `wallets`, `commitments`, `evidence`, `licensing`, `certification`, `provenance`, `security`, `integrations`.

## Core data entities

Users, pollers, polls, poll options, ballots, vote allocations, credit accounts, credit transactions, maturity rules, poller commitments, poll outcomes, action evidence, audit events, payments, invoices, subscriptions, licences, certification assessments, certificates, provenance records and standard versions.

## Invariants

1. Credit balance is derived from a ledger, never overwritten as the source of truth.
2. Poll outcome is immutable after finalisation; corrections create a new versioned outcome record.
3. Commitment status and evidence never alter vote totals.
4. Payment events and voting events are separate domains.
5. All privileged actions emit audit events.
6. A wallet connection does not imply custody or permission to transact.
7. External integrations are isolated behind adapters and can be disabled independently.

## Security boundaries

Use short-lived sessions, MFA for privileged roles, rate limiting, abuse controls, encrypted transport, secrets management and least-privilege service credentials. Hosted payments use provider checkout/authorisation. Non-custodial wallet signing remains in the user's wallet. No server-side storage of private keys, seed phrases or OTPs.

## Initial repository structure

```text
apps/web/
packages/identity/
packages/polling/
packages/credits/
packages/payments/
packages/wallets/
packages/commitments/
packages/evidence/
packages/provenance/
packages/security/
packages/integrations/
database/schema/
docs/
tests/
```

This branch establishes architecture and a small UI shell. It is not yet a production-ready implementation.
