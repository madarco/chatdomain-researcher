#!/usr/bin/env node

const API_BASE = "https://api.chatdomain.ai/api";

function usage() {
  console.log(`Usage:
  chatdomain check <names> [--tlds=com,ai,io,dev,co,app]
  chatdomain prices <domains>

Examples:
  chatdomain check stripe,notion,linear --tlds=com,ai,io
  chatdomain prices stripe.com,notion.ai,linear.dev`);
  process.exit(1);
}

function parseArgs(args) {
  const flags = {};
  const positional = [];
  for (const arg of args) {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      flags[key] = value ?? "true";
    } else {
      positional.push(arg);
    }
  }
  return { flags, positional };
}

async function check(names, tlds) {
  const params = new URLSearchParams({ names });
  if (tlds) params.set("tlds", tlds);
  const res = await fetch(`${API_BASE}/check?${params}`);
  if (!res.ok) {
    console.error(`Error: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

async function prices(domains) {
  const params = new URLSearchParams({ domains });
  const res = await fetch(`${API_BASE}/prices?${params}`);
  if (!res.ok) {
    console.error(`Error: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

const [command, ...rest] = process.argv.slice(2);
const { flags, positional } = parseArgs(rest);

if (command === "check") {
  const names = positional[0];
  if (!names) {
    console.error("Error: provide comma-separated names to check");
    usage();
  }
  await check(names, flags.tlds);
} else if (command === "prices") {
  const domains = positional[0];
  if (!domains) {
    console.error("Error: provide comma-separated domains (with TLDs)");
    usage();
  }
  await prices(domains);
} else {
  usage();
}
