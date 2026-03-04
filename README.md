# batsnefs.github.io

A complete overhaul of the static site for batsnefs, featuring a sleek dark UI, custom Minecraft typography, and several hidden easter eggs.

## Deployment

This site is composed of static HTML/CSS/JS files and can be hosted anywhere.
- **Vercel:** A `vercel.json` is provided to ensure aggressive caching of static assets.
- **GitHub Pages:** This project is fully compatible with GitHub Pages out-of-the-box. Ensure your repo settings point to the `main` branch root.

## Editing Instructions

Here is where to update the content:

- **Placeholder Assets:** Replace the following files in the `/assets/` directory with your real images. Do not rename them.
  - `avatar.jpg`
  - `placeholder.jpg`
  - `favicon.ico`
  - `logo.png`
- **Subscriber/Video Counts:** Update the numbers manually in the `.hero-stats` section inside `index.html` and `about.html`.
- **Video & Shorts Lists:** The media grid is populated dynamically. Open `js/main.js` and locate the `videosData` array at the top of the file to add, remove, or modify the videos displayed on the Videos and Shorts pages.

## Features & Easter Eggs

- **Konami Code:** Press `Up Up Down Down Left Right Left Right B A` on your keyboard to unlock a secret modal.
- **Badge Collector:** 11 hidden badges referencing various anime and platforms are scattered across the pages. Find and click them to unlock achievements!
- **Keyboard Shortcuts:**
  - `g`: Focus the search bar (or go to the Videos page if not present).
  - `k`: Toggle a Minecraft-style pixel overlay.
  - `m`: Trigger a placeholder mute function.
- **Responsive Layout:** Includes a custom animated hamburger menu for mobile navigation.

## QA Checklist (Pre-Merge Checks)

> **Site Health Note:** Before merging new changes, please review the following:
> - [ ] Run an HTML validator (e.g., W3C validator) to ensure semantic structure.
> - [ ] Open browser DevTools (F12) Console to verify no JS errors are thrown.
> - [ ] Test the site on a mobile device (or responsive design mode) to confirm the hamburger menu collapses and toggles correctly.
> - [ ] Test keyboard navigation (Tab) to ensure focus rings appear on all links, buttons, and video cards.
> - [ ] Try toggling the pixel vibe via the footer button and using the `k` shortcut.

---

*Note: Placeholder assets to replace: `/assets/avatar.jpg`, `/assets/placeholder.jpg`. Update subscriber/video counts in `/about.html` or `js/main.js`.*
