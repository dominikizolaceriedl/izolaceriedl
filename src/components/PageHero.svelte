<script>
  import { reveal } from '../lib/reveal.js';
  let { eyebrow = '', title = '', text = '', image = '/images/brand-flyer.webp', cta = true } = $props();
</script>

<section class="page-hero compact">
  <div class="hero-copy" use:reveal>
    {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
    <h1>{@html title}</h1>
    <p>{text}</p>
    {#if cta}
      <div class="hero-actions">
        <a class="btn primary" href="/kontakt">Nezávazná poptávka</a>
        <a class="btn ghost" href="/realizace">Naše realizace</a>
      </div>
    {/if}
  </div>
  <figure class="hero-visual" use:reveal={{ delay: 120 }}>
    <img src={image} alt="Realizace podlahových izolací" />
  </figure>
</section>
