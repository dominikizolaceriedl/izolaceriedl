<script>
  import { onMount } from 'svelte';
  import { nav, company } from '../lib/data.js';

  let open = $state(false);
  let currentPath = $state('/');

  function updatePath() {
    currentPath = window.location.pathname;
  }

  const isActive = (href) => {
    return href === '/' ? currentPath === '/' : currentPath.startsWith(href);
  };

  function close() {
    open = false;
    setTimeout(updatePath, 0);
  }

  onMount(() => {
    updatePath();
    window.addEventListener('popstate', updatePath);

    return () => {
      window.removeEventListener('popstate', updatePath);
    };
  });
</script>

<header class="site-header">
  <a class="brand" href="/" aria-label="{company.name} - úvod" onclick={close}>
    <span class="brand-text">
      Izolace <mark>Riedl</mark>
    </span>
  </a>

  <nav class:open aria-label="Hlavní navigace">
    {#each nav as item}
      <a class:active={isActive(item.href)} href={item.href} onclick={close}>
        {item.label}
      </a>
    {/each}
  </nav>

  <a class="header-cta" href="/kontakt" onclick={close}>
    Nezávazná poptávka <span>→</span>
  </a>

  <button
    class="menu-toggle"
    class:active={open}
    aria-label="Otevřít menu"
    aria-expanded={open}
    onclick={() => open = !open}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</header>

{#if open}
  <button class="menu-backdrop" aria-label="Zavřít menu" onclick={close}></button>
{/if}

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem clamp(1rem, 4vw, 4rem);
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    color: #111827;
    text-decoration: none;
  }

  .brand-text {
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    font-size: clamp(1.55rem, 2.6vw, 2.35rem);
    font-weight: 950;
    line-height: 1;
    letter-spacing: -0.06em;
    white-space: nowrap;
    transition:
      transform 0.2s ease,
      color 0.2s ease;
  }

  .brand-text mark {
    padding: 0.08em 0.24em 0.12em;
    border-radius: 0.35rem;
    background: #facc15;
    color: #111827;
    font-weight: 950;
    line-height: 1;
  }

  .brand:hover .brand-text {
    transform: translateY(-1px);
  }

  .brand:focus-visible {
    outline: 3px solid rgba(250, 204, 21, 0.55);
    outline-offset: 5px;
    border-radius: 0.45rem;
  }

  nav {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: clamp(1rem, 2vw, 1.75rem);
  }

  nav a {
    color: #1f2937;
    text-decoration: none;
    font-size: 0.98rem;
    font-weight: 700;
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }

  nav a:hover,
  nav a.active {
    color: #111827;
  }

  nav a:hover {
    transform: translateY(-1px);
  }

  .header-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    background: #111827;
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 800;
    white-space: nowrap;
    transition:
      transform 0.2s ease,
      background 0.2s ease;
  }

  .header-cta:hover {
    transform: translateY(-1px);
    background: #000;
  }

  .menu-toggle {
    display: none;
    width: 2.75rem;
    height: 2.75rem;
    border: 0;
    border-radius: 0.8rem;
    background: #111827;
    cursor: pointer;
    place-items: center;
    padding: 0;
  }

  .menu-toggle span {
    display: block;
    width: 1.25rem;
    height: 2px;
    margin: 3px 0;
    border-radius: 999px;
    background: white;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .menu-backdrop {
    position: fixed;
    inset: 0;
    z-index: 80;
    border: 0;
    background: rgba(15, 23, 42, 0.35);
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .site-header {
      gap: 0.8rem;
      padding: 0.85rem 1rem;
    }

    .brand-text {
      font-size: clamp(1.25rem, 6vw, 1.6rem);
      letter-spacing: -0.045em;
    }

    .brand-text mark {
      padding: 0.07em 0.2em 0.1em;
      border-radius: 0.3rem;
    }

    nav {
      position: fixed;
      top: 4.75rem;
      left: 1rem;
      right: 1rem;
      z-index: 120;
      display: none;
      margin-left: 0;
      padding: 1rem;
      flex-direction: column;
      align-items: stretch;
      gap: 0.35rem;
      border-radius: 1rem;
      background: white;
      box-shadow: 0 20px 45px rgba(15, 23, 42, 0.18);
    }

    nav.open {
      display: flex;
    }

    nav a {
      padding: 0.9rem 1rem;
      border-radius: 0.75rem;
      font-size: 1rem;
    }

    nav a:hover,
    nav a.active {
      background: #f3f4f6;
    }

    .header-cta {
      display: none;
    }

    .menu-toggle {
      margin-left: auto;
      display: grid;
    }
  }

  @media (max-width: 380px) {
    .brand-text {
      font-size: 1.18rem;
      gap: 0.25rem;
    }
  }
</style>