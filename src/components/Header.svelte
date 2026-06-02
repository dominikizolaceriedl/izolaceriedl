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
    <span class="brand-text">Izolace <mark>Riedl</mark></span>
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
    <span></span><span></span><span></span>
  </button>
</header>

{#if open}
  <button class="menu-backdrop" aria-label="Zavřít menu" onclick={close}></button>
{/if}