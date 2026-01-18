// crawlRoutes.js
// Simple Node script to crawl http://localhost:3000 and collect internal URLs (depth 2)
// Using built-in fetch (Node 18+)
const base = 'http://localhost:3000';
const visited = new Set();
const routes = new Set();
async function crawl(url, depth) {
    if (depth === 0 || visited.has(url)) return;
    visited.add(url);
    try {
        const res = await fetch(url);
        if (!res.ok) return;
        const html = await res.text();
        routes.add(url);
        const regex = /href\s*=\s*"([^#?\"]+)"/gi;
        let match;
        while ((match = regex.exec(html)) !== null) {
            let link = match[1];
            // ignore external links
            if (link.startsWith('http')) {
                if (!link.startsWith(base)) continue;
                // keep full URL
            } else {
                // relative link
                if (!link.startsWith('/')) continue;
                link = base + link;
            }
            routes.add(link);
            await crawl(link, depth - 1);
        }
    } catch (e) {
        // ignore errors
    }
}
(async () => {
    await crawl(base, 2);
    const out = Array.from(routes).sort();
    console.log(out.join('\n'));
})();
