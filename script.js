// ============================================================
//  CSS ART GALLERY — script.js
// ============================================================

const ArtGallery = (() => {

  // ── Artwork Data ──────────────────────────────────────────
  const artworks = [
    {
      id: 1,
      title: "Sunset Landscape",
      category: "Nature",
      difficulty: "Intermediate",
      description: "A warm sunset over purple mountains with animated drifting clouds and a shimmering water reflection. Pure CSS gradients, border-tricks, and keyframe animation.",
      isFavorite: false,
      techniques: ["gradients", "@keyframes", "border-radius", "pseudo-elements", "box-shadow", "overflow:hidden"],
      challenge: "Try animating the sun slowly sinking below the horizon using @keyframes on the `bottom` property.",
      htmlCode: `<div class="artwork-sunset">
  <div class="sunset-sun"></div>
  <div class="sunset-cloud sunset-cloud-1"></div>
  <div class="sunset-cloud sunset-cloud-2"></div>
  <div class="sunset-mountain"></div>
  <div class="sunset-water"></div>
</div>`,
      cssCode: `.artwork-sunset { background: linear-gradient(180deg,
  #1a0533 0%, #6b1aaa 25%, #e05c1a 55%,
  #f0a020 70%, #ffe082 100%); }
.sunset-sun { border-radius:50%; bottom:28%;
  box-shadow: 0 0 40px 20px rgba(255,180,0,.5); }
.sunset-cloud-1 { animation: cloudFloat 14s linear infinite; }
@keyframes cloudFloat { from{left:-120px} to{left:110%} }`,
    },
    {
      id: 2,
      title: "Night Sky",
      category: "Nature",
      difficulty: "Intermediate",
      description: "A serene night scene with twinkling stars, a crescent moon with shadow, rolling hills, and a shooting star streaking across the sky.",
      isFavorite: false,
      techniques: ["radial-gradient", "box-shadow", "multiple animations", "@keyframes", "CSS variables", "absolute positioning"],
      challenge: "Add more shooting stars at different angles by duplicating `.night-shooting-star` and changing the animation start positions.",
      htmlCode: `<div class="artwork-night">
  <div class="night-stars" id="nightStars"></div>
  <div class="night-moon"></div>
  <div class="night-hills"></div>
  <div class="night-shooting-star"></div>
</div>`,
      cssCode: `.night-moon { box-shadow: inset -8px -8px 0 rgba(200,180,80,.3); }
.star { animation: twinkle var(--dur,3s) var(--delay,0s) ease-in-out infinite alternate; }
@keyframes twinkle { from{opacity:.2} to{opacity:1} }
@keyframes shootingStar { 0%{left:0;top:20%;opacity:0} 35%{left:60%;top:45%;opacity:1} 40%{opacity:0} }`,
    },
    {
      id: 3,
      title: "Wise Owl",
      category: "Characters",
      difficulty: "Advanced",
      description: "A detailed CSS owl perched on a branch under a starry night sky. Features blinking eyes, textured feathers, ears, wings, and clawed feet — all built from divs and CSS.",
      isFavorite: false,
      techniques: ["border tricks", "pseudo-elements", "@keyframes", "transform", "radial-gradient", "complex nesting"],
      challenge: "Make the owl's head slowly rotate left and right using a CSS rotation animation on `.owl-face`, then snap back.",
      htmlCode: `<div class="artwork-owl">
  <div class="owl-branch"></div>
  <div class="owl-body">
    <div class="owl-ear owl-ear-left"><div class="cat-ear-inner"></div></div>
    <div class="owl-ear owl-ear-right"><div class="cat-ear-inner"></div></div>
    <div class="owl-face">
      <div class="owl-eye-wrap">
        <div class="owl-eye"><div class="owl-pupil"></div></div>
      </div>
      <div class="owl-eye-wrap">
        <div class="owl-eye"><div class="owl-pupil"></div></div>
      </div>
      <div class="owl-beak"></div>
    </div>
    <div class="owl-wing owl-wing-left"></div>
    <div class="owl-wing owl-wing-right"></div>
  </div>
  <div class="owl-feet">...</div>
</div>`,
      cssCode: `@keyframes owlBlink {
  0%, 90%, 100% { transform: scaleY(1); }
  95%            { transform: scaleY(0.1); }
}
.owl-eye { animation: owlBlink 4s 1s ease-in-out infinite; }
.owl-ear-left { border-right:8px solid transparent;
  border-bottom:18px solid #c8a060; }`,
    },
    {
      id: 4,
      title: "Cosmic Rings",
      category: "Abstract",
      difficulty: "Beginner",
      description: "Concentric rings of different colors spinning at different speeds around a glowing core. Dashed borders, solid borders, and a pulsing centre make this hypnotic.",
      isFavorite: false,
      techniques: ["border-radius:50%", "@keyframes", "animation-direction:reverse", "box-shadow", "transform:rotate", "dashed border"],
      challenge: "Add a fourth ring with `border-style: dotted` and animate it at 8s. Try changing the colours using CSS custom properties.",
      htmlCode: `<div class="artwork-geo">
  <div class="geo-ring geo-ring-4"></div>
  <div class="geo-ring geo-ring-1"></div>
  <div class="geo-ring geo-ring-2"></div>
  <div class="geo-ring geo-ring-3"></div>
  <div class="geo-triangle geo-triangle-1"></div>
  <div class="geo-triangle geo-triangle-2"></div>
  <div class="geo-core"></div>
</div>`,
      cssCode: `@keyframes spinRing {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.geo-ring-1 { animation: spinRing 6s linear infinite; }
.geo-ring-2 { border-style: dashed;
  animation: spinRing 4s linear infinite reverse; }
@keyframes pulse { from{transform:scale(.85)} to{transform:scale(1.15)} }`,
    },
    {
      id: 5,
      title: "Pixel Spaceship",
      category: "Pixel Art",
      difficulty: "Intermediate",
      description: "A retro pixel-art spaceship floating through a star field, with an animated thruster flame. Built using a CSS grid of tiny square divs.",
      isFavorite: false,
      techniques: ["CSS Grid", "image-rendering:pixelated", "@keyframes", "fixed-size divs", "linear-gradient flames"],
      challenge: "Extend the spaceship design by adding laser cannons on each side. Use `position:absolute` divs on the `.pixel-ship-wrap`.",
      htmlCode: `<div class="artwork-pixel">
  <div class="pixel-stars-bg" id="pixelStarsBg"></div>
  <div class="pixel-ship-wrap">
    <div class="pixel-grid" id="shipGrid"></div>
    <div class="pixel-exhaust">
      <div class="exhaust-flame"></div>
      <div class="exhaust-flame"></div>
      <div class="exhaust-flame"></div>
    </div>
  </div>
</div>`,
      cssCode: `.px { width:8px; height:8px; }
.px-3 { background:#5cf7ff; }
.pixel-ship-wrap { animation: pixelFloat 3s ease-in-out infinite; }
@keyframes pixelFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes exhaustPulse { from{opacity:.6} to{opacity:1} }`,
    },
    {
      id: 6,
      title: "Day/Night Cat",
      category: "Characters",
      difficulty: "Beginner",
      description: "An adorable cosmic cat with a wagging tail and animated eyes. Click anywhere on the artwork to toggle between a calm day scene and a mysterious night mode!",
      isFavorite: false,
      isInteractive: true,
      techniques: ["border-trick ears", "@keyframes", "transform", "JS class toggle", "::before/::after", "border-radius"],
      challenge: "Add a `transition` to the background so the day/night switch animates smoothly over 1.5s using `transition: background 1.5s ease`.",
      htmlCode: `<div class="artwork-cat" id="catArtwork">
  <div class="cat-scene">
    <div class="cat-body-outer">
      <div class="cat-head">
        <div class="cat-ear cat-ear-left">...</div>
        <div class="cat-ear cat-ear-right">...</div>
        <div class="cat-eyes">...</div>
        <div class="cat-nose"></div>
        <div class="cat-mouth"></div>
        <div class="cat-whisker wh-l1"></div>
        ...
      </div>
      <div class="cat-tail"></div>
    </div>
  </div>
  <div class="cat-day-night-hint">Click to toggle day/night</div>
</div>`,
      cssCode: `.artwork-cat.night-mode .cat-pupil { width:14px; height:16px; }
.artwork-cat.night-mode { background: radial-gradient(ellipse at bottom, #000510, #000005); }
@keyframes tailWag { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(20deg)} }
.cat-tail { animation: tailWag 2s ease-in-out infinite; }`,
    },
    {
      id: 7,
      title: "Cherry Blossom",
      category: "Nature",
      difficulty: "Advanced",
      description: "A full cherry blossom tree with branching structure and pink flowers. Petals gently fall from the branches in a continuous loop.",
      isFavorite: false,
      techniques: ["border-trick", "pseudo-elements", "transform-origin", "@keyframes", "multi-div structure", "CSS shapes"],
      challenge: "Make petals spin differently by adding `animation-timing-function: ease-in-out` and varying the rotation angle in the `@keyframes petalFall` rule.",
      htmlCode: `<div class="artwork-blossom">
  <div class="blossom-trunk"></div>
  <div class="blossom-branch branch-1"></div>
  <!-- ... more branches ... -->
  <!-- Flowers positioned at branch tips -->
  <div class="blossom-flower">
    <span></span>
    <div class="blossom-center"></div>
  </div>
  <!-- Falling petals -->
  <div class="petal-fall" style="--dur:6s; --delay:0s; left:40%;"></div>
</div>`,
      cssCode: `@keyframes blossomSway { 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(5deg)} }
.blossom-flower::before { transform:rotate(0deg) translate(0,-8px); background:radial-gradient(ellipse,#ffb8cc,#ff90a8); }
@keyframes petalFall {
  0%{transform:translateY(-20px) rotate(0deg);opacity:0}
  100%{transform:translateY(200px) rotate(360deg);opacity:0}
}`,
    },
    {
      id: 8,
      title: "Liquid Waves",
      category: "Abstract",
      difficulty: "Beginner",
      description: "Colourful layered waves ripple and sway with a satisfying rhythm. A central water-ripple effect radiates outward — all done with CSS animation on elliptic border-radius.",
      isFavorite: false,
      techniques: ["@keyframes", "border-radius:50%", "transform:translateX + scaleY", "mix-blend-mode", "multiple layers"],
      challenge: "Try adding a 6th wave layer with a vivid `background` colour and a `z-index` above the rest to make it stand out.",
      htmlCode: `<div class="artwork-waves">
  <div class="wave-layer wave-5"></div>
  <div class="wave-layer wave-1"></div>
  <div class="wave-layer wave-2"></div>
  <div class="wave-layer wave-3"></div>
  <div class="wave-layer wave-4"></div>
  <div class="wave-ripple"></div>
  <div class="wave-ripple"></div>
  <div class="wave-ripple"></div>
</div>`,
      cssCode: `@keyframes waveSway {
  0%,100%{transform:translateX(0) scaleY(1)}
  50%{transform:translateX(5%) scaleY(1.08)}
}
.wave-1 { animation: waveSway 4s ease-in-out infinite; }
@keyframes rippleOut { from{width:20px;height:20px;opacity:.8} to{width:150px;height:150px;opacity:0} }`,
    },
    {
      id: 9,
      title: "Pixel Village",
      category: "Pixel Art",
      difficulty: "Beginner",
      description: "A cozy pixel-art village scene with a house, trees, clouds, and a glowing sun — all made from CSS shapes on a retro grid.",
      isFavorite: false,
      techniques: ["CSS shapes", "border-trick", "absolute positioning", "fixed dimensions", "layered divs"],
      challenge: "Add a road leading up to the house door using a thin rectangle div at the bottom of `.pixel-scene`.",
      htmlCode: `<div class="artwork-pixel-land">
  <div class="pixel-scene">
    <div class="pixel-sky"></div>
    <div class="pixel-grass"></div>
    <div class="pixel-sun-small"></div>
    <div class="pixel-house">
      <div class="pixel-house-roof"></div>
      <div class="pixel-house-body">
        <div class="pixel-house-window"></div>
        <div class="pixel-house-door"></div>
      </div>
    </div>
    <div class="pixel-tree-small" style="right:25px">
      <div class="pixel-tree-top"></div>
      <div class="pixel-tree-trunk"></div>
    </div>
  </div>
</div>`,
      cssCode: `.pixel-house-body { width:40px; height:30px; background:#c8a060; border:2px solid #8b6030; }
.pixel-house-roof { border-left:23px solid transparent; border-right:23px solid transparent; border-bottom:18px solid #c03020; }
.pixel-sun-small { width:16px; height:16px; border-radius:50%; background:#ffd700; box-shadow:0 0 8px 3px rgba(255,215,0,.4); }`,
    },
    {
      id: 10,
      title: "Aurora Borealis",
      category: "Nature",
      difficulty: "Advanced",
      description: "The Northern Lights dance across a frozen sky above a snowy landscape. Layered blurred divs with subtle skewX and scaleX animations recreate the shimmering curtains of light.",
      isFavorite: false,
      techniques: ["filter:blur", "mix-blend-mode", "@keyframes", "skewX", "scaleX", "layered gradients"],
      challenge: "Try adding a fourth aurora layer in purple-pink tones: `rgba(200,50,255,0.5)`. Adjust the `--dur` variable and use `animation-direction: reverse`.",
      htmlCode: `<div class="artwork-aurora">
  <div class="aurora-layer aurora-1"></div>
  <div class="aurora-layer aurora-2"></div>
  <div class="aurora-layer aurora-3"></div>
  <div class="aurora-ground"></div>
  <div class="aurora-snow"></div>
  <div class="aurora-star-field" id="auroraStar"></div>
</div>`,
      cssCode: `.aurora-layer { filter:blur(18px); opacity:.55; }
@keyframes auroraShimmer {
  0%  { transform:translateX(-8%) skewX(-5deg) scaleX(1); opacity:.45; }
  50% { transform:translateX(5%)  skewX(3deg) scaleX(1.05); opacity:.65; }
  100%{ transform:translateX(-3%) skewX(-2deg) scaleX(.97); opacity:.5; }
}`,
    },
    {
      id: 11,
      title: "Neon Robot",
      category: "Characters",
      difficulty: "Intermediate",
      description: "A friendly neon robot with blinking LED eyes, a flashing mouth panel, a pulsing antenna, and swinging arms. Open the modal to tweak the robot's colour scheme live!",
      isFavorite: false,
      hasTweak: true,
      techniques: ["CSS variables", "JS inline styles", "@keyframes", "border-radius", "grid layout", "box-shadow glow"],
      challenge: "Add a hover state on `.robot-wrap:hover` that makes the whole robot scale up slightly with `transform: scale(1.05)` and adds a stronger box-shadow glow.",
      htmlCode: `<div class="artwork-robot">
  <div class="robot-wrap">
    <div class="robot-head">
      <div class="robot-antenna"></div>
      <div class="robot-eye-panel">
        <div class="robot-eye"></div>
        <div class="robot-eye"></div>
      </div>
      <div class="robot-mouth-panel">
        <div class="robot-mouth-led"></div>
        <!-- × 6 -->
      </div>
    </div>
    <div class="robot-body">
      <div class="robot-arm robot-arm-left"></div>
      <div class="robot-arm robot-arm-right"></div>
      <div class="robot-chest-panel">...</div>
    </div>
    <div class="robot-legs">...</div>
  </div>
</div>`,
      cssCode: `.robot-head { background: var(--robot-color, #4a6080); }
.robot-eye { background: var(--robot-eye-color, #5cf7ff);
  box-shadow: 0 0 8px var(--robot-eye-color, #5cf7ff); }
@keyframes robotBlink { 0%,85%,100%{transform:scaleY(1)} 90%{transform:scaleY(.1)} }
@keyframes antennaPulse { from{transform:translateX(-50%) scale(.8)} to{transform:translateX(-50%) scale(1.2)} }`,
    },
    {
      id: 12,
      title: "Neon Cityscape",
      category: "Abstract",
      difficulty: "Advanced",
      description: "A retro-futuristic city at night with buildings of varying heights, flickering windows, colourful neon signs, and a purple glow over the skyline.",
      isFavorite: false,
      techniques: ["CSS Grid", "absolute positioning", "@keyframes", "box-shadow", "linear-gradient", "overflow:hidden"],
      challenge: "Add a `.city-moon` div in the sky using `border-radius:50%` and a subtle `box-shadow` to simulate moonlight over the cityscape.",
      htmlCode: `<div class="artwork-city">
  <div class="city-sky-glow"></div>
  <!-- Buildings, windows, neon signs injected by JS -->
  <div class="city-reflection"></div>
</div>`,
      cssCode: `@keyframes winFlicker { 0%,80%,100%{opacity:1} 85%{opacity:.2} 90%{opacity:.9} }
@keyframes neonPulse { from{opacity:.6;box-shadow:none} to{opacity:1;box-shadow:0 0 8px 2px currentColor} }
.city-neon-sign { animation: neonPulse 2s ease-in-out infinite alternate; }`,
    },
    {
      id: 13,
      title: "Deep Sea Fish",
      category: "Nature",
      difficulty: "Intermediate",
      description: "A vibrant tropical fish swimming in deep blue water, with rising bubbles, swaying seaweed, a shafts-of-light beam, and realistic scale stripes.",
      isFavorite: false,
      techniques: ["@keyframes", "border-trick tail", "pseudo-elements", "radial-gradient", "layered animations", "clip-path"],
      challenge: "Try adding a second fish with a different `background` colour. Offset the `animation-delay` on `.fishSwim` so they swim out of sync.",
      htmlCode: `<div class="artwork-fish">
  <div class="underwater-light"></div>
  <div class="seaweed" style="left:15%;height:60px"></div>
  <div class="seaweed" style="right:12%;height:45px;animation-delay:.8s"></div>
  <div class="fish-body">
    <div class="fish-fin"></div>
    <div class="fish-eye"></div>
    <div class="fish-stripe"></div>
    <div class="fish-stripe"></div>
    <div class="fish-stripe"></div>
    <div class="fish-tail"></div>
  </div>
  <div class="bubble" style="--dur:4s;--delay:0s;left:40%;bottom:30%"></div>
</div>`,
      cssCode: `@keyframes fishSwim {
  0%,100%{transform:translateX(0) rotate(0deg)}
  30%{transform:translateX(15px) rotate(2deg)}
  70%{transform:translateX(-10px) rotate(-2deg)}
}
@keyframes bubbleRise { 0%{transform:translateY(20px);opacity:0} 10%{opacity:.6} 100%{transform:translateY(-100px);opacity:0} }
@keyframes seaweedSway { from{transform:rotate(-15deg)} to{transform:rotate(15deg)} }`,
    },
    {
      id: 14,
      title: "Gradient Bloom",
      category: "Abstract",
      difficulty: "Beginner",
      description: "Amorphous glowing blobs of colour slowly morph and blend together using `mix-blend-mode: screen`. A meditative, lava-lamp-like animation in pure CSS.",
      isFavorite: false,
      techniques: ["filter:blur", "mix-blend-mode:screen", "@keyframes", "border-radius morph", "CSS variables", "transform"],
      challenge: "Try removing `filter:blur` from the blobs and observe how the shapes change. Then add a fifth blob with `mix-blend-mode: overlay`.",
      htmlCode: `<div class="artwork-blob">
  <div class="blob-shape blob-1"></div>
  <div class="blob-shape blob-2"></div>
  <div class="blob-shape blob-3"></div>
  <div class="blob-shape blob-4"></div>
  <div class="blob-inner-text">BLOOM</div>
</div>`,
      cssCode: `@keyframes blobMorph {
  0%  { border-radius:60% 40% 70% 30%/50% 60% 40% 50%; transform:translate(0,0) scale(1); }
  33% { border-radius:40% 70% 30% 60%/70% 30% 60% 40%; transform:translate(20px,-20px) scale(1.05); }
  100%{ border-radius:50% 60% 40% 70%/60% 40% 70% 30%; transform:translate(5px,-5px) scale(1); }
}
.blob-shape { filter:blur(30px); mix-blend-mode:screen; }`,
    },
    {
      id: 15,
      title: "Shooting Stars",
      category: "Nature",
      difficulty: "Beginner",
      description: "A serene galaxy of twinkling stars with multiple shooting stars blazing across a deep-space background. Fully CSS-driven with layered keyframe animations.",
      isFavorite: false,
      techniques: ["@keyframes", "CSS variables", "multiple animations", "linear-gradient", "absolute positioning"],
      challenge: "Try adding a coloured shooting star: change `background: linear-gradient(90deg, #ff5cf7, transparent)` to create a pink comet.",
      htmlCode: `<div class="artwork-night">
  <div class="night-stars" id="shootingStars"></div>
  <div class="night-moon"></div>
  <div class="night-hills"></div>
  <!-- Multiple shooting star divs -->
</div>`,
      cssCode: `@keyframes shootingStar {
  0%  { left:0;  top:20%; opacity:0; }
  5%  { opacity:1; }
  35% { left:60%; top:45%; opacity:1; }
  40% { opacity:0; }
  100%{ left:80%; top:55%; opacity:0; }
}`,
    },
    {
      id: 16,
      title: "Mandala Bloom",
      category: "Abstract",
      difficulty: "Advanced",
      description: "A hypnotic mandala built entirely from CSS petals rotated around a centre, with layered rings spinning at different speeds and directions.",
      isFavorite: false,
      techniques: ["transform-origin", "rotate", "@keyframes", "animation-direction:reverse", "pseudo-elements", "CSS variables"],
      challenge: "Add another petal layer at a 22.5° offset from the existing ones, and give it a contrasting colour. Experiment with `animation-play-state: paused` on hover.",
      htmlCode: `<div class="artwork-mandala">
  <div class="mandala-wrap" id="mandalaWrap"></div>
</div>`,
      cssCode: `.mandala-petal {
  transform-origin: bottom center;
  /* Petals rotated by JS: rotate(Ndeg) */
}
@keyframes mandalaRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}`,
    },
  ];

  // ── State ──────────────────────────────────────────────────
  let state = {
    filter: 'all',
    search: '',
    favorites: new Set(),
    theme: 'dark',
    activeSourceTab: 'html',
    openId: null,
  };

  // ── DOM refs ───────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const grid        = $('galleryGrid');
  const emptyState  = $('emptyState');
  const statsText   = $('statsText');
  const searchInput = $('searchInput');
  const searchClear = $('searchClear');
  const overlay     = $('modalOverlay');
  const modalClose  = $('modalClose');

  // ── Init ───────────────────────────────────────────────────
  function init() {
    loadFromStorage();
    applyTheme();
    renderGallery();
    bindEvents();
  }

  // ── Storage ────────────────────────────────────────────────
  function loadFromStorage() {
    const favs = localStorage.getItem('cssart_favorites');
    if (favs) state.favorites = new Set(JSON.parse(favs));

    const theme = localStorage.getItem('cssart_theme');
    if (theme) state.theme = theme;
  }

  function saveFavorites() {
    localStorage.setItem('cssart_favorites', JSON.stringify([...state.favorites]));
  }

  function saveTheme() {
    localStorage.setItem('cssart_theme', state.theme);
  }

  // ── Filtered artworks ──────────────────────────────────────
  function getVisible() {
    const q = state.search.toLowerCase();
    return artworks.filter(a => {
      const catMatch  = state.filter === 'all'
        || (state.filter === 'favorites' ? state.favorites.has(a.id) : a.category === state.filter);
      const nameMatch = !q || a.title.toLowerCase().includes(q);
      return catMatch && nameMatch;
    });
  }

  // ── Render Gallery ─────────────────────────────────────────
  function renderGallery() {
    const visible = getVisible();
    grid.innerHTML = '';

    if (visible.length === 0) {
      emptyState.hidden = false;
      statsText.textContent = 'No artworks found.';
      return;
    }

    emptyState.hidden = true;
    statsText.textContent = `Showing ${visible.length} of ${artworks.length} artworks · ${state.favorites.size} favourited`;

    visible.forEach(a => {
      const card = document.createElement('div');
      card.className = 'art-card';
      card.dataset.id = a.id;

      const isFav = state.favorites.has(a.id);

      card.innerHTML = `
        <div class="card-canvas-wrap">
          <div class="art-card-canvas">${buildArtworkHTML(a)}</div>
          <div class="card-fav-badge ${isFav ? 'show' : ''}">❤ FAV</div>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" data-fav="${a.id}" aria-label="Toggle favourite">${isFav ? '♥' : '♡'}</button>
        </div>
        <div class="card-info">
          <div class="card-meta">
            <span class="badge cat-${a.category.replace(' ', '-')}">${a.category}</span>
            <span class="badge diff-${a.difficulty}">${a.difficulty}</span>
          </div>
          <div class="card-title">${a.title}</div>
        </div>
      `;

      // Build dynamic parts after insert
      grid.appendChild(card);

      // Build stars, particles etc.
      buildDynamic(a, card);
    });
  }

  // ── Build Artwork HTML ─────────────────────────────────────
  function buildArtworkHTML(a) {
    switch (a.id) {
      case 1:  return buildSunset();
      case 2:  return buildNightSky();
      case 3:  return buildOwl();
      case 4:  return buildGeo();
      case 5:  return buildPixelShip();
      case 6:  return buildCat();
      case 7:  return buildBlossom();
      case 8:  return buildWaves();
      case 9:  return buildPixelLand();
      case 10: return buildAurora();
      case 11: return buildRobot();
      case 12: return buildCity();
      case 13: return buildFish();
      case 14: return buildBlob();
      case 15: return buildNightSky2();
      case 16: return buildMandala();
      default: return '<div style="color:#fff;font-size:40px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">?</div>';
    }
  }

  // ── Artwork Builders ───────────────────────────────────────
  function buildSunset() {
    return `<div class="artwork-sunset">
      <div class="sunset-sun"></div>
      <div class="sunset-cloud sunset-cloud-1"></div>
      <div class="sunset-cloud sunset-cloud-2"></div>
      <div class="sunset-mountain"></div>
      <div class="sunset-water"></div>
    </div>`;
  }

  function buildNightSky() {
    const stars = randomStars(40);
    return `<div class="artwork-night" id="nsky_${Math.random().toString(36).slice(2)}">
      <div class="night-stars">${stars}</div>
      <div class="night-moon"></div>
      <div class="night-hills"></div>
      <div class="night-shooting-star"></div>
    </div>`;
  }

  function buildNightSky2() {
    const stars = randomStars(60);
    const extra = `
      <div class="night-shooting-star" style="animation-delay:0.5s;top:35%;"></div>
      <div class="night-shooting-star" style="animation-delay:3s;top:15%;transform:rotate(-20deg);"></div>`;
    return `<div class="artwork-night">
      <div class="night-stars">${stars}</div>
      <div class="night-moon" style="top:10%;left:12%;right:auto;width:50px;height:50px;"></div>
      <div class="night-hills"></div>
      ${extra}
    </div>`;
  }

  function randomStars(n) {
    let html = '';
    for (let i = 0; i < n; i++) {
      const x   = Math.random() * 100;
      const y   = Math.random() * 65;
      const s   = (Math.random() * 2.5 + 0.5).toFixed(1);
      const dur = (Math.random() * 3 + 1.5).toFixed(1);
      const del = (Math.random() * 4).toFixed(1);
      html += `<div class="star" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;--dur:${dur}s;--delay:${del}s;"></div>`;
    }
    return html;
  }

  function buildOwl() {
    const stars = randomStars(15);
    return `<div class="artwork-owl">
      ${stars.replace(/class="star"/g, 'class="owl-bg-star"').replace(/width:\d+\.?\d*px;height:\d+\.?\d*px/g, '')}
      <div class="owl-branch"></div>
      <div class="owl-body">
        <div class="owl-ear owl-ear-left"><div class="cat-ear-inner"></div></div>
        <div class="owl-ear owl-ear-right"><div class="cat-ear-inner"></div></div>
        <div class="owl-face">
          <div class="owl-eye-wrap"><div class="owl-eye"><div class="owl-pupil"></div></div></div>
          <div class="owl-eye-wrap"><div class="owl-eye"><div class="owl-pupil"></div></div></div>
          <div class="owl-beak"></div>
        </div>
        <div class="owl-wing owl-wing-left"></div>
        <div class="owl-wing owl-wing-right"></div>
      </div>
      <div class="owl-feet">
        <div class="owl-foot"><div class="owl-toe"></div><div class="owl-toe"></div><div class="owl-toe"></div></div>
        <div class="owl-foot"><div class="owl-toe"></div><div class="owl-toe"></div><div class="owl-toe"></div></div>
      </div>
    </div>`;
  }

  function buildGeo() {
    return `<div class="artwork-geo">
      <div class="geo-ring geo-ring-4"></div>
      <div class="geo-ring geo-ring-1"></div>
      <div class="geo-ring geo-ring-2"></div>
      <div class="geo-ring geo-ring-3"></div>
      <div class="geo-triangle geo-triangle-1"></div>
      <div class="geo-triangle geo-triangle-2"></div>
      <div class="geo-core"></div>
    </div>`;
  }

  function buildPixelShip() {
    // Spaceship design: 11 cols × 13 rows
    const map = [
      [0,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,1,2,1,0,0,0,0],
      [0,0,0,1,2,2,2,1,0,0,0],
      [0,0,1,2,3,2,3,2,1,0,0],
      [0,1,2,2,2,2,2,2,2,1,0],
      [1,2,2,3,3,2,3,3,2,2,1],
      [1,2,2,2,4,5,4,2,2,2,1],
      [0,1,2,2,3,2,3,2,2,1,0],
      [0,0,1,6,6,2,6,6,1,0,0],
      [0,0,0,1,7,0,7,1,0,0,0],
      [0,0,0,0,1,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0],
    ];
    const stars = Array.from({length:30}, () => {
      const x = Math.random()*100, y = Math.random()*100, s = Math.random()*2+0.5;
      return `<div class="pixel-star" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;"></div>`;
    }).join('');
    const gridHTML = map.map(row =>
      row.map(c => `<div class="px px-${c}"></div>`).join('')
    ).join('');
    return `<div class="artwork-pixel">
      <div class="pixel-stars-bg">${stars}</div>
      <div class="pixel-ship-wrap">
        <div class="pixel-grid" style="grid-template-columns:repeat(11,8px)">${gridHTML}</div>
        <div class="pixel-exhaust">
          <div class="exhaust-flame"></div>
          <div class="exhaust-flame"></div>
          <div class="exhaust-flame"></div>
        </div>
      </div>
    </div>`;
  }

  function buildCat() {
    return `<div class="artwork-cat" id="catArtwork">
      <div class="cat-scene">
        <div class="cat-body-outer">
          <div class="cat-head">
            <div class="cat-ear cat-ear-left"><div class="cat-ear-inner"></div></div>
            <div class="cat-ear cat-ear-right"><div class="cat-ear-inner"></div></div>
            <div class="cat-eyes">
              <div class="cat-eye"><div class="cat-pupil"></div></div>
              <div class="cat-eye"><div class="cat-pupil"></div></div>
            </div>
            <div class="cat-nose"></div>
            <div class="cat-mouth"></div>
            <div class="cat-whisker wh-l1"></div>
            <div class="cat-whisker wh-l2"></div>
            <div class="cat-whisker wh-r1"></div>
            <div class="cat-whisker wh-r2"></div>
          </div>
          <div class="cat-tail"></div>
        </div>
      </div>
      <div class="cat-day-night-hint">Click to toggle day/night</div>
    </div>`;
  }

  function buildBlossom() {
    const flowers = [
      {top:'42%',left:'50%'},{top:'38%',left:'28%'},{top:'30%',left:'64%'},
      {top:'26%',left:'44%'},{top:'36%',left:'18%'},{top:'22%',left:'72%'},
      {top:'18%',left:'35%'},{top:'28%',left:'80%'},{top:'20%',left:'56%'},
    ];
    const petals = Array.from({length:12}, (_,i) => {
      const left  = (20 + Math.random()*60).toFixed(0);
      const dur   = (4 + Math.random()*5).toFixed(1);
      const delay = (Math.random()*8).toFixed(1);
      return `<div class="petal-fall" style="--dur:${dur}s;--delay:${delay}s;left:${left}%;"></div>`;
    }).join('');
    const flowerHTML = flowers.map(({top,left}) =>
      `<div class="blossom-flower" style="top:${top};left:${left};transform:translate(-50%,-50%)"><span></span><div class="blossom-center"></div></div>`
    ).join('');
    return `<div class="artwork-blossom">
      <div class="blossom-trunk"></div>
      <div class="blossom-branch branch-1"></div>
      <div class="blossom-branch branch-2"></div>
      <div class="blossom-branch branch-3"></div>
      <div class="blossom-branch branch-4"></div>
      ${flowerHTML}
      ${petals}
    </div>`;
  }

  function buildWaves() {
    return `<div class="artwork-waves">
      <div class="wave-layer wave-5"></div>
      <div class="wave-layer wave-1"></div>
      <div class="wave-layer wave-2"></div>
      <div class="wave-layer wave-3"></div>
      <div class="wave-layer wave-4"></div>
      <div class="wave-ripple" style="width:20px;height:20px;top:45%;left:45%;margin:0 auto;position:absolute;"></div>
      <div class="wave-ripple" style="width:20px;height:20px;top:45%;left:45%;margin:0 auto;position:absolute;animation-delay:1s;"></div>
      <div class="wave-ripple" style="width:20px;height:20px;top:45%;left:45%;margin:0 auto;position:absolute;animation-delay:2s;"></div>
    </div>`;
  }

  function buildPixelLand() {
    const clouds = `
      <div class="pixel-cloud-small" style="width:28px;height:8px;top:18%;left:15%;">
        <div style="width:12px;height:12px;background:inherit;border-radius:50%;position:absolute;top:-6px;left:4px;"></div>
        <div style="width:10px;height:10px;background:inherit;border-radius:50%;position:absolute;top:-4px;left:14px;"></div>
      </div>
      <div class="pixel-cloud-small" style="width:22px;height:7px;top:25%;right:20%;">
        <div style="width:10px;height:10px;background:inherit;border-radius:50%;position:absolute;top:-5px;left:3px;"></div>
      </div>`;
    return `<div class="artwork-pixel-land">
      <div class="pixel-scene">
        <div class="pixel-sky"></div>
        <div class="pixel-grass"></div>
        <div class="pixel-sun-small"></div>
        ${clouds}
        <div class="pixel-house">
          <div class="pixel-house-roof"></div>
          <div class="pixel-house-body">
            <div class="pixel-house-window"></div>
            <div class="pixel-house-door"></div>
          </div>
        </div>
        <div class="pixel-tree-small" style="right:30px;bottom:25px;">
          <div class="pixel-tree-top"></div>
          <div class="pixel-tree-trunk"></div>
        </div>
        <div class="pixel-tree-small" style="right:50px;bottom:25px;">
          <div class="pixel-tree-top" style="border-bottom-width:15px;border-left-width:8px;border-right-width:8px;"></div>
          <div class="pixel-tree-trunk" style="height:6px;"></div>
        </div>
      </div>
    </div>`;
  }

  function buildAurora() {
    const stars = randomStars(30);
    return `<div class="artwork-aurora">
      <div class="aurora-layer aurora-1"></div>
      <div class="aurora-layer aurora-2"></div>
      <div class="aurora-layer aurora-3"></div>
      <div class="aurora-ground"></div>
      <div class="aurora-snow"></div>
      <div class="aurora-star-field">${stars}</div>
    </div>`;
  }

  function buildRobot() {
    const leds = Array.from({length:6}, (_,i) => `<div class="robot-mouth-led"></div>`).join('');
    const cBtns = Array.from({length:4}, () => `<div class="robot-chest-btn"></div>`).join('');
    return `<div class="artwork-robot">
      <div class="robot-wrap" id="robotWrap">
        <div class="robot-head">
          <div class="robot-antenna"></div>
          <div class="robot-eye-panel">
            <div class="robot-eye"></div>
            <div class="robot-eye"></div>
          </div>
          <div class="robot-mouth-panel">${leds}</div>
        </div>
        <div class="robot-body">
          <div class="robot-arm robot-arm-left"></div>
          <div class="robot-arm robot-arm-right"></div>
          <div class="robot-chest-panel">${cBtns}</div>
        </div>
        <div class="robot-legs">
          <div class="robot-leg"><div class="robot-foot"></div></div>
          <div class="robot-leg"><div class="robot-foot"></div></div>
        </div>
      </div>
    </div>`;
  }

  function buildCity() {
    const buildings = [
      {l:'0%',  w:'16%', h:'55%', c:'#080018'},
      {l:'14%', w:'12%', h:'70%', c:'#06001a'},
      {l:'24%', w:'18%', h:'45%', c:'#070015'},
      {l:'40%', w:'10%', h:'80%', c:'#05001a'},
      {l:'48%', w:'14%', h:'60%', c:'#080018'},
      {l:'60%', w:'16%', h:'50%', c:'#060016'},
      {l:'74%', w:'12%', h:'75%', c:'#07001a'},
      {l:'84%', w:'18%', h:'42%', c:'#080018'},
    ];
    const neons = [
      {c:'#ff5cf7', top:'auto', bottom:'40%', left:'16%', w:'30px', h:'4px'},
      {c:'#5cf7ff', top:'auto', bottom:'55%', left:'42%', w:'20px', h:'4px'},
      {c:'#c8f542', top:'auto', bottom:'38%', left:'63%', w:'25px', h:'4px'},
      {c:'#ffd166', top:'auto', bottom:'65%', left:'75%', w:'18px', h:'4px'},
    ];
    const bHTML = buildings.map(b => {
      const wins = Array.from({length:Math.floor(Math.random()*8+4)}, () => {
        const wl   = (Math.random()*70+10).toFixed(0);
        const wt   = (Math.random()*60+10).toFixed(0);
        const cols = ['rgba(255,220,100,0.8)','rgba(180,220,255,0.6)','rgba(255,180,100,0.6)','rgba(200,255,200,0.5)'];
        const col  = cols[Math.floor(Math.random()*cols.length)];
        const flick= (Math.random()*8+3).toFixed(1);
        const fdel = (Math.random()*5).toFixed(1);
        return `<div class="city-window" style="left:${wl}%;top:${wt}%;width:5px;height:5px;--win-color:${col};--flick:${flick}s;--fdelay:${fdel}s;"></div>`;
      }).join('');
      return `<div class="city-building" style="left:${b.l};width:${b.w};height:${b.h};--bld-color:${b.c};">${wins}</div>`;
    }).join('');
    const nHTML = neons.map(n =>
      `<div class="city-neon-sign" style="color:${n.c};background:${n.c};width:${n.w};height:${n.h};bottom:${n.bottom};left:${n.left};position:absolute;border-radius:3px;"></div>`
    ).join('');
    return `<div class="artwork-city">
      <div class="city-sky-glow"></div>
      ${bHTML}
      ${nHTML}
      <div class="city-reflection"></div>
    </div>`;
  }

  function buildFish() {
    const bubbles = Array.from({length:5}, (_,i) => {
      const l = (25+i*10).toFixed(0);
      const s = (8+Math.random()*8).toFixed(0);
      const dur = (3+Math.random()*3).toFixed(1);
      const del = (Math.random()*4).toFixed(1);
      return `<div class="bubble" style="left:${l}%;bottom:30%;width:${s}px;height:${s}px;--dur:${dur}s;--delay:${del}s;"></div>`;
    }).join('');
    return `<div class="artwork-fish">
      <div class="underwater-light"></div>
      <div class="seaweed" style="left:12%;height:55px;"></div>
      <div class="seaweed" style="right:10%;height:40px;animation-delay:.9s;"></div>
      <div class="seaweed" style="left:80%;height:30px;animation-delay:.4s;"></div>
      <div class="fish-body">
        <div class="fish-fin"></div>
        <div class="fish-eye"></div>
        <div class="fish-stripe"></div>
        <div class="fish-stripe"></div>
        <div class="fish-stripe"></div>
        <div class="fish-tail"></div>
      </div>
      ${bubbles}
    </div>`;
  }

  function buildBlob() {
    return `<div class="artwork-blob">
      <div class="blob-shape blob-1"></div>
      <div class="blob-shape blob-2"></div>
      <div class="blob-shape blob-3"></div>
      <div class="blob-shape blob-4"></div>
      <div class="blob-inner-text">BLOOM</div>
    </div>`;
  }

  function buildMandala() {
    const colors = ['#c8f542','#5cf7ff','#ff5cf7','#ffd166','#ff5c7a','#80c0ff'];
    const layers = [80,100,120,140,160,180];
    let html = '';
    layers.forEach((size, li) => {
      const count = 8 + li * 2;
      const color = colors[li % colors.length];
      const speed = (4 + li * 1.5).toFixed(1);
      const dir   = li % 2 === 0 ? 'normal' : 'reverse';
      html += `<div style="position:absolute;inset:0;border-radius:50%;animation:mandalaRotate ${speed}s linear infinite ${dir};">`;
      for (let i = 0; i < count; i++) {
        const angle  = (360 / count) * i;
        const hue    = (i / count) * 40;
        html += `<div style="position:absolute;width:${12-li*0.5}px;height:${size*0.35}px;
          background:${color};border-radius:50%;opacity:${0.6+li*0.05};
          top:50%;left:50%;transform-origin:-1px ${size*0.4}px;
          transform:rotate(${angle}deg) translateY(-${size*0.1}px);
          filter:blur(${li*0.3}px);"></div>`;
      }
      html += `</div>`;
    });
    // Centre
    html += `<div style="position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 15px #fff;z-index:10;"></div>`;
    return `<div class="artwork-mandala"><div class="mandala-wrap" style="position:relative;width:180px;height:180px;">${html}</div></div>`;
  }

  // ── Build dynamic parts after DOM insert ───────────────────
  function buildDynamic(a, card) {
    if (a.id === 6) {
      const catEl = card.querySelector('.artwork-cat');
      if (catEl) catEl.addEventListener('click', e => { e.stopPropagation(); catEl.classList.toggle('night-mode'); });
    }
  }

  // ── Events ─────────────────────────────────────────────────
  function bindEvents() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.dataset.filter;
        renderGallery();
      });
    });

    // Search
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value;
      renderGallery();
    });
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      state.search = '';
      renderGallery();
    });

    // Card clicks (delegate)
    grid.addEventListener('click', e => {
      const favBtn = e.target.closest('[data-fav]');
      if (favBtn) {
        e.stopPropagation();
        toggleFavorite(parseInt(favBtn.dataset.fav));
        return;
      }
      const card = e.target.closest('.art-card');
      if (card) openModal(parseInt(card.dataset.id));
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // Theme toggle
    $('themeToggle').addEventListener('click', toggleTheme);

    // Source tabs
    document.querySelectorAll('.source-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.source-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeSourceTab = tab.dataset.tab;
        refreshSourceCode();
      });
    });

    // Modal favourite button
    $('modalFavBtn').addEventListener('click', () => {
      if (state.openId) {
        toggleFavorite(state.openId);
        updateModalFavBtn();
      }
    });

    // Modal source toggle
    $('modalSourceBtn').addEventListener('click', () => {
      const panel = $('sourcePanel');
      panel.hidden = !panel.hidden;
      if (!panel.hidden) refreshSourceCode();
    });
  }

  // ── Toggle favourite ───────────────────────────────────────
  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    saveFavorites();
    // Update card if visible
    const card = document.querySelector(`.art-card[data-id="${id}"]`);
    if (card) {
      const btn   = card.querySelector('[data-fav]');
      const badge = card.querySelector('.card-fav-badge');
      const isFav = state.favorites.has(id);
      if (btn)   { btn.textContent = isFav ? '♥' : '♡'; btn.classList.toggle('active', isFav); }
      if (badge) badge.classList.toggle('show', isFav);
    }
    statsText.textContent = `Showing ${getVisible().length} of ${artworks.length} artworks · ${state.favorites.size} favourited`;
    if (state.filter === 'favorites') renderGallery();
  }

  // ── Open Modal ─────────────────────────────────────────────
  function openModal(id) {
    const a = artworks.find(x => x.id === id);
    if (!a) return;
    state.openId = id;

    // Build artwork in stage
    const stage = $('modalArtworkStage');
    stage.innerHTML = buildArtworkHTML(a);

    // Build interactive hint
    const hint = $('modalInteractiveHint');
    hint.textContent = a.isInteractive ? '👆 Click the artwork to interact!' : '';

    // Rebind interactive
    if (a.id === 6) {
      const catEl = stage.querySelector('.artwork-cat');
      if (catEl) catEl.addEventListener('click', () => catEl.classList.toggle('night-mode'));
    }

    // Info
    $('modalCategory').textContent   = a.category;
    $('modalCategory').className     = `badge cat-${a.category.replace(' ','-')}`;
    $('modalDifficulty').textContent = a.difficulty;
    $('modalDifficulty').className   = `badge diff-${a.difficulty}`;
    $('modalTitle').textContent      = a.title;
    $('modalDesc').textContent       = a.description;

    // Techniques
    $('modalTechniqueTags').innerHTML = a.techniques
      .map(t => `<span class="technique-tag">${t}</span>`)
      .join('');

    // Challenge
    const challengeBox = $('challengeBox');
    if (a.challenge) {
      $('challengeText').textContent = a.challenge;
      challengeBox.hidden = false;
    } else {
      challengeBox.hidden = true;
    }

    // Fav button
    updateModalFavBtn();

    // Source panel — reset
    $('sourcePanel').hidden = true;

    // Tweak panel
    const tweakPanel = $('tweakPanel');
    if (a.hasTweak) {
      tweakPanel.hidden = false;
      buildTweakControls(a, stage);
    } else {
      tweakPanel.hidden = true;
      $('tweakControls').innerHTML = '';
    }

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function updateModalFavBtn() {
    const btn   = $('modalFavBtn');
    const isFav = state.favorites.has(state.openId);
    btn.textContent = isFav ? '♥ Remove Favorite' : '♡ Add to Favorites';
    btn.classList.toggle('active', isFav);
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    state.openId = null;
  }

  // ── Source Code ────────────────────────────────────────────
  function refreshSourceCode() {
    const a = artworks.find(x => x.id === state.openId);
    if (!a) return;
    const code = $('sourceCode');
    code.textContent = state.activeSourceTab === 'html'
      ? (a.htmlCode || '<!-- HTML not available -->')
      : (a.cssCode  || '/* CSS not available */');
  }

  // ── Tweak Controls ─────────────────────────────────────────
  function buildTweakControls(a, stage) {
    const container = $('tweakControls');
    container.innerHTML = '';

    if (a.id === 11) {
      const controls = [
        { label: 'Body Color',   prop: '--robot-color',      type: 'color', value: '#4a6080' },
        { label: 'Eye Color',    prop: '--robot-eye-color',  type: 'color', value: '#5cf7ff' },
        { label: 'Accent Color', prop: '--robot-accent',     type: 'color', value: '#ff5cf7' },
      ];
      controls.forEach(ctrl => {
        const wrap = document.createElement('div');
        wrap.className = 'tweak-control';
        wrap.innerHTML = `<span class="tweak-label">${ctrl.label}</span>
          <input type="${ctrl.type}" value="${ctrl.value}" />`;
        const input = wrap.querySelector('input');
        input.addEventListener('input', () => {
          const wrap2 = stage.querySelector('.robot-wrap');
          if (wrap2) wrap2.style.setProperty(ctrl.prop, input.value);
          // Also propagate globally in stage
          stage.style.setProperty(ctrl.prop, input.value);
        });
        container.appendChild(wrap);
      });
    }
  }

  // ── Theme ──────────────────────────────────────────────────
  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveTheme();
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
  }

  // ── Reset filters ──────────────────────────────────────────
  function resetFilters() {
    state.filter = 'all';
    state.search = '';
    searchInput.value = '';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    renderGallery();
  }

  return { init, resetFilters };

})();

// Boot
document.addEventListener('DOMContentLoaded', ArtGallery.init);
