<script>
  import PageHero from '../components/PageHero.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import ProcessSteps from '../components/ProcessSteps.svelte';
  import CTA from '../components/CTA.svelte';
  import Icon from '../components/Icon.svelte';
  import { reveal } from '../lib/reveal.js';

  const values = [
    ['Kvalita provedení', 'Používáme ověřené materiály a postupy, které dávají smysl.', 'shield'],
    ['Přesnost', 'Každý detail má význam, hlavně v návaznostech a skladbě podlahy.', 'ruler'],
    ['Spolehlivost', 'Dodržujeme domluvu, termíny a komunikujeme na rovinu.', 'check'],
    ['Čistá práce', 'Dbáme na pořádek a pečlivou přípravu prostoru.', 'layers']
  ];
</script>

<PageHero eyebrow="O nás" title="Proč právě <mark>Izolace Riedl</mark>" text="Specializujeme se na podlahové izolace s důrazem na dlouhou životnost, tepelný komfort a akustický klid." image="/images/realizace-room-3.webp" />

<section class="section container">
  <SectionTitle title="Na čem si zakládáme" />
  <div class="value-grid">
    {#each values as value, i}
      <article use:reveal={{ delay: i * 80 }}>
        <Icon name={value[2]} size={34}/>
        <h3>{value[0]}</h3>
        <p>{value[1]}</p>
      </article>
    {/each}
  </div>
</section>

<section class="dark-section">
  <div class="container">
    <SectionTitle eyebrow="Jak pracujeme" title="Poctivý postup a kontrola detailů" />
    <ProcessSteps />
  </div>
</section>

<section class="section container about-card" use:reveal>
  <img src="/images/logo.webp" alt="Izolace Riedl logo" />
  <div>
    <h2>Izolace, která má smysl dnes i za roky.</h2>
    <p>Naším cílem není jen rychlá pokládka materiálu. Chceme, aby celá podlahová skladba fungovala správně, navazovala na další práce a přinesla vám reálný komfort v každodenním bydlení.</p>
  </div>
</section>

<CTA />
