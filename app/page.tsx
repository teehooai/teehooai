import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

type Status = "live" | "beta" | "private-beta" | "open-source" | "experiment";

type Product = {
  name: string;
  oneLiner: string;
  detail?: string;
  href?: string;
  repo?: string;
  pypi?: string;
  status: Status;
};

type Family = {
  id: string;
  title: string;
  subtitle: string;
  lead: string;
  products: Product[];
};

const FAMILIES: Family[] = [
  {
    id: "security",
    title: "Agent Security",
    subtitle: "01 / Security",
    lead:
      "Hardening the rails that AI agents run on. Static scanners, runtime guards, and a rating system for the tools, skills, and servers an autonomous agent is allowed to touch.",
    products: [
      {
        name: "SpiderShield",
        oneLiner:
          "Scan, rate, and harden MCP servers for AI agent safety.",
        detail:
          "Static scanner with 46 security codes, runtime tool-call firewall, transparent MCP proxy, PII / secret DLP, structured audit trail, and an allowlist-mode agent security checker. Published to PyPI.",
        href: "https://spidershield.dev",
        repo: "https://github.com/teehooai/spidershield",
        pypi: "https://pypi.org/project/spidershield/",
        status: "open-source",
      },
      {
        name: "SpiderRating",
        oneLiner:
          "Security index and certification for AI agents, tools, and skills.",
        detail:
          "Rating engine (F → A) with calibrated ground truth, enterprise dashboard for multi-agent fleet visibility, certification API for badge issuance, behavioral baselines and anomaly detection. EU AI Act-ready reporting.",
        status: "private-beta",
      },
      {
        name: "awesome-mcp-security",
        oneLiner:
          "Curated list of MCP server security resources, tools, and research.",
        repo: "https://github.com/teehooai/awesome-mcp-security",
        status: "open-source",
      },
    ],
  },
  {
    id: "martech",
    title: "AI-Native Martech",
    subtitle: "02 / Martech",
    lead:
      "Marketing, media, and matching — rebuilt for an era where most discovery starts in a model and most fulfillment is mediated by an agent. We run the brand-monitoring, the affiliate network, the bilingual marketplace, and the consumer-facing surfaces in one stack.",
    products: [
      {
        name: "Teehoo Martech",
        oneLiner:
          "AI-Native Martech Platform — AI Brand Monitor + 9,800+ provider directory.",
        detail:
          "Helps brands win in the age of AI recommendations. Measures how an LLM talks about you, identifies query gaps, and runs the underlying local-business intelligence database powering several downstream products.",
        status: "private-beta",
      },
      {
        name: "SpiderCPS",
        oneLiner:
          "An AI-native CPS affiliate network for North America. Flat 20% network fee, USD settlement, bilingual operations.",
        detail:
          "Connects performance-marketing brands directly to publishers across newsletters, communities, social creators, and service professionals. Direct-brand only — no sub-affiliate layer.",
        href: "https://spidercps.com",
        status: "beta",
      },
      {
        name: "SpiderGig",
        oneLiner:
          "A bilingual freelance marketplace bridging Mandarin-speaking talent and global brands.",
        detail:
          "AI-native curated marketplace with managed services (Stripe Connect escrow, Wise payouts, 1099). Dual cohort design: North American premium expertise and a global commodity skill pool. Agent-to-agent matching from day one.",
        href: "https://spidergig.com",
        status: "private-beta",
      },
      {
        name: "SpiderRemote",
        oneLiner:
          "A curated remote-work aggregator for Mandarin-speaking talent. Filtered, translated, classified.",
        status: "private-beta",
      },
      {
        name: "SpiderAsk",
        oneLiner:
          "A bilingual life assistant for the overseas Mandarin-speaking community — visa, DMV, banking, daily living. Plus a personal twin agent.",
        href: "https://spiderask.com",
        status: "beta",
      },
      {
        name: "Panda Deals Daily",
        oneLiner:
          "Bilingual deals editorial. Verified price drops only — no fabricated discounts.",
        href: "https://pandadealsdaily.com",
        status: "beta",
      },
    ],
  },
  {
    id: "finance",
    title: "AI Financial Systems",
    subtitle: "03 / Finance",
    lead:
      "Autonomous research and execution stacks for capital markets. Overnight quant labs that discover alpha factors, an event-driven explainability shell that turns price moves into auditable causal chains, and adjacent prediction systems.",
    products: [
      {
        name: "Fullhouse Asset",
        oneLiner:
          "AI hedge fund — autonomous trading research and execution.",
        detail:
          "Private fund. Not soliciting investors. Listed here for portfolio completeness.",
        status: "live",
      },
      {
        name: "AI Quant Lab",
        oneLiner:
          "Autonomous alpha factor discovery via overnight research loops.",
        detail:
          "Long-running agent research process: hypothesis generation, factor mining, backtesting, and report synthesis run continuously without human prompting.",
        status: "private-beta",
      },
      {
        name: "Teehoo Core Shell",
        oneLiner:
          "Explainable alpha & risk — event-driven drawdown / gainer attribution with event-probability narratives.",
        detail:
          "Turns 'why did this move?' into a causal chain a human (or an LLM auditor) can verify.",
        status: "private-beta",
      },
      {
        name: "Fullhouse Sports",
        oneLiner:
          "AI sports prediction — model-driven edge discovery across global leagues.",
        status: "private-beta",
      },
    ],
  },
  {
    id: "local",
    title: "Local Services",
    subtitle: "04 / Local",
    lead:
      "Boring services, AI-era distribution. We operate a small fleet of single-niche, single-city service sites — built from a shared template, ranked organically, and rented to operators — and a Chinese-language directory for overseas life essentials.",
    products: [
      {
        name: "Hired Local Pros",
        oneLiner:
          "An AI-matched local services marketplace. Property-owner intent routed to vetted, licensed pros.",
        href: "https://hiredlocalpros.com",
        status: "beta",
      },
      {
        name: "R&R Site Network",
        oneLiner:
          "Single-niche local service sites — pool cleaning, drain cleaning, AI-era SEO standards built in.",
        detail:
          "Properties: Chino Hills Pool Cleaning, Irvine Pool Pro, Pasadena Drain Cleaning, Glendora Pool Cleaning, Rancho Cucamonga Pool Cleaning.",
        status: "live",
      },
      {
        name: "Fullhouselife",
        oneLiner:
          "A Mandarin-language local-life services directory for the overseas community.",
        status: "private-beta",
      },
    ],
  },
];

const NAV = [
  { label: "Security", href: "#security" },
  { label: "Martech", href: "#martech" },
  { label: "Finance", href: "#finance" },
  { label: "Local", href: "#local" },
  { label: "Open source", href: "#open-source" },
  { label: "About", href: "#about" },
];

const PRODUCT_TABS = [
  { id: "security", num: "01", label: "Security" },
  { id: "martech", num: "02", label: "Martech" },
  { id: "finance", num: "03", label: "Finance" },
  { id: "local", num: "04", label: "Local" },
];

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, { label: string; cls: string }> = {
    live: {
      label: "Live",
      cls: "border-th-accent-green/40 text-th-accent-green bg-th-accent-green/5",
    },
    beta: {
      label: "Beta",
      cls: "border-th-accent/40 text-th-accent bg-th-accent-soft",
    },
    "private-beta": {
      label: "Private beta",
      cls: "border-th-rule text-th-ink-dim bg-th-paper-2",
    },
    "open-source": {
      label: "Open source",
      cls: "border-th-accent-green/40 text-th-accent-green bg-th-accent-green/5",
    },
    experiment: {
      label: "Experiment",
      cls: "border-th-rule text-th-ink-dim bg-th-paper-2",
    },
  };
  const { label, cls } = map[status];
  return (
    <span
      className={`font-mono-tag inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] ${cls}`}
    >
      {label}
    </span>
  );
}

function ExternalIcon() {
  return <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />;
}

function ProductLinks({ p }: { p: Product }) {
  const links: { href: string; label: string }[] = [];
  if (p.href) links.push({ href: p.href, label: new URL(p.href).host.replace(/^www\./, "") });
  if (p.repo) links.push({ href: p.repo, label: "github" });
  if (p.pypi) links.push({ href: p.pypi, label: "pypi" });
  if (links.length === 0) return null;
  return (
    <div className="font-mono-tag flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-th-ink-dim">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-th-accent"
        >
          <span>{l.label}</span>
          <ExternalIcon />
        </a>
      ))}
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col border-t border-th-rule pt-6">
      <header className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-[19px] font-medium leading-tight tracking-tight text-th-ink">
          {p.name}
        </h3>
        <StatusBadge status={p.status} />
      </header>
      <p className="text-[16px] leading-[1.65] text-th-ink-soft">
        {p.oneLiner}
      </p>
      {p.detail && (
        <p className="mt-3 text-[15px] leading-[1.65] text-th-ink-dim">
          {p.detail}
        </p>
      )}
      <div className="mt-3">
        <ProductLinks p={p} />
      </div>
    </article>
  );
}

function FamilyBlock({ family }: { family: Family }) {
  return (
    <section
      id={family.id}
      className="border-t border-th-rule py-16 first:border-t-0 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <p className="font-mono-tag mb-3 text-[14px] uppercase tracking-[0.2em] text-th-accent">
            {family.subtitle}
          </p>
          <h2 className="font-display text-[44px] leading-[1.0] text-th-ink sm:text-[64px]">
            {family.title}
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-[1.65] text-th-ink-soft">
            {family.lead}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {family.products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Sticky header — black with gold wordmark + gold hairline */}
      <header className="sticky top-0 z-40 border-b border-th-accent/45 bg-th-ink/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-8" aria-label="Teehoo AI">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.png?v=4"
              alt=""
              width={418}
              height={357}
              className="h-14 w-auto select-none"
              draggable={false}
            />
            <span className="text-[24px] font-bold tracking-tight text-th-accent">
              Teehoo AI
            </span>
          </Link>
          <nav className="flex items-center gap-5 sm:gap-7">
            <ul className="hidden items-center gap-7 text-[16px] font-medium text-th-paper/85 lg:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="transition-colors hover:text-th-accent"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/teehooai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-th-paper/80 transition-colors hover:border-th-accent hover:text-th-accent"
              aria-label="Teehoo AI on GitHub"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-th-rule">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-th-paper" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <p className="font-mono-tag mb-8 inline-flex items-center gap-2 rounded-full border border-th-rule bg-th-card/80 px-3 py-1 text-[14px] uppercase tracking-[0.2em] text-th-ink-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-th-accent-green" />
            Los Angeles · est. 2025
          </p>
          <h1 className="font-display max-w-[18ch] text-[68px] leading-[0.94] text-th-ink sm:text-[128px]">
            An AI Lab for<br />
            the agent era.
          </h1>
          <p className="mt-8 max-w-2xl text-[20px] leading-[1.6] text-th-ink-soft sm:text-[22px]">
            We build the infrastructure layer for the AI-native economy &mdash;
            where{" "}
            <span className="font-semibold text-th-ink">
              decisions are delivered as a service
            </span>{" "}
            and every product is read by a{" "}
            <span className="font-semibold text-th-ink">human</span> and an{" "}
            <span className="font-semibold text-th-ink">agent</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-th-ink px-5 py-2.5 text-[14px] font-medium text-th-paper transition-colors hover:bg-th-accent"
            >
              See what we ship
            </a>
            <a
              href="https://github.com/teehooai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-th-rule bg-th-card px-5 py-2.5 text-[14px] font-medium text-th-ink transition-colors hover:border-th-accent hover:text-th-accent"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-th-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[280px_1fr] lg:gap-16 sm:py-32">
          <p className="font-mono-tag text-[14px] uppercase tracking-[0.2em] text-th-accent">
            00 / Mission
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-[44px] leading-[1.0] text-th-ink sm:text-[64px]">
              Infrastructure for the<br />
              AI-native economy.
            </h2>

            <p className="mt-10 text-[19px] leading-[1.7] text-th-ink-soft sm:text-[20px]">
              We believe work is becoming remote, agent-mediated, and
              outcome-driven &mdash; where{" "}
              <span className="font-semibold text-th-ink">
                decisions are delivered as a service
              </span>
              , workflows are automated by AI, and people collaborate not only
              with other people, but with agents.
            </p>

            {/* Four connected systems */}
            <div className="mt-14">
              <p className="font-mono-tag mb-6 text-[14px] uppercase tracking-[0.2em] text-th-accent">
                Four connected systems
              </p>
              <ul className="space-y-6">
                {[
                  {
                    k: "AI Security & Visibility",
                    v: "Runtime protection, auditing, certification, and behavioral visibility for AI tools, agents, and MCP ecosystems.",
                  },
                  {
                    k: "AI-Native Martech",
                    v: "Helping brands win in the age of AI recommendations, autonomous discovery, and agent-driven commerce.",
                  },
                  {
                    k: "AI Financial Systems",
                    v: "Explainable autonomous research and execution systems for capital markets.",
                  },
                  {
                    k: "Local Services Infrastructure",
                    v: "Modernizing fragmented local-service industries — and empowering the workers traditionally farthest from advanced technology.",
                  },
                ].map((s) => (
                  <li
                    key={s.k}
                    className="border-t border-th-rule pt-5 sm:grid sm:grid-cols-[1fr_1.4fr] sm:gap-8"
                  >
                    <p className="text-[18px] font-semibold text-th-ink">
                      {s.k}
                    </p>
                    <p className="mt-1 text-[16px] leading-[1.65] text-th-ink-soft sm:mt-0">
                      {s.v}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* We see a world where */}
            <div className="mt-16">
              <p className="font-mono-tag mb-6 text-[14px] uppercase tracking-[0.2em] text-th-accent">
                We see a world where
              </p>
              <div className="font-display space-y-2 text-[28px] leading-[1.2] text-th-ink sm:text-[40px]">
                <p>decisions become APIs.</p>
                <p>workflows become autonomous.</p>
                <p>professionals become AI-amplified.</p>
                <p>talent networks evolve into agent-to-agent economies.</p>
              </div>
            </div>

            <p className="mt-16 border-t border-th-rule pt-10 text-[19px] leading-[1.7] text-th-ink-soft sm:text-[20px]">
              Teehoo AI exists to make that transition{" "}
              <span className="font-semibold text-th-ink">
                secure, visible, and economically useful
              </span>{" "}
              &mdash; not just for elite AI users, but for the millions of
              professionals, operators, freelancers, and local workers
              historically left furthest from technological leverage.
            </p>
          </div>
        </div>
      </section>

      {/* Product matrix */}
      <section id="products" className="mx-auto max-w-6xl px-6">
        <div className="border-b border-th-rule py-12">
          <p className="font-mono-tag text-[14px] uppercase tracking-[0.2em] text-th-accent">
            Products
          </p>
          <h2 className="font-display mt-4 text-[48px] leading-[1.0] text-th-ink sm:text-[80px]">
            Four systems.<br />
            Sixteen products.
          </h2>
        </div>

        {/* Family tab strip — gold pill nav, jumps to anchors */}
        <div className="sticky top-20 z-30 -mx-6 border-b border-th-rule bg-th-paper/95 px-6 backdrop-blur">
          <ul className="flex gap-2 overflow-x-auto py-3 sm:gap-3">
            {PRODUCT_TABS.map((t) => (
              <li key={t.id} className="shrink-0">
                <a
                  href={`#${t.id}`}
                  className="font-mono-tag inline-flex items-center gap-2 rounded-full border border-th-rule bg-th-card px-3.5 py-1.5 text-[12px] uppercase tracking-[0.18em] text-th-ink-soft transition-colors hover:border-th-accent hover:text-th-accent"
                >
                  <span className="text-th-accent">{t.num}</span>
                  <span>{t.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FAMILIES.map((f) => (
          <FamilyBlock key={f.id} family={f} />
        ))}
      </section>

      {/* Open source — dark band with gold accents */}
      <section
        id="open-source"
        className="relative overflow-hidden border-y border-black bg-th-ink text-th-paper"
      >
        {/* Subtle gold radial glow top */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-th-accent/15 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono-tag text-[14px] uppercase tracking-[0.2em] text-th-accent">
            Open source
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-[44px] leading-[1.0] text-th-paper sm:text-[72px]">
            Public code,<br />
            public artifacts.
          </h2>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.65] text-th-paper/75">
            The pieces of our work that are useful to the broader AI-safety and
            developer communities live on GitHub and PyPI.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <a
              href="https://github.com/teehooai/spidershield"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-th-accent hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-[20px] font-medium text-th-paper">
                  spidershield
                </h3>
                <span className="text-th-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalIcon />
                </span>
              </div>
              <p className="font-mono-tag mt-2 text-[13px] text-th-paper/60">
                teehooai/spidershield · python · PyPI
              </p>
              <p className="mt-5 text-[16px] leading-[1.65] text-th-paper/80">
                Static scanner, runtime guard, MCP proxy, DLP engine, audit
                trail. Published to PyPI.
              </p>
            </a>
            <a
              href="https://github.com/teehooai/awesome-mcp-security"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-th-accent hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-[20px] font-medium text-th-paper">
                  awesome-mcp-security
                </h3>
                <span className="text-th-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalIcon />
                </span>
              </div>
              <p className="font-mono-tag mt-2 text-[13px] text-th-paper/60">
                teehooai/awesome-mcp-security · curated list
              </p>
              <p className="mt-5 text-[16px] leading-[1.65] text-th-paper/80">
                MCP server security resources, tools, and research — kept up to
                date as the ecosystem moves.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-th-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[280px_1fr] lg:gap-16 sm:py-32">
          <p className="font-mono-tag text-[14px] uppercase tracking-[0.2em] text-th-accent">
            About
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-[44px] leading-[1.0] text-th-ink sm:text-[64px]">
              Experiments now.<br />
              A team next.
            </h2>
            <div className="mt-10 space-y-7 text-[19px] leading-[1.7] text-th-ink-soft sm:text-[20px]">
              <p>
                Teehoo AI is a lab in its experimental phase. We run live bets
                across four systems &mdash; security, martech, finance, local
                &mdash; to find which ones compound into something larger.{" "}
                <span className="font-semibold text-th-ink">
                  Lean by design, not by limit
                </span>
                : the job right now is to validate the substrate before
                scaling the team around it.
              </p>
              <p>
                When a bet proves out, the team scales with it &mdash; toward
                dozens of people building on the same foundation. The four
                systems look unrelated. They share one design constraint:{" "}
                <span className="font-semibold text-th-ink">
                  the agent makes the decision, and the audit trail stays
                  readable to a human
                </span>
                . Prove it once; deploy it everywhere.
              </p>
            </div>
            <div className="mt-16 border-t border-th-rule pt-10">
              <p className="font-mono-tag mb-4 text-[14px] uppercase tracking-[0.2em] text-th-accent">
                Founder
              </p>
              <p className="font-display text-[34px] leading-[1.05] text-th-ink sm:text-[40px]">
                Owen Wang
              </p>
              <p className="mt-4 text-[19px] leading-[1.6] text-th-ink">
                Founder, operator, and systems builder focused on the AI-native
                economy.
              </p>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-th-ink-soft">
                <p>
                  Currently building{" "}
                  <span className="font-semibold text-th-ink">Teehoo AI</span>{" "}
                  &mdash; a portfolio of systems spanning AI security, agent
                  visibility, autonomous financial research, remote-work
                  infrastructure, and AI-powered local-service networks.
                </p>
                <p>
                  Previously built and scaled a fintech company to{" "}
                  <span className="font-semibold text-th-ink">
                    4,800+ employees
                  </span>
                  , managed systematic investment frameworks in public markets,
                  and researched business systems and market behavior at{" "}
                  <span className="font-semibold text-th-ink">
                    Peking University
                  </span>
                  .
                </p>
              </div>
              <div className="mt-6">
                <p className="font-mono-tag mb-2 text-[13px] uppercase tracking-[0.18em] text-th-ink-dim">
                  Interested in
                </p>
                <p className="text-[17px] leading-[1.65] text-th-ink-soft">
                  Decision as a Service · agent economies · AI-native workflows
                  · the future of human + AI collaboration.
                </p>
              </div>
              <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-th-ink-dim">
                <span>Los Angeles · Fullhouse Asset Management LLC</span>
                <a
                  href="https://www.linkedin.com/in/owen-wang-83b1522b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-th-accent"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                  LinkedIn
                </a>
                <a
                  href="mailto:hello@teehooai.com"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-th-accent"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                  hello@teehooai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — dark with gold accents */}
      <footer className="bg-th-ink text-th-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-10" aria-label="Teehoo AI">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mark.png?v=4"
                alt=""
                width={418}
                height={357}
                className="h-16 w-auto select-none"
                draggable={false}
              />
              <span className="text-[28px] font-bold tracking-tight text-th-accent">
                Teehoo AI
              </span>
            </Link>
            <p className="font-mono-tag mt-4 text-[14px] uppercase tracking-[0.2em] text-th-paper/55">
              Fullhouse Asset Management LLC · Los Angeles, California
            </p>
          </div>
          <div className="flex items-center gap-7 text-[15px] text-th-paper/85">
            <a
              href="https://github.com/teehooai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-th-accent"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/owen-wang-83b1522b2/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-th-accent"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              LinkedIn
            </a>
            <a
              href="mailto:hello@teehooai.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-th-accent"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              hello@teehooai.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-5 text-[12px] text-th-paper/55 sm:text-right">
            © {new Date().getFullYear()} Fullhouse Asset Management LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
