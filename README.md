# ChatDomain Plugin for Claude Code

Domain name research plugin — find available domain names, check availability across TLDs, and compare registration prices.

## Skills

- `/domain-finder` — Find the perfect available domain name for a product idea. Generates naming theses, checks availability in parallel, and ranks the best options with pricing.

## Installation

Add this plugin to Claude Code by pointing it to this directory.

## Configuration

The MCP server URL is configured in `.mcp.json`. By default it points to the production API:

```json
{
  "mcpServers": {
    "chatdomain": {
      "type": "http",
      "url": "https://api.chatdomain.ai/mcp"
    }
  }
}
```

## MCP Tools

The ChatDomain MCP server provides:

- **`available_domains`** — Check domain availability across multiple TLDs (up to 10 names x 15 TLDs per call)
- **`domain_prices`** — Get registration prices from multiple providers (GoDaddy, Namecheap, Netim, Vercel)
