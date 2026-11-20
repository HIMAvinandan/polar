"use client";

import { useMemo, useState } from "react";

const periods = [
  "1900–1920", "1920–1940", "1940–1960", "1960–1980",
  "1980–2000", "2000–2020", "2020–2026",
];

export default function Home() {
  const [period, setPeriod] = useState(periods[periods.length - 1]);
  const [tab, setTab] = useState<"polls" | "commitments" | "method">("polls");
  const activeIndex = useMemo(() => periods.indexOf(period), [period]);

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/">POLAR<span> / OPEN POLLING</span></a>
        <nav><a href="#explore">Explore</a><a href="#how">How it works</a><a href="#governance">Governance</a></nav>
        <a className="outline" href="#create">Create a poll</a>
      </header>

      <section className="hero">
        <div className="eyebrow">PUBLIC OPINION · MATURITY · ACCOUNTABILITY</div>
        <h1>Make opinion<br/><em>count.</em></h1>
        <p className="intro">A public polling system where the question, the method, the result and the poller’s commitments remain visible as separate, verifiable records.</p>
        <div className="actions"><a className="primary" href="#explore">Explore polls <span>↗</span></a><a className="textlink" href="#how">Understand the method</a></div>
        <div className="heroNote"><span className="pulse"/> FOUNDATION RELEASE <b>0.1.0</b><span>— development preview</span></div>
      </section>

      <section id="explore" className="section">
        <div className="sectionHead"><div><div className="eyebrow">01 / PUBLIC RECORD</div><h2>Explore the signal.</h2></div><p>Poll records will appear here as the platform’s publication and moderation layers are implemented.</p></div>
        <div className="emptyPanel"><div className="emptyIcon">◉</div><h3>No live polls yet</h3><p>This repository is at its foundation stage. No sample poll is presented as a real public result.</p><a href="#create" className="textlink">Review poll creation principles ↗</a></div>
      </section>

      <section className="section timeline">
        <div className="sectionHead"><div><div className="eyebrow">02 / MATURITY ARCHIVE</div><h2>Time-bound context.</h2></div><p>Period navigation is established for future archive views. Historical poll records will be shown only when verified source data exists.</p></div>
        <div className="periods">{periods.map((p, i) => <button key={p} className={period === p ? "period active" : "period"} onClick={() => setPeriod(p)}><small>0{i + 1}</small>{p}</button>)}</div>
        <div className="periodDetail"><div><span className="eyebrow">SELECTED PERIOD</span><h3>{period}</h3></div><div><strong>{activeIndex + 1} / {periods.length}</strong><p>Archive ingestion is not yet connected. The selected interval is a navigation scaffold, not a claim that historical records have been collected.</p></div></div>
      </section>

      <section id="how" className="section">
        <div className="sectionHead"><div><div className="eyebrow">03 / METHOD</div><h2>One poll. Separate truths.</h2></div><p>POLAR keeps the public result distinct from the poller’s promise and what happens afterwards.</p></div>
        <div className="tabs">{(["polls", "commitments", "method"] as const).map(t => <button key={t} className={tab === t ? "tab active" : "tab"} onClick={() => setTab(t)}>{t}</button>)}</div>
        <div className="methodPanel">
          {tab === "polls" && <><span>01</span><h3>The outcome</h3><p>Publish eligible participant headcount and credit-weighted allocation side by side, with methodology and limitations.</p></>}
          {tab === "commitments" && <><span>02</span><h3>The commitment</h3><p>Record any poller condition before the maturity point: trigger, action, deadline and evidence requirements.</p></>}
          {tab === "method" && <><span>03</span><h3>The verification</h3><p>Assess fulfilment separately. A later action cannot rewrite the original vote totals or maturity record.</p></>}
        </div>
      </section>

      <section id="governance" className="governance">
        <div className="eyebrow">04 / TRUST ARCHITECTURE</div><h2>Payment is not influence.</h2>
        <p>Commercial tools may be paid. Public participation remains free at the base level. No payment buys additional vote weight. Credits, settlement, platform revenue, commitments and certification each have distinct records.</p>
        <div className="principles"><div><b>01</b><span>Auditable credit ledger</span></div><div><b>02</b><span>Non-custodial wallet option</span></div><div><b>03</b><span>Explicit transaction approval</span></div><div><b>04</b><span>Versioned provenance</span></div></div>
      </section>

      <section id="create" className="section closing"><div className="eyebrow">05 / BUILDING IN PUBLIC, OPERATING WITH CARE</div><h2>Designed for reach.<br/><em>Built for accountability.</em></h2><p>POLAR is being developed as an independent venture. Ordinal-wide licensing and certification provisions are maintained separately in Xone.</p><a className="primary" href="https://github.com/HIMAvinandan/polar">View the repository ↗</a></section>
      <footer><span>POLAR · FOUNDATION 0.1.0</span><span>Independent polling infrastructure</span><a href="https://github.com/HIMAvinandan/xone/tree/ordinal-licensing-certification">Ordinal framework ↗</a></footer>
    </main>
  );
}
