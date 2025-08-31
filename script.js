(function() {
  const root = document.documentElement;
  const THEME_KEY = 'preferred-theme';

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  }
  function storeTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }
  function applyTheme(theme) {
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }

  function systemPrefersLight() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  }

  // Initialize theme
  const initial = getStoredTheme() || (systemPrefersLight() ? 'light' : 'dark');
  applyTheme(initial);

  // Toggle button
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    function updateToggleIcon(theme) {
      toggle.textContent = theme === 'light' ? '🌞' : '🌙';
      toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      toggle.title = 'Toggle theme';
    }
    updateToggleIcon(initial);
    toggle.addEventListener('click', function() {
      const currentIsLight = root.classList.contains('light');
      const next = currentIsLight ? 'dark' : 'light';
      applyTheme(next);
      storeTheme(next);
      updateToggleIcon(next);
    });
  }

  // Smooth scroll for same-page links
  document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + id);
      }
    }
  });

  // Update footer year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }
})();
