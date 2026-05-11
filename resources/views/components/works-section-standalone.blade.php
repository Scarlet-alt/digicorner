{{-- Pure HTML/CSS/JS Works Section Component --}}
{{-- Drop this into your Blade template as: @include('components.works-section-standalone') --}}

<div id="works-container">
  <style>
    /* Works Section Styles */
    .work-section {
      position: relative;
      width: 100%;
      background: #0a0f1e;
      overflow: hidden;
    }

    .work-sticky {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: hidden;
      width: 100%;
      z-index: 10;
    }

    .work-track {
      display: flex;
      width: 100%;
      height: 100%;
      will-change: transform;
      transition: none;
    }

    .work-card {
      min-width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 3rem;
      align-items: center;
      justify-items: center;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
    }

    .work-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 20;
      max-width: 500px;
    }

    .work-card-label {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #c8732a;
      font-family: 'Inter', sans-serif;
      margin-bottom: 1.5rem;
    }

    .work-card-title {
      font-size: clamp(3rem, 7vw, 7rem);
      font-style: italic;
      font-weight: 400;
      font-family: 'Playfair Display', serif;
      color: #ffffff;
      margin: 0;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }

    .work-card-desc {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.6);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      max-width: 380px;
      margin: 0;
    }

    .work-mockup {
      width: 100%;
      height: 80vh;
      max-width: 500px;
      border-radius: 12px;
      background: #111827;
      border: 1px solid rgba(200, 115, 42, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      z-index: 15;
      will-change: transform, border-radius, width, height;
    }

    .work-mockup-content {
      text-align: center;
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, var(--project-color-1), var(--project-color-2));
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Project color variables */
    .work-card:nth-child(1) {
      --project-color-1: #8b5cf6;
      --project-color-2: #6366f1;
    }

    .work-card:nth-child(2) {
      --project-color-1: #ec4899;
      --project-color-2: #f43f5e;
    }

    .work-card:nth-child(3) {
      --project-color-1: #06b6d4;
      --project-color-2: #0891b2;
    }

    .work-card:nth-child(4) {
      --project-color-1: #f59e0b;
      --project-color-2: #d97706;
    }

    /* Full-bleed overlay for last card */
    .fullbleed-overlay {
      position: fixed;
      inset: 0;
      z-index: 25;
      opacity: 0;
      pointer-events: none;
      will-change: opacity;
      background: linear-gradient(135deg, var(--project-color-1), var(--project-color-2));
    }

    /* Progress bar */
    .work-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 2px;
      background: #c8732a;
      z-index: 50;
      width: 0%;
      will-change: width;
    }

    /* Fade out text during expansion */
    .work-card-content.expanding {
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .work-card {
        grid-template-columns: 1fr;
        padding: 2rem;
        gap: 1rem;
      }

      .work-card-title {
        font-size: clamp(2rem, 5vw, 4rem);
      }

      .work-mockup {
        height: 60vh;
        max-width: 100%;
      }
    }

    /* Load fonts */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap');
  </style>

  <!-- Works Section HTML -->
  <div class="work-section" id="workSection">
    <div class="work-sticky">
      <div class="work-track" id="workTrack">
        <!-- Cards will be inserted here by JS -->
      </div>
    </div>
  </div>

  <!-- Progress bar -->
  <div class="work-progress-bar" id="progressBar"></div>

  <!-- Full-bleed overlay -->
  <div class="fullbleed-overlay" id="fullbleedOverlay"></div>

  <script>
    // Projects data
    const projects = [
      {
        id: 1,
        label: '01 — BRAND · IDENTITY',
        title: 'Lumina Studio',
        desc: 'Brand system for a creative agency',
      },
      {
        id: 2,
        label: '02 — WEB · DESIGN',
        title: 'Bloom',
        desc: 'E-commerce for a botanical skincare brand',
      },
      {
        id: 3,
        label: '03 — E-COMMERCE · BUILD',
        title: 'Photography Gear Store',
        desc: 'Clean store with fast checkout',
      },
      {
        id: 4,
        label: '04 — MOTION · DESIGN',
        title: 'Fragment',
        desc: 'Title sequence for a short documentary',
      },
    ];

    const workSection = document.getElementById('workSection');
    const workTrack = document.getElementById('workTrack');
    const progressBar = document.getElementById('progressBar');
    const fullbleedOverlay = document.getElementById('fullbleedOverlay');

    // Initialize: render project cards
    function initializeCards() {
      projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'work-card';
        card.innerHTML = `
          <div class="work-card-content" data-project-id="${project.id}">
            <div class="work-card-label">${project.label}</div>
            <h3 class="work-card-title">${project.title}</h3>
            <p class="work-card-desc">${project.desc}</p>
          </div>
          <div class="work-mockup" data-project-id="${project.id}">
            <div class="work-mockup-content">${project.title}</div>
          </div>
        `;
        workTrack.appendChild(card);
      });
    }

    // Calculate track width and section height
    function calculateDimensions() {
      const numCards = projects.length;
      const trackWidth = numCards * window.innerWidth;
      const sectionHeight = numCards * window.innerHeight;

      workTrack.style.width = trackWidth + 'px';
      workSection.style.height = sectionHeight + 'px';

      return { numCards, trackWidth, sectionHeight };
    }

    // Handle scroll updates
    function handleScroll() {
      const { numCards } = calculateDimensions();
      const rect = workSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const progress = Math.max(
        0,
        Math.min(1, -sectionTop / (sectionHeight - viewportHeight))
      );

      // Update progress bar
      progressBar.style.width = progress * 100 + '%';

      // Translate track horizontally
      const maxTranslate = -(numCards - 1) * window.innerWidth;
      const translateX = progress * maxTranslate;
      workTrack.style.transform = `translateX(${translateX}px)`;

      // Last card full-bleed expansion logic
      const expandThreshold = (numCards - 1) / numCards;
      if (progress > expandThreshold) {
        const expandProgress = (progress - expandThreshold) / (1 - expandThreshold);
        expandLastCard(expandProgress, numCards);
      } else {
        resetLastCard(numCards);
      }
    }

    // Expand last card to full-bleed
    function expandLastCard(expandProgress, numCards) {
      const lastCard = document.querySelector(`.work-card:nth-child(${numCards})`);
      const lastContent = lastCard.querySelector('.work-card-content');
      const lastMockup = lastCard.querySelector('.work-mockup');
      const overlayColor = lastCard.style.background;

      // Fade out text
      if (expandProgress < 0.5) {
        lastContent.style.opacity = Math.max(0, 1 - expandProgress * 2);
      } else {
        lastContent.style.opacity = 0;
      }

      // Expand mockup dimensions
      const initialWidth = 50; // 50% of viewport
      const finalWidth = 100;
      const initialHeight = 80; // 80vh
      const finalHeight = 100; // 100vh
      const initialRadius = 12;
      const finalRadius = 0;

      const currentWidth = initialWidth + (finalWidth - initialWidth) * expandProgress;
      const currentHeight = initialHeight + (finalHeight - initialHeight) * expandProgress;
      const currentRadius = initialRadius + (finalRadius - initialRadius) * expandProgress;

      lastMockup.style.width = currentWidth + 'vw';
      lastMockup.style.height = currentHeight + 'vh';
      lastMockup.style.borderRadius = currentRadius + 'px';

      // Move to fixed position during full expansion
      if (expandProgress > 0.8) {
        lastMockup.style.position = 'fixed';
        lastMockup.style.top = '0';
        lastMockup.style.left = '0';
        lastMockup.style.zIndex = '30';
      }

      // Update overlay
      fullbleedOverlay.style.opacity = Math.max(0, (expandProgress - 0.3) * 1.5);
      fullbleedOverlay.style.background = window.getComputedStyle(lastMockup.firstChild).background;
    }

    // Reset last card styling
    function resetLastCard(numCards) {
      const lastCard = document.querySelector(`.work-card:nth-child(${numCards})`);
      const lastContent = lastCard.querySelector('.work-card-content');
      const lastMockup = lastCard.querySelector('.work-mockup');

      lastContent.style.opacity = '1';
      lastMockup.style.width = '';
      lastMockup.style.height = '';
      lastMockup.style.borderRadius = '';
      lastMockup.style.position = '';
      lastMockup.style.top = '';
      lastMockup.style.left = '';
      lastMockup.style.zIndex = '';

      fullbleedOverlay.style.opacity = '0';
    }

    // Handle window resize
    function handleResize() {
      calculateDimensions();
      handleScroll();
    }

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      initializeCards();
      calculateDimensions();
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);
    });
  </script>
</div>
