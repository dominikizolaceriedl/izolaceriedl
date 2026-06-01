export function reveal(node, options = {}) {
  const delay = options.delay ?? 0;
  node.style.transitionDelay = `${delay}ms`;
  node.classList.add('reveal');

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      node.classList.add('is-visible');
      observer.disconnect();
    }
  }, { threshold: 0.16 });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
