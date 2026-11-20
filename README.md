# POLAR

**Open polling for better maturity conditions.**  
**Repository:** [HIMAvinandan/polar](https://github.com/HIMAvinandan/polar)  
**Current development line:** `foundation/0.1.0)  
**Status:** Early foundation; not a production service.

POLAR is an independent polling and public-opinion platform. Pollers create public polls; participants express choices through credits; polls mature at declared closing conditions; and any poller commitments or post-maturity actions are tracked separately from the poll outcome.

## Core principles

- Preserve both participant headcount and credit-weighted results.
- Credits must not turn payment into purchased vote influence.
- Separate poll outcome, poller commitment, fulfilment evidence and certification records.
- Maintain an auditable credit ledger; balances are derived from transactions.
- Keep participant payment, poll commitments, platform revenue, certification fees and royalties in separate ledgers.
- Support independent ventures and international operation through explicit jurisdiction schedules.
- No financial account connection or transaction is made without explicit user approval.

## Commercial model

Free public participation; paid professional tools, poll publication options, certification services, institutional licensing and API/services. Commercial fees must not alter vote weight.

## Initial product scope

1. Public poll discovery and participation.
2. Poll creation with options, maturity rules and predeclared conditions.
3. Separate headcount and credit-weighted reporting.
4. Poller commitments and evidence-of-fulfilment records.
5. Wallet/payment orchestration, initially in sandbox mode.
6. Provenance, audit and certification interfaces.

## Security

Non-custodial wallet support and hosted payment flows are separate integration modes. Require MFA, least privilege, explicit approval, transaction limits and immutable audit events. Never request or store passwords, OTPs, seed phrases or private keys. Binance support, if enabled, must use the official Binance Pay route and only after regional and merchant eligibility checks.

## Development

See [docs/PRODUCT_CHARTER.md](docs/PRODUCT_CHARTER.md), [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/DATA_GOVERNANCE.md](docs/DATA_GOVERNANCE.md), [docs/ROADMAP.md](docs/ROADMAP.md) and [docs/SOURCES.md](docs/SOURCES.md).

Ordinal-wide licensing and certification instruments are maintained separately in [Xone](https://github.com/HIMAvinandan/xone/tree/ordinal-licensing-certification). POLAR will consume those common instruments through a venture-specific schedule rather than redefining them.

## Run locally

Requirements: Node.js 20+ and PostgreSQL.

```bash
npm install
cp .env.example .env
# Set DATABASE_URL in .env to your own local PostgreSQL database.
npm run db:generate
npm run dev
```

The current UI is a foundation preview. Polls, accounts, credits, payment adapters and live data are not yet connected. Never put production credentials in the repository.
