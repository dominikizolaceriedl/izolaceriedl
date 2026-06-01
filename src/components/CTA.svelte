<script>
  import { company } from '../lib/data.js';
  import { reveal } from '../lib/reveal.js';
</script>

<section class="cta-band" use:reveal>
  <div>
    <p>Potřebujete poradit?</p>
    <h2>Pomůžeme vybrat správnou izolaci pro váš projekt.</h2>
  </div>
  <div class="cta-actions">
    <a class="btn primary" href="/kontakt">Nezávazně poptat</a>
    <a class="phone-link" href="tel:+420731700182">{company.phone}</a>
  </div>
</section>
