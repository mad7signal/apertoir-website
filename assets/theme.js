/* Apply before styles load to avoid a flash of the wrong theme. */
(() => {
  'use strict';
  const key = 'apertoir-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) { /* The theme still works when browser storage is unavailable. */ }

  function apply() {
    if (preference === 'system') root.removeAttribute('data-theme');
    else root.dataset.theme = preference;
    const dark = preference === 'dark' || (preference === 'system' && system.matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#15121f' : '#f6f3fa');
    document.querySelectorAll('[data-theme-select]').forEach(select => { select.value = preference; });
  }
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : 'system';
    apply();
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-select]').forEach(select => {
      select.value = preference;
      select.closest('.theme-control').hidden = false;
      select.addEventListener('change', () => {
        preference = select.value;
        try {
          if (preference === 'system') localStorage.removeItem(key);
          else localStorage.setItem(key, preference);
        } catch (_) { /* Keep the selected theme for this page. */ }
        apply();
      });
    });
  });
})();
