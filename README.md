# Teehoo AI

Independent AI software studio. Los Angeles. Building products across agent security, AI-native martech, financial systems, and local services.

> [teehooai.com](https://www.teehooai.com) · No outside investors. No growth-at-all-costs roadmap. We build, ship, and operate the things below ourselves.

---

## Products

### Agent Security
- **[SpiderShield](https://github.com/teehooai/spidershield)** — Scan, rate, and harden MCP servers. Static scanner with 46 codes, runtime tool-call firewall, transparent MCP proxy, DLP, audit trail. [![PyPI](https://img.shields.io/pypi/v/spidershield)](https://pypi.org/project/spidershield/)
- **SpiderRating** — Security index and certification for AI agents, tools, and skills. EU AI Act-ready reporting.
- **[awesome-mcp-security](https://github.com/teehooai/awesome-mcp-security)** — Curated MCP server security resources.

### AI-Native Martech
- **Teehoo Martech** — AI-Native Martech Platform — AI Brand Monitor + 9,800+ provider directory.
- **[SpiderCPS](https://spidercps.com)** — AI-native CPS affiliate network for North America. 20% flat take, USD settlement.
- **[SpiderGig](https://spidergig.com)** — Bilingual freelance marketplace bridging Chinese-speaking talent and global brands.
- **SpiderRemote** — Curated remote-work aggregator for Chinese-speaking talent.
- **[Hired Local Pros](https://hiredlocalpros.com)** — AI-matched local services marketplace.
- **[SpiderAsk](https://spiderask.com)** — Bilingual life assistant for overseas Chinese. Plus a personal twin agent.
- **[Panda Deals Daily](https://pandadealsdaily.com)** — Bilingual deals editorial. Verified price drops only.

### AI Financial Systems
- **Fullhouse Asset** — AI hedge fund. Autonomous trading research and execution.
- **AI Quant Lab** — Autonomous alpha factor discovery via overnight research loops.
- **Teehoo Core Shell** — Explainable alpha & risk. Event-driven causal narratives.
- **Fullhouse Sports** — AI sports prediction. Model-driven edge discovery.

### Local Services
- **R&R Site Network** — Single-niche local service sites (pool cleaning, drain cleaning) operated from a shared template.
- **Fullhouselife** — 海外华人本地生活服务 directory.

---

## Location

Los Angeles, California · Fullhouse Asset Management LLC

---

## This repository

Source for [teehooai.com](https://www.teehooai.com) — the public website.

```bash
pnpm install
pnpm dev          # http://localhost:3050
pnpm build        # static export to ./out
```

Stack: Next.js 15 (App Router, SSG) · React 19 · Tailwind CSS 4 · Cloudflare Pages.

Deploy:

```bash
pnpm build
npx wrangler pages deploy out --project-name=teehooai --branch=main --commit-dirty=true
```
