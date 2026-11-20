# POLAR Source & Integration Register

**Version:** 0.1.0-draft  
**Rule:** Do not ingest or republish data until source terms, access method, provenance and permitted reuse are verified.

## Data categories

- Public poll records and platform-generated aggregates.
- Poll methodology and declared commitments.
- Payment-provider status references.
- Certification and provenance records.
- Optional external research datasets for contextual analysis (not vote inputs).

## Source onboarding record

For each external source capture: organisation, dataset/API name, canonical URL, access method, licence/terms, attribution requirements, update cadence, fields collected, personal-data risk, checksum/version and validation status.

## Initial external-source candidates

These are discovery targets only; no permission or API availability is presumed:
- Official government, academic and institutional open-data catalogues.
- Publicly documented polling and election datasets.
- Research repositories with explicit open licences.
- Official payment-provider developer documentation for supported settlement methods.

## Validation gates

1. Confirm source identity and canonical endpoint.
2. Read terms and reuse/licensing conditions.
3. Confirm whether API, bulk download or scraping is permitted.
4. Preserve original metadata and retrieval timestamp.
5. Validate schema, units, geographic coverage and update history.
6. Record missingness, known bias and uncertainty.
7. Attribute all derived outputs and keep source snapshots or stable identifiers where permitted.
