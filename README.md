# UCMail — Unread Category Mail

> Browser extension that fixes what Gmail's UI won't: **hide read mail in native tabs**,
> **batch-unsubscribe** with smart throttling, and **export e-mails to clean Markdown**
> for your local knowledge base.

![stack](https://img.shields.io/badge/Plasmo-MV3-blueviolet) ![ts](https://img.shields.io/badge/TypeScript-strict-blue) ![react](https://img.shields.io/badge/React-19-61dafb) ![license](https://img.shields.io/badge/license-MIT-green)

## Status

`0.1.0` — early development (work in progress). The extension is being built; the public
surface may still change ([SemVer](https://semver.org/) `0.y.z` = unstable).

## Features (pillars)

| # | Pillar | Status |
| - | --- | --- |
| 1 | **Native Tab Filter** — surgically hides read messages in Gmail's default tabs (Primary, Promotions, Social, Updates, Forums) without breaking the native layout | 🚧 scaffold |
| 2 | **Batch Unsubscribe** — async sweep of the subscriptions route with intelligent delays to avoid throttling | 🚧 scaffold |
| 3 | **PKM Bridge** — one-click export of e-mails to Markdown files with structured metadata headers | 🚧 scaffold |

## Development

```bash
pnpm install
pnpm dev        # Plasmo HMR — load build/chrome-mv3-dev in chrome://extensions
pnpm typecheck
pnpm test
```

## Contributing

All work targets the **`develop`** branch — PRs against `main` are rejected by policy.
See [CONTRIBUTING.md](CONTRIBUTING.md). Docs live in the companion repo
[`UCMail-docs`](https://github.com/alexjesustech/UCMail-docs).

## License

[MIT](LICENSE) © 2026 Alex Jesus.

---
**Alex Jesus** · [`alexjesustech`](https://github.com/alexjesustech) · alexjesus.tech@gmail.com
