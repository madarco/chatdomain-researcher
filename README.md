<h1 style="font-weight:normal">
  &nbsp;ChatDomain&nbsp;
  <a href="https://www.npmjs.com/package/chatdomain"><img src="https://img.shields.io/npm/d18m/chatdomain?label=npm" /></a>
  <a href="https://github.com/madarco/chatdomain-researcher/blob/main/LICENSE"><img src="https://img.shields.io/github/license/madarco/chatdomain-researcher.svg?colorB=ff0000"></a>
  <img src="https://img.shields.io/github/stars/madarco/chatdomain-researcher" />
</h1>

Domain name research toolkit — find available domain names, check availability across TLDs, and compare registration prices. Works as a CLI, REST API, Claude Code skill, Claude Code plugin, or MCP server.

<p align="center">

![ChatDomain Demo](demo.gif)
</p>

```bash
$ npx skills add https://github.com/madarco/chatdomain-researcher --skill domain-researcher
# For Claude Code, OpenClaw, Codex, OpenCode etc.

$ npx chatdomain check madarco.ai
# madarco: .ai

$ npx chatdomain prices madarco.ai
# madarco.ai - godaddy: $79.99, namecheap: $69.99, netim: $105, vercel: $80
```

## Skill: `/domain-researcher`

An AI-powered domain naming strategist for Claude Code, OpenClaw, Codex, OpenCode etc.

Describe your product idea and it will:

1. Research competitors and naming patterns in your space
2. Generate 5 distinct naming theses (professional, playful, technical, compound, abstract)
3. Launch 5 parallel agents — each generating 15-20 name ideas with variations
4. Check availability across all TLDs `.com`, `.ai`, `.io`, etc.
5. Rank the top domains by quality, fetch live pricing, and present results

### Install the skill

```bash
npx skills add https://github.com/madarco/chatdomain-researcher --skill domain-researcher
```

Then use `/domain-researcher` in Claude Code.

## CLI

Quick domain checks from the terminal:

```bash
$ npx chatdomain check madarco.ai
madarco: .ai

$ npx chatdomain prices madarco.ai
madarco.ai - godaddy: $79.99, namecheap: $69.99, netim: $105, vercel: $80

$ npx chatdomain check stripe,notion,linear --tlds=com,ai,io
$ npx chatdomain prices stripe.com,notion.ai,linear.dev
```

### Commands

| Command                                 | Description                                                                               |
| --------------------------------------- | ----------------------------------------------------------------------------------------- |
| `chatdomain check <names> [--tlds=...]` | Check availability of comma-separated names across TLDs (default: com,ai,io,dev,co,app)   |
| `chatdomain prices <domains>`           | Get registration prices from multiple providers (GoDaddy, Namecheap, Netim, Vercel, etc.) |

### Global install

```bash
npm install -g chatdomain
```

## REST API

The ChatDomain API is available at `https://api.chatdomain.ai/api`.

| Endpoint                                      | Method | Description                                            |
| --------------------------------------------- | ------ | ------------------------------------------------------ |
| `/api/check?names=name1,name2&tlds=com,ai,io` | GET    | Check availability (up to 10 names x 15 TLDs per call) |
| `/api/prices?domains=name1.com,name2.ai`      | GET    | Get per-provider registration prices                   |

### Examples

```bash
curl "https://api.chatdomain.ai/api/check?names=stripe,notion&tlds=com,ai,io"
curl "https://api.chatdomain.ai/api/prices?domains=stripe.com,notion.ai"
```

## Claude Code Plugin

Add this repo as a Claude Code plugin marketplace to get both the `/domain-researcher` skill and the MCP server.

### Install

```
/plugin marketplace add madarco/chatdomain-researcher
/plugin install chatdomain@chatdomain-researcher
```

## MCP Server

A hosted MCP server is available for clients that support the Model Context Protocol.

### Configuration

Add to your `.mcp.json` or MCP client settings:

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

### Available tools

| Tool                | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| `available_domains` | Check domain availability across multiple TLDs (up to 10 names x 15 TLDs per call)  |
| `domain_prices`     | Get registration prices from multiple providers (GoDaddy, Namecheap, Netim, Vercel) |
