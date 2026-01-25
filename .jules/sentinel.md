## 2024-10-24 - Security Headers and MIME Types
**Vulnerability:** Missing Security Headers (X-Content-Type-Options) hiding invalid resource loading.
**Learning:** Enabling `X-Content-Type-Options: nosniff` caused a latent bug to surface where a `.ttf` file was being loaded via `<link rel="stylesheet">`. Browsers block this when strict MIME checking is on.
**Prevention:** When adding security headers, ensure all resources are loaded with correct semantics (e.g., use `@font-face` for fonts, not `<link>`).
