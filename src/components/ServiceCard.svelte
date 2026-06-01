<script>
  import Icon from './Icon.svelte';
  import { reveal } from '../lib/reveal.js';
  let { service, delay = 0 } = $props();
</script>

<article class="service-card" id={service.slug} use:reveal={{ delay }}>
  <div class="service-image"><img src={service.image} alt={service.title} loading="lazy" /></div>
  <div class="service-content">
    <div class="service-head">
      <span class="icon-badge"><Icon name={service.icon} size={24}/></span>
      <h3>{service.title}</h3>
    </div>
    <p>{service.short}</p>
    <ul>
      {#each service.bullets as item}
        <li><Icon name="check" size={16}/>{item}</li>
      {/each}
    </ul>
    <a class="text-link" href="/kontakt">Nezávazně poptat →</a>
  </div>
</article>
