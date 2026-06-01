<script>
  import PageHero from '../components/PageHero.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
  import CTA from '../components/CTA.svelte';
  import { projects } from '../lib/data.js';
  import { reveal } from '../lib/reveal.js';
</script>

<PageHero eyebrow="Reference" title="Naše <mark>realizace</mark>" text="Ukázky hotových podlahových skladeb, příprav pro betonáž a detailů izolací." image="/images/realizace-room-2.jpeg" />

<section class="section container">
  <div class="filter-pills" use:reveal>
    <button>Vše</button><button>EPS</button><button>Minerální vata</button><button>Dilatační páska</button>
  </div>
  <div class="project-grid">
    {#each [...projects, ...projects] as project, i}
      <ProjectCard {project} delay={(i % 4) * 80}/>
    {/each}
  </div>
</section>

<section class="stats-section container" use:reveal>
  <article><strong>50+</strong><span>realizací</span></article>
  <article><strong>10+</strong><span>let zkušeností</span></article>
  <article><strong>100%</strong><span>důraz na kvalitu</span></article>
  <article><strong>ČR</strong><span>možnost realizací</span></article>
</section>

<section class="section container testimonial" use:reveal>
  <p>„Profesionální přístup, přesné provedení a čistá práce. Vše proběhlo podle domluvy a výsledek splnil očekávání.“</p>
  <strong>Spokojený zákazník</strong>
</section>

<CTA />
