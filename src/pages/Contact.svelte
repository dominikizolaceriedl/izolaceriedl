<script>
  import PageHero from '../components/PageHero.svelte';
  import ContactForm from '../components/ContactForm.svelte';
  import FAQ from '../components/FAQ.svelte';
  import Icon from '../components/Icon.svelte';
  import { company } from '../lib/data.js';
  import { reveal } from '../lib/reveal.js';
</script>

<PageHero eyebrow="Kontakt" title="Kontaktujte <mark>nás</mark>" text="Plánujete zateplení podlahy nebo si nejste jistí skladbou? Ozvěte se nám a společně najdeme vhodné řešení." image="/images/realizace-room-4.jpeg" />

<section class="section container contact-layout">
  <aside class="contact-card" use:reveal>
    <h2>Kontaktní údaje</h2>
    <a href="tel:+420731700182"><Icon name="phone"/> <span><small>Telefon</small>{company.phone}</span></a>
    <a href="mailto:{company.email}"><Icon name="mail"/> <span><small>E-mail</small>{company.email}</span></a>
    <p><Icon name="pin"/> <span><small>Lokalita</small>{company.region}</span></p>
    <p><Icon name="truck"/> <span><small>Působnost</small>{company.availability}</span></p>
  </aside>

  <div class="form-panel" use:reveal={{ delay: 100 }}>
    <h2>Nezávazný kontaktní formulář</h2>
    <ContactForm />
  </div>
</section>

<section class="section container two-columns">
  <div>
    <h2>Často kladené otázky</h2>
    <FAQ />
  </div>
  <div class="map-card" use:reveal>
    <h2>Kde působíme</h2>
    
    <div class="pro-map-box">
      <iframe 
        title="Mapa působnosti v ČR"
        src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,48.5,19.0,51.1&layer=mapnik" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; pointer-events: none; filter: grayscale(1) opacity(0.4) contrast(1.2);"
        loading="lazy"
        tabindex="-1">
      </iframe>

      <div class="map-radius"></div>
      <span class="map-label">Hlavní oblast</span>
    </div>

    <div class="region-info">
      <div class="region-box primary">
         <Icon name="pin" />
         <div>
           <strong>Hlavní oblast působnosti</strong>
           <p>Praha, Středočeský, Jihočeský a Plzeňský kraj.</p>
         </div>
      </div>
      <div class="region-box secondary">
         <Icon name="truck" />
         <div>
           <strong>Celá ČR</strong>
           <p>Větší projekty po domluvě realizujeme kdekoli.</p>
         </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Nové profi styly pro mapovou sekci */
  .pro-map-box {
    position: relative;
    background-color: #f0f0f0;
    border-radius: 16px;
    border: 1px solid var(--line);
    height: 240px;
    margin: 20px 0;
    overflow: hidden;
  }

  /* Okruh působnosti - zvětšen a posunut níže, aby pokryl jižní Čechy */
  .map-radius {
    position: absolute;
    top: 52%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    background: rgba(255,196,0,0.13);
    border: 1px solid rgba(255,196,0,0.35);
    border-radius: 50%;
    z-index: 2;
  }

  /* Středový bod */
  .map-radius::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background: var(--yellow);
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .map-label {
    position: absolute;
    top: 52%;
    left: calc(40% + 120px);
    transform: translateY(-50%);
    background: #fff;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    border: 1px solid var(--line);
    z-index: 3;
    white-space: nowrap;
  }

  .region-info {
    display: grid;
    gap: 12px;
  }

  .region-box {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px;
    border-radius: 14px;
  }

  .region-box strong {
    display: block;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .region-box p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.5;
  }

  /* Světlý box pro hlavní regiony */
  .region-box.primary {
    background: var(--soft);
    border: 1px solid var(--line);
  }
  .region-box.primary :global(svg) {
    color: var(--yellow-2);
  }
  .region-box.primary p {
    color: #555;
  }

  /* Tmavý prémiový box pro celou ČR */
  .region-box.secondary {
    background: linear-gradient(135deg, #151515, #080808);
    color: #fff;
  }
  .region-box.secondary :global(svg) {
    color: var(--yellow);
  }
  .region-box.secondary p {
    color: rgba(255,255,255,.7);
  }
</style>