<script>
  import { nav, company } from '../lib/data.js';
  let open = $state(false);

  const isActive = (href) => {
    const path = window.location.pathname;
    return href === '/' ? path === '/' : path.startsWith(href);
  };

  function close() { open = false; }
</script>

<header class="site-header">
  <a class="brand" href="/" aria-label="{company.name} - úvod" onclick={close}>
    <img src="/images/logo.webp" alt="Logo Izolace Riedl" />
  </a>

  <nav class:open aria-label="Hlavní navigace">
    {#each nav as item}
      <a class:active={isActive(item.href)} href={item.href} onclick={close}>{item.label}</a>
    {/each}
  </nav>

  <a class="header-cta" href="/kontakt">Nezávazná poptávka <span>→</span></a>

  <button class="menu-toggle" class:active={open} aria-label="Otevřít menu" aria-expanded={open} onclick={() => open = !open}>
    <span></span><span></span><span></span>
  </button>
</header>

{#if open}
  <button class="menu-backdrop" aria-label="Zavřít menu" onclick={close}></button>
{/if}
