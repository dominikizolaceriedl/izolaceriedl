<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Services from './pages/Services.svelte';
  import Realizations from './pages/Realizations.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';

  let path = $state(window.location.pathname);

  function updatePath() {
    path = window.location.pathname;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', updatePath);
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="/"]');
      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin) return;
      event.preventDefault();
      history.pushState({}, '', url.pathname + url.hash);
      updatePath();
      if (url.hash) setTimeout(() => document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
    });
  }
</script>

<Header />
<main>
  {#if path === '/'}
    <Home />
  {:else if path.startsWith('/sluzby')}
    <Services />
  {:else if path.startsWith('/realizace')}
    <Realizations />
  {:else if path.startsWith('/proc-my')}
    <About />
  {:else if path.startsWith('/kontakt')}
    <Contact />
  {:else}
    <Home />
  {/if}
</main>
<Footer />
