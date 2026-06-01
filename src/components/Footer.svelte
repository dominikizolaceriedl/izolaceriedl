<script>
  import { company, nav, services } from '../lib/data.js';
  import Icon from './Icon.svelte';
</script>

<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <img src="/images/logo.webp" alt="Izolace Riedl" />
      <p>Specializujeme se na realizaci podlahových izolací pro tepelný komfort, akustický klid a dlouhou životnost podlah.</p>
      <div class="socials"><span>IG</span><span>FB</span><strong>{company.instagram}</strong></div>
    </div>

    <div>
      <h3>Kontakt</h3>
      <a href="tel:+420731700182"><Icon name="phone" size={18}/>{company.phone}</a>
      <a href="mailto:{company.email}"><Icon name="mail" size={18}/>{company.email}</a>
      <p class="with-icon"><Icon name="pin" size={18}/>{company.region}</p>
    </div>

    <div>
      <h3>Služby</h3>
      {#each services as service}
        <a href="/sluzby#{service.slug}">{service.title}</a>
      {/each}
    </div>

    <div>
      <h3>Rychlé odkazy</h3>
      {#each nav as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </div>
  </div>

  <div class="footer-bottom container">
    <span>© 2024 Izolace Riedl. Všechna práva vyhrazena.</span>
    <span>Zásady ochrany osobních údajů | Cookies</span>
  </div>
</footer>
