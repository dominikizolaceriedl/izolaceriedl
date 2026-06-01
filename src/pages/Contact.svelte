<script>
  import PageHero from '../components/PageHero.svelte';
  import ContactForm from '../components/ContactForm.svelte';
  import FAQ from '../components/FAQ.svelte';
  import Icon from '../components/Icon.svelte';
  import { company } from '../lib/data.js';
  import { reveal } from '../lib/reveal.js';
</script>

<PageHero eyebrow="Kontakt" title="Kontaktujte <mark>nás</mark>" text="Plánujete zateplení podlahy nebo si nejste jistí skladbou? Ozvěte se nám a společně najdeme vhodné řešení." image="/images/realizace-room-4.webp" />

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
    <div class="map-visual">
      <span>Praha</span>
      <p>Praha a Středočeský kraj<br/>Možnost realizací po celé ČR</p>
    </div>
  </div>
</section>
