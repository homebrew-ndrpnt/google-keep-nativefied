const observer = new MutationObserver(() => {
  Array.from(document.querySelectorAll('a[target="_blank"]')).forEach(
    (link) => {
      link.removeAttribute('target');
    },
  );
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributeFilter: ['target'],
});
