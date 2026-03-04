// js/main.js
(function () {
    'use strict';

    // =========================================================================
    // STATIC DATASET
    // =========================================================================
    // Data derived from provided YouTube snapshot
    const videosData = [
        { id: 'v1', type: 'short', title: 'Yhwach edit | Devil eyes (slowed & reverb) | #shorts #anime #bleach', views: '858 views', age: 'Latest', tags: ['edits', 'anime', 'shorts'] },
        { id: 'v2', type: 'video', title: '"THE BOY WHO LIVED" Harry Potter Edit || Memory Reboot (Slowed)', views: '2K views', age: 'Recent', tags: ['edits', 'movies'] },
        { id: 'v3', type: 'video', title: 'Light Yagami edit', views: '2.2K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v4', type: 'video', title: 'Voldemort | Harry Potter | Montagem Allucinate', views: '8.9K views', age: 'Popular', tags: ['edits', 'movies'] },
        { id: 'v5', type: 'video', title: 'Nostalgia', views: '1.4K views', age: 'Recent', tags: ['edits'] },
        { id: 'v6', type: 'video', title: 'Bro owns this song | Dio Brando |', views: '2.3K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v7', type: 'video', title: 'Perfect Cell | Dragon Ball Z | Montagem Xonada', views: '7.8K views', age: 'Popular', tags: ['edits', 'anime'] },
        { id: 'v8', type: 'video', title: 'Eris edit | Mushoku tensei Season 1|', views: '2.1K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v9', type: 'video', title: 'Caesar\'s death | JOJO Part 2 |', views: '1.9K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v10', type: 'video', title: '#jojo #jjba #jojosbizzareadventure #jojosbizarreadventure', views: '1.4K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v11', type: 'video', title: 'Best drip in anime |Jojo\'s bizzare adventure |', views: '8.4K views', age: 'Popular', tags: ['edits', 'anime'] },
        { id: 'v12', type: 'video', title: 'Goku | Life Force |', views: '1.7K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v13', type: 'short', title: 'Spiderman | @zackdfilms', views: '967 views', age: 'Recent', tags: ['edits', 'movies', 'shorts'] },
        { id: 'v14', type: 'video', title: '#comedyeffect', views: '1.1K views', age: 'Recent', tags: ['comedy'] },
        { id: 'v15', type: 'video', title: 'Best character in JJK', views: '918 views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v16', type: 'video', title: 'Hope Of The Universe', views: '678 views', age: 'Recent', tags: ['edits'] },
        { id: 'v17', type: 'video', title: 'Goku warm up edit', views: '5.8K views', age: 'Popular', tags: ['edits', 'anime'] },
        { id: 'v18', type: 'video', title: 'Best anime character', views: '4.4K views', age: 'Popular', tags: ['edits', 'anime'] },
        { id: 'v19', type: 'video', title: 'Spiderman pays homage to DBZ', views: '2.9K views', age: 'Recent', tags: ['edits', 'movies', 'anime'] },
        { id: 'v20', type: 'video', title: 'Technoblade aura', views: '4.7K views', age: 'Popular', tags: ['gaming'] },
        { id: 'v21', type: 'video', title: '“The Realization” 💀💀- Squid Game 3 |', views: '814 views', age: 'Recent', tags: ['edits', 'shows'] },
        { id: 'v22', type: 'video', title: 'Pov: Brawl Stars in 2035', views: '747 views', age: 'Recent', tags: ['gaming'] },
        { id: 'v23', type: 'video', title: 'Best Minecraft Player', views: '1.6K views', age: 'Recent', tags: ['gaming'] },
        { id: 'v24', type: 'short', title: 'Gi-hun\'s final fights | Squid Game 3 Edit #shorts #kdrama #ytday #squidgame #squidgame3', views: '527 views', age: 'Recent', tags: ['edits', 'shows', 'shorts'] },
        { id: 'v25', type: 'video', title: 'When Sukuna Scared Everyone 💀 || Jujutsu kaisen #gojo #sukuna #jjk', views: '143 views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v26', type: 'video', title: 'INSANE DODGE IN ROBLOX PIGGY', views: '1.1K views', age: 'Recent', tags: ['gaming'] },
        { id: 'v27', type: 'short', title: 'Jun Hu Finally Made It 💀| Squid Game 3 Edit #shorts #kdrama #ytday #squidgame #squidgame3', views: '40K views', age: 'Popular', tags: ['edits', 'shows', 'shorts'] },
        { id: 'v28', type: 'video', title: 'Zenitsu Edit Demon Slayer Trailer', views: '796 views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v29', type: 'video', title: 'When Po Became Serious┃Kung Fu Panda 2 ┃Monatgem Batchi', views: '91 views', age: 'Recent', tags: ['edits', 'movies'] },
        { id: 'v30', type: 'short', title: 'kira edit #deathnote #anime #edit #viral #shorts #lightyagami', views: '1.7K views', age: 'Recent', tags: ['edits', 'anime', 'shorts'] },
        { id: 'v31', type: 'video', title: 'NEW Sparky SKIN in PIGGY! (Full Showcase!)', views: '631 views', age: 'Recent', tags: ['gaming'] },
        { id: 'v32', type: 'video', title: 'Prime Era | Goku Edit |', views: '2K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v33', type: 'video', title: 'The Goat 🗿🐐 || Light Yagami Edit ||', views: '1.1K views', age: 'Recent', tags: ['edits', 'anime'] },
        { id: 'v34', type: 'short', title: 'How Dragon Ball actually is 🔥🔥#shorts #edit #manga', views: '1K views', age: 'Recent', tags: ['edits', 'anime', 'shorts'] },
        { id: 'v35', type: 'video', title: 'GI HUN MEETS FRONTMAN #squidgame #squidgameedit #kdrama #viral #edit #capcut', views: '27K views', age: 'Popular', tags: ['edits', 'shows'] },
        { id: 'v36', type: 'short', title: 'Grow A Garden #shorts #viral', views: '1K views', age: 'Recent', tags: ['shorts'] },
        { id: 'v37', type: 'video', title: 'Gi Hun Meets Salesman Again | Squid Game #kdrama #squidgame #edit', views: '4.3K views', age: 'Popular', tags: ['edits', 'shows'] },
        { id: 'v38', type: 'short', title: 'Thanos Is Back 💀| Squid Game 3 Edit | NADA NADA (SLOWED)#shorts #kdrama #squidgame #batsnefs #edit', views: '8.4K views', age: 'Popular', tags: ['edits', 'shows', 'shorts'] },
        { id: 'v39', type: 'short', title: 'The Moment Gi-hun Realized… | Squid Games Season 3 #shorts #kdrama #ytday #squidgame #squidgame3', views: '36K views', age: 'Popular', tags: ['edits', 'shows', 'shorts'] },
        { id: 'v40', type: 'short', title: 'player 456 vs 333 | squid game #shorts #squidgame #edit', views: '1.6K views', age: 'Recent', tags: ['edits', 'shows', 'shorts'] },
        { id: 'v41', type: 'video', title: 'DO nOt ChECk tHe SoUnD...💀💀', views: '3.8K views', age: 'Popular', tags: ['comedy'] },
        { id: 'v42', type: 'video', title: '2020 Kids assemble 🗣️🗣️||Get Get Down 🗿😈|| Goku Edit || #anime #edit', views: '52K views', age: 'Popular', tags: ['edits', 'anime'] },
        { id: 'v43', type: 'short', title: 'POV: Everyone After Hearing This Song #shorts #minecraft', views: '10K views', age: 'Popular', tags: ['gaming', 'shorts'] },
        { id: 'v44', type: 'video', title: 'SPOİLER‼️|| Diva baby 💅🏻 || ibb:ben||#kdrama #edit #ytdayibenionecikarnolur #rek #squidgame #squidgame3', views: '3.2K views', age: 'Popular', tags: ['edits', 'shows'] },
        { id: 'v45', type: 'video', title: 'Let\'s Gooooo Frank', views: '1.6K views', age: 'Recent', tags: ['comedy'] }
    ];

    // =========================================================================
    // DOM ELEMENTS
    // =========================================================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const pixelOverlayBtn = document.getElementById('toggle-pixel');
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const mediaGrid = document.getElementById('media-grid');
    const pageType = document.body.dataset.page; // e.g., 'videos', 'shorts'

    // =========================================================================
    // NAVIGATION
    // =========================================================================
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        }));
    }

    // =========================================================================
    // RENDER MEDIA CARDS
    // =========================================================================
    const renderCards = (data) => {
        if (!mediaGrid) return;
        mediaGrid.innerHTML = '';

        if (data.length === 0) {
            mediaGrid.innerHTML = '<p class="minecraft-font" style="grid-column: 1 / -1; text-align: center;">No media found.</p>';
            return;
        }

        data.forEach(item => {
            const isShort = item.type === 'short';
            const cardHtml = `
                <article class="card ${isShort ? 'short' : ''}" tabindex="0">
                    <div class="card-img-wrapper">
                        <!-- Placeholder asset -> update in js/main.js or CSS if needed -->
                        <img src="assets/placeholder.jpg" alt="${item.title} Thumbnail" class="card-img" loading="lazy">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${item.title}</h3>
                        <div class="card-meta">
                            <span>${item.views}</span>
                            <span>${item.age}</span>
                        </div>
                        <div class="card-tags">
                            ${item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                        </div>
                    </div>
                </article>
            `;
            mediaGrid.insertAdjacentHTML('beforeend', cardHtml);
        });
    };

    // Initial render for Videos / Shorts pages
    if (mediaGrid && pageType) {
        const initialData = pageType === 'shorts'
            ? videosData.filter(v => v.type === 'short')
            : videosData.filter(v => v.type === 'video');
        renderCards(initialData);

        // =========================================================================
        // FILTERING & SEARCH
        // =========================================================================
        let currentFilter = 'all';
        let searchQuery = '';

        const filterData = () => {
            let baseData = pageType === 'shorts'
                ? videosData.filter(v => v.type === 'short')
                : videosData.filter(v => v.type === 'video');

            let filtered = baseData.filter(item => {
                const matchesFilter = currentFilter === 'all' || item.tags.includes(currentFilter);
                const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesFilter && matchesSearch;
            });
            renderCards(filtered);
        };

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                filterData();
            });
        }

        if (filterBtns.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter;
                    filterData();
                });
            });
        }
    }

    // =========================================================================
    // PIXEL OVERLAY TOGGLE
    // =========================================================================
    const togglePixelOverlay = () => {
        let overlay = document.querySelector('.pixel-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'pixel-overlay';
            document.body.appendChild(overlay);
        }

        const isActive = overlay.classList.toggle('active');
        localStorage.setItem('pixel-overlay-active', isActive);
        showToast(`Pixel overlay ${isActive ? 'enabled' : 'disabled'}`);
    };

    if (pixelOverlayBtn) {
        pixelOverlayBtn.addEventListener('click', togglePixelOverlay);
    }

    // Restore pixel overlay state
    if (localStorage.getItem('pixel-overlay-active') === 'true') {
        let overlay = document.createElement('div');
        overlay.className = 'pixel-overlay active';
        document.body.appendChild(overlay);
    }

    // =========================================================================
    // TOAST NOTIFICATIONS (ACHIEVEMENTS)
    // =========================================================================
    const showToast = (message, icon = '🏆') => {
        const container = document.getElementById('toast-container') || createToastContainer();

        const toastHtml = `
            <div class="toast show">
                <span class="toast-icon">${icon}</span>
                <span class="minecraft-font">${message}</span>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', toastHtml);
        const newToast = container.lastElementChild;

        // Trigger reflow
        void newToast.offsetWidth;

        setTimeout(() => {
            newToast.classList.remove('show');
            setTimeout(() => newToast.remove(), 300);
        }, 3000);
    };

    const createToastContainer = () => {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    };

    // =========================================================================
    // EASTER EGG BADGE COLLECTOR
    // =========================================================================
    const badges = document.querySelectorAll('.easter-egg-badge');
    const collectedKey = 'collected-badges';

    // Initialize collection array if not exists
    if (!localStorage.getItem(collectedKey)) {
        localStorage.setItem(collectedKey, JSON.stringify([]));
    }

    badges.forEach(badge => {
        badge.addEventListener('click', function() {
            const badgeId = this.dataset.id;
            const tooltipText = this.dataset.tooltip;
            let collected = JSON.parse(localStorage.getItem(collectedKey));

            if (!collected.includes(badgeId)) {
                collected.push(badgeId);
                localStorage.setItem(collectedKey, JSON.stringify(collected));

                // Achievement: First badge
                if (collected.length === 1) {
                    showToast('Achievement Unlocked: First Badge Collected!');
                } else {
                    showToast(`Found: ${tooltipText.split(' — ')[0]}`);
                }

                // Visual feedback
                this.style.background = 'rgba(187, 134, 252, 0.5)';
                this.style.opacity = '1';
                this.style.transform = 'scale(1.2) rotate(360deg)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 500);

                // All badges achievement
                if (collected.length === 11) { // total entities
                    setTimeout(() => {
                        showToast('Achievement Unlocked: Master Collector!', '🌟');
                    }, 1500);
                }
            } else {
                showToast(`Already found: ${tooltipText.split(' — ')[0]}`, 'ℹ️');
            }
        });

        // Highlight already collected on page load
        const collected = JSON.parse(localStorage.getItem(collectedKey));
        if (collected.includes(badge.dataset.id)) {
            badge.style.opacity = '0.8';
            badge.style.background = 'rgba(187, 134, 252, 0.2)';
        }
    });

    // =========================================================================
    // KONAMI CODE & SECRET MODAL
    // =========================================================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    // Create Secret Modal HTML dynamically
    const createSecretModal = () => {
        const modalHtml = `
            <div id="secret-modal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close modal">&times;</button>
                    <h2 class="minecraft-font" style="color: var(--accent); margin-bottom: 1rem;">Secret Archives Unlocked</h2>
                    <p>Welcome to the hidden edits vault. Placeholder audio ready.</p>

                    <ul class="secret-list minecraft-font">
                        <li>
                            <span>Project Yhwach (Unreleased)</span>
                            <button class="btn btn-secondary btn-sm play-audio">Play</button>
                        </li>
                        <li>
                            <span>The Boy Who Lived - Extended</span>
                            <button class="btn btn-secondary btn-sm play-audio">Play</button>
                        </li>
                    </ul>
                    <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">
                        *Maintainer Note: Replace "play-audio" buttons with actual iframe embeds or HTML5 audio tags connected to real sources.
                    </p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('secret-modal');
        const closeBtn = modal.querySelector('.modal-close');

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Basic placeholder audio interaction
        modal.querySelectorAll('.play-audio').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.textContent === 'Play') {
                    this.textContent = 'Playing...';
                    this.style.borderColor = 'var(--accent)';
                    showToast('Playing placeholder audio snippet...', '🎵');
                    // Add actual logic here: e.g., new Audio('assets/demo.mp3').play();

                    setTimeout(() => {
                        this.textContent = 'Play';
                        this.style.borderColor = '';
                    }, 3000);
                }
            });
        });

        return modal;
    };

    document.addEventListener('keydown', (e) => {
        // Handle Konami Code
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                showToast('Secret Playlist Unlocked!', '🔓');
                let modal = document.getElementById('secret-modal') || createSecretModal();
                modal.classList.add('active');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }

        // Handle Global Shortcuts
        // Ignore shortcuts if typing in input/textarea
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            if (e.key.toLowerCase() === 'g') {
                e.preventDefault();
                if (searchInput) {
                    searchInput.focus();
                } else if (pageType !== 'videos') {
                    window.location.href = 'videos.html'; // Or redirect to page with search
                }
            } else if (e.key.toLowerCase() === 'k') {
                togglePixelOverlay();
            } else if (e.key.toLowerCase() === 'm') {
                showToast('Mute toggled (Placeholder)', '🔇');
                // Implement actual mute logic for audio/video elements here
            }
        }
    });

})();