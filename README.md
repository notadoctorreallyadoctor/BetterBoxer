# BetterBoxer

**BetterBoxer** is a skeleton Firefox extension designed to complement RethinkDNS DoH adblocking with a user-controlled whitelist override for domains.  
- Adblocking is performed upstream via DNS (using RethinkDNS with OISD Big and Hagez Pro++ lists as subscriptions).
- This extension allows users to whitelist domains, ensuring requests to those domains are not blocked by the extension (and can be added to the RethinkDNS allowlist for full effect).

## Features

- Whitelist override UI (to be implemented)
- Local whitelist storage
- Designed for easy extension and future reflection

## How to use

1. Configure system-wide adblocking with RethinkDNS and your preferred blocklists.
2. Add domains to the BetterBoxer whitelist via the extension UI (to be built).
3. For full effect, also add whitelisted domains to your RethinkDNS allowlist.

## Roadmap

- Add popup/options UI for whitelist management
- Sync whitelist with RethinkDNS allowlist via API (if available)
- Add local blocklist support (optional)

---
This is an initial skeleton for further development.
