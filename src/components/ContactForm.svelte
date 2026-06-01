<script>
  import { company } from '../lib/data.js';
</script>

<form class="contact-form" action={`mailto:${company.email}`} method="post" enctype="text/plain">
  <label>Jméno a příjmení<input name="Jméno" required placeholder="Vaše jméno" /></label>
  <label>Telefon<input name="Telefon" required placeholder="Telefonní číslo" /></label>
  <label>E-mail<input name="Email" type="email" placeholder="E-mail" /></label>
  <label>Místo realizace<input name="Místo" placeholder="Město / obec" /></label>
  <label class="full">Typ izolace
    <select name="Typ izolace">
      <option>Podlahový polystyren EPS</option>
      <option>Minerální vata</option>
      <option>Dilatační páska</option>
      <option>Potřebuji poradit</option>
    </select>
  </label>
  <label class="full">Zpráva<textarea name="Zpráva" rows="5" placeholder="Napište nám více o vašem projektu..."></textarea></label>
  <button class="btn primary" type="submit">Odeslat poptávku</button>
</form>
