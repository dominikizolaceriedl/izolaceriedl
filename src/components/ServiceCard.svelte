<script>
  import Icon from './Icon.svelte';
  import { reveal } from '../lib/reveal.js';

  let { service, delay = 0, index = 0 } = $props();

  const images = [
    '/images/realizace-room-1.jpeg',
       '/images/relizace-room-5.jpeg',
    '/images/realizace-room-4.jpeg'
  ];

  const fallbackImages = [
    '/images/realizace-room-1.jpg',
    '/images/relizace-room-5.jpeg',
    '/images/realizace-room-4.jpg'
  ];

  const titles = [
    'Podlahový EPS',
    'Kročejová izolace',
    'Dilatační pásky'
  ];

  const slugs = [
    'podlahovy-eps',
    'krocejova-izolace',
    'dilatacni-pasky'
  ];

  const icons = [
    'shield',
    'sound',
    'pulse'
  ];

  function handleImageError(event) {
    const img = event.currentTarget;

    if (img.dataset.fallbackApplied === 'true') {
      img.style.display = 'none';
      return;
    }

    img.dataset.fallbackApplied = 'true';
    img.src = fallbackImages[index] ?? fallbackImages[0];
  }
</script>

<article
  class="service-card"
  id={service.slug ?? slugs[index]}
  use:reveal={{ delay }}
>
  <div class="service-image">
    <img
      src={images[index] ?? images[0]}
      alt={service.title ?? titles[index]}
      loading="lazy"
      onerror={handleImageError}
    />
  </div>

  <div class="service-content">
    <div class="service-head">
      <span class="icon-badge">
        <Icon name={service.icon ?? icons[index]} size={24} />
      </span>

      <h3>{service.title ?? titles[index]}</h3>
    </div>

    <p>{service.short}</p>

    <ul>
      {#each service.bullets as item}
        <li>
          <Icon name="check" size={16} />
          {item}
        </li>
      {/each}
    </ul>

    <a class="text-link" href="/kontakt">Nezávazně poptat →</a>
  </div>
</article>