## Building security infrastructure for AI agents

I work on tools that help developers build safer AI agent systems — from static analysis to runtime protection.

### Projects

| Project | Description | |
|---------|-------------|--|
| [SpiderShield](https://github.com/teehooai/spidershield) | Security toolkit for AI agents — scanner, runtime guard, MCP proxy, DLP engine | [![PyPI](https://img.shields.io/pypi/v/spidershield)](https://pypi.org/project/spidershield/) |
| [TeeShield](https://github.com/nicholasyoder/teeshield) | Static analysis linter for MCP servers — security patterns, description quality, architecture scoring | [![PyPI](https://img.shields.io/pypi/v/teeshield)](https://pypi.org/project/teeshield/) |
| **SpiderRating** | Certification scoring engine for AI agent security — enterprise dashboard, compliance reporting | *Coming soon* |

### Stack

```
┌─────────────────────────────────────────────────┐
│             SpiderRating (Certification)         │
│         Rating Engine · Dashboard · API          │
├─────────────────────────────────────────────────┤
│             SpiderShield (Runtime)                │
│    Guard SDK · MCP Proxy · DLP · Policy Engine   │
├─────────────────────────────────────────────────┤
│             TeeShield (Static Analysis)          │
│   46 issue codes · SARIF · GitHub Action         │
└─────────────────────────────────────────────────┘
```

### Quick start

```python
from spidershield import SpiderGuard

guard = SpiderGuard(policy="strict", dlp="redact")
result = guard.before_call("file_write", {"path": "/etc/passwd", "content": data})
# result.action == "block"  -- policy violation
```

```bash
# Scan an MCP server for security issues
spidershield scan path/to/server.py

# Lint tool descriptions for quality
teeshield scan path/to/mcp_server.py
```

### Focus areas

- AI Agent Security — runtime protection, tool-call firewalls, policy enforcement
- MCP Ecosystem — static analysis, certification, supply chain security
- AI Infrastructure — observability, audit trails, data loss prevention

---

Los Angeles · [spidershield.dev](https://spidershield.dev) · [PyPI](https://pypi.org/project/spidershield/)
