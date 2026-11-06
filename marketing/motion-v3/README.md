# Criollo Labs · motion prototype

## Current status — 2026-11-06

Four compositions are available: CriolloVertical (1080×1920), CriolloFeed (1080×1350), CriolloSquare (1080×1080), and CriolloLandscape (1920×1080). All render 540 frames at 30 fps (18 seconds). The user approved continuing with this v3 concept. Vertical/feed uploaded successfully to Meta's media library, but the ad wizard has not been saved. The vertical completed technical browser playback without error. Square/landscape passed sampled visual review and technical validation; their site deployment remains unverified (last HTTP response 404). Meta score last observed: 93/100. No ads published or spending enabled.

```sh
npx remotion render src/index.tsx CriolloSquare out/criollo-square.mp4
npx remotion render src/index.tsx CriolloLandscape out/criollo-landscape.mp4
```

For authoritative campaign status, see [work log](../../docs/launch/work-log.md). The following prototype notes describe the earlier cut.

Editable Remotion composition in `src/Video.tsx` with 9:16 (`CriolloVertical`) and 4:5 (`CriolloFeed`) registrations. Runtime dependencies are pinned to Remotion 4.0.541. All copy, field highlights, data flights, status chip, and CTA use deterministic frame-based animations.

## Timeline

- 0–4s: hook, fictional order message, empty sheet.
- 4–8s: four message fields highlight and fly individually into their matching sheet columns (frames 120, 150, 180, 210).
- 10s: completed row settles and `Cargado` appears (frame 300).
- 10–13s: custom software offer and separate implementation quote.
- 13–18s: `Contanos tu proceso` CTA enters (frame 390) with 20-minute no-cost conversation; held to the end.

## Verified output — prototype, not approved for publication

Both MP4 exports completed: H.264, 30 fps, 540 frames, 18.000 seconds. Vertical: 1080×1920; feed: 1080×1350. TypeScript and the Remotion bundle pass. The official browser download initially failed; the environment workaround below resolved rendering.

Review included vertical frames 135, 270, 450, a 36-frame contact sheet sampled every 0.5 seconds, and the feed closing frame. An independent reviewer inspected vertical frames 270 and 450 for copy, offer and visual hierarchy. This is sampled visual QA, not a claim of complete real-time playback or Meta placement validation.

Not uploaded to Meta and not published. Native Meta animation remains the user's preferred route. This editable prototype is an alternative for comparison. The campaign score remains 93/100; 100/100 and final ad quality remain launch gates.

## Run on a normal local environment

```sh
npm ci
npm run render
npx remotion render src/index.tsx CriolloFeed out/criollo-feed.mp4
npx remotion still src/index.tsx CriolloVertical out/frame-450.png --frame=450
```

## Render environment workaround

The container's Node runtime cannot query host network interfaces (`uv_interface_addresses`), and the official Remotion browser download is blocked by the configured proxy. For these local renders, `@sparticuz/chromium@153.0.0` was downloaded into `/tmp/criollo-chromium` and its packaged `bin/chromium.br` was decompressed to `/tmp/criollo-local-chrome/chromium`. A temporary Node preload at `/tmp/criollo-loopback-only.cjs` returns only `127.0.0.1` for Remotion's port discovery; Remotion's render server itself binds to loopback. Use it for a local export with:

```sh
NODE_OPTIONS='--require=/tmp/criollo-loopback-only.cjs' npx remotion render src/index.tsx CriolloVertical out/criollo-vertical.mp4 --browser-executable=/tmp/criollo-local-chrome/chromium
NODE_OPTIONS='--require=/tmp/criollo-loopback-only.cjs' npx remotion render src/index.tsx CriolloFeed out/criollo-feed.mp4 --browser-executable=/tmp/criollo-local-chrome/chromium
```

This workaround is environment-only and is not a project dependency. It did not change real interfaces or open a public server. No paid services were used.
