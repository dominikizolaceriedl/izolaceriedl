<script>
  import PageHero from '../components/PageHero.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import ServiceCard from '../components/ServiceCard.svelte';
  import BenefitGrid from '../components/BenefitGrid.svelte';
  import ProcessSteps from '../components/ProcessSteps.svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
  import CTA from '../components/CTA.svelte';
  import { services, projects, company } from '../lib/data.js';
  import { reveal } from '../lib/reveal.js';
</script>

<PageHero
  eyebrow="Pro tepelný komfort a zvukový klid"
  title="Realizace <mark>podlahových</mark> izolací"
  text="Kvalitní izolace podlahy pro teplo, komfort, úsporu energií a dlouhou životnost celé skladby."
  image="/images/realizace-room-4.jpeg"
/>

<section class="section container">
  <SectionTitle eyebrow="Naše služby" title="Kompletní řešení podlahových izolací" text="Od výběru materiálu až po precizní pokládku a přípravu pro betonáž." />
  <div class="services-grid">
    {#each services as service, i}
      <ServiceCard {service} delay={i * 90}/>
    {/each}
  </div>
</section>

<section class="dark-section">
  <div class="container">
    <SectionTitle eyebrow="Proč si vybrat nás" title="Výhody, které pocítíte každý den" text="Správně navržená a položená izolace zvyšuje komfort bydlení a chrání konstrukce." />
    <BenefitGrid />
  </div>
</section>
