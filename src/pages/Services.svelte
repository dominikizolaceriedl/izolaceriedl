<script>
  import PageHero from '../components/PageHero.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import ServiceCard from '../components/ServiceCard.svelte';
  import ProcessSteps from '../components/ProcessSteps.svelte';
  import CTA from '../components/CTA.svelte';
  import Icon from '../components/Icon.svelte';
  import { services } from '../lib/data.js';
  import { reveal } from '../lib/reveal.js';

  const suitable = [
    ['Novostavby', 'Ideální řešení od základů pro nové domy a byty.', 'layers'],
    ['Rekonstrukce', 'Zlepšení tepelného i akustického komfortu stávající podlahy.', 'tool'],
    ['Rodinné domy', 'Spolehlivý základ pro pohodlné a úsporné bydlení.', 'cube'],
    ['Byty', 'Účinné řešení pro kročejovou izolaci a větší klid.', 'sound']
  ];
</script>

<PageHero eyebrow="Služby" title="Naše <mark>služby</mark>" text="Kompletní řešení podlahových izolací pro rodinné domy, byty, rekonstrukce i novostavby." image="/images/realizace-room-1.jpeg" />

<section class="section container">
  <div class="services-grid full">
    {#each services as service, i}
      <ServiceCard {service} delay={i * 90}/>
    {/each}
  </div>
</section>

<section class="section container">
  <SectionTitle title="Pro jaké stavby je služba vhodná" text="Podlahové izolace navrhujeme podle skladby, zatížení a požadovaného komfortu." />
  <div class="suitable-grid">
    {#each suitable as item, i}
      <article use:reveal={{ delay: i * 80 }}>
        <Icon name={item[2]} size={34}/>
        <h3>{item[0]}</h3>
        <p>{item[1]}</p>
      </article>
    {/each}
  </div>
</section>

<section class="dark-section">
  <div class="container">
    <SectionTitle eyebrow="Postup realizace" title="Profesionální postup, na který se můžete spolehnout" />
    <ProcessSteps />
  </div>
</section>

<CTA />
