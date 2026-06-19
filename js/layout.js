(function () {
  "use strict";

  const cfg = window.MEMEBRLXY || {};
  const inviteUrl = cfg.inviteUrl || "#";
  const supportUrl = cfg.supportUrl || "#";
  const botName = cfg.botName || "Memebrlxy";
  const logoUrl = cfg.logoUrl || "assets/logo.png";

  function renderLogoMark(variant) {
    const isFooter = variant === "footer";
    return `
      <span class="logo-mark logo-mark-${variant}">
        <span class="logo-mark-shine" aria-hidden="true"></span>
        <span class="logo-mark-glow" aria-hidden="true"></span>
        <img
          src="${logoUrl}"
          alt="${botName}"
          class="logo-img logo-img-${variant}"
          width="512"
          height="512"
          decoding="async"
        />
      </span>`;
  }

  function renderHeader() {
    const isHome = document.body.dataset.page === "home";
    const howHref = isHome ? "#how" : "index.html#how";
    const featuresHref = isHome ? "#features" : "index.html#features";
    const whyHref = isHome ? "#why" : "index.html#why";
    const faqHref = isHome ? "#faq" : "index.html#faq";

    return `
      <header class="header" id="header">
        <nav class="nav container">
          <a href="index.html" class="logo logo-image">${renderLogoMark("nav")}</a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <ul class="nav-links" id="navLinks">
            <li><a href="${featuresHref}" data-nav="features">Features</a></li>
            <li><a href="${howHref}" data-nav="how">How It Works</a></li>
            <li><a href="${whyHref}" data-nav="why">Why Us</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="${faqHref}" data-nav="faq">FAQ</a></li>
            <li><a href="${supportUrl}" target="_blank" rel="noopener noreferrer" class="nav-support">Support</a></li>
            <li><a href="${inviteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Invite Bot</a></li>
          </ul>
        </nav>
      </header>`;
  }

  function renderFooter() {
    return `
      <footer class="footer">
        <div class="container footer-grid footer-grid-extended">
          <div class="footer-brand">
            <a href="index.html" class="logo logo-image">${renderLogoMark("footer")}</a>
            <p>Grow your Discord community faster with powerful member growth and management tools.</p>
          </div>
          <div class="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="index.html#features">Features</a></li>
              <li><a href="index.html#how">How It Works</a></li>
              <li><a href="index.html#why">Why Us</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="index.html#faq">FAQ</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Community</h4>
            <ul>
              <li><a href="${supportUrl}" target="_blank" rel="noopener noreferrer">Support Server</a></li>
              <li><a href="${inviteUrl}" target="_blank" rel="noopener noreferrer">Invite Bot</a></li>
              <li><a href="status.html">Bot Status</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="terms.html">Terms of Service</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="cookies.html">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ${botName}. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="terms.html">Terms</a>
            <span class="footer-dot">·</span>
            <a href="privacy.html">Privacy</a>
            <span class="footer-dot">·</span>
            <a href="cookies.html">Cookies</a>
          </div>
        </div>
      </footer>`;
  }

  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");

  if (headerSlot) headerSlot.innerHTML = renderHeader();
  if (footerSlot) footerSlot.innerHTML = renderFooter();
})();
