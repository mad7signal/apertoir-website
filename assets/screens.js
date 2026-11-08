(() => {
  'use strict';
  const dialog = document.querySelector('.screen-viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.viewer-image');
  document.querySelectorAll('.screen-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const visible = [...link.querySelectorAll('img')].find(img => getComputedStyle(img).display !== 'none');
      if (!visible) return;
      event.preventDefault();
      image.src = visible.currentSrc || visible.src;
      image.alt = visible.alt;
      dialog.querySelector('h2').textContent = link.dataset.screenTitle;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
