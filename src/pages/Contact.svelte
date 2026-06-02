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
    <a href="#faq" class="sr-only" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;">Skočit na FAQ</a>
    <FAQ />
  </div>
  <div class="map-card" use:reveal>
    <h2>Kde působíme</h2>
    <div class="map-visual" style="padding-top: 20px;">
      
      <svg viewBox="0 0 440 260" style="width: 100%; max-width: 340px; height: auto; margin-bottom: 70px; position: relative; z-index: 1;" aria-label="Mapa působnosti v České republice">
        <path d="M 50 110 L 90 60 L 150 50 L 200 65 L 260 55 L 320 60 L 370 80 L 410 110 L 400 160 L 350 200 L 290 190 L 250 215 L 180 195 L 120 215 L 60 180 L 40 140 Z" 
              fill="rgba(13, 13, 15, 0.04)" 
              stroke="var(--black)" 
              stroke-width="2" 
              stroke-dasharray="4 4" />
        
        <circle cx="140" cy="130" r="75" fill="rgba(255, 196, 0, 0.12)" stroke="var(--yellow)" stroke-width="1" stroke-dasharray="2 2" />

        <g>
          <circle cx="150" cy="110" r="7" fill="var(--black)" />
          <circle cx="150" cy="110" r="4" fill="var(--yellow)" />
          <circle cx="150" cy="110" r="4" fill="none" stroke="var(--yellow)" stroke-width="2">
            <animate attributeName="r" values="4;20;4" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite"/>
          </circle>
        </g>

        <g>
          <circle cx="90" cy="130" r="5" fill="var(--black)" />
          <circle cx="90" cy="130" r="3" fill="var(--yellow-2)" />
          <circle cx="90" cy="130" r="3" fill="none" stroke="var(--yellow-2)" stroke-width="1.5">
            <animate attributeName="r" values="3;14;3" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
        </g>

        <g>
          <circle cx="155" cy="175" r="5" fill="var(--black)" />
          <circle cx="155" cy="175" r="3" fill="var(--yellow-2)" />
          <circle cx="155" cy="175" r="3" fill="none" stroke="var(--yellow-2)" stroke-width="1.5">
            <animate attributeName="r" values="3;14;3" dur="3s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="3s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>

      <p>Praha a Středočeský, Jihočeský, Plzeňský kraj<br/>Možnost realizací po celé ČR</p>
    </div>
  </div>
</section>