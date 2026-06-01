<script>
  let menuOpen = $state(false);

  const nav = [
    { label: 'Služby', href: '#sluzby' },
    { label: 'Realizace', href: '#realizace' },
    { label: 'Proč my', href: '#proc-my' },
    { label: 'Reference', href: '#reference' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  const services = [
    {
      title: 'Podlahový polystyren (EPS)',
      img: '/images/eps.jpg',
      icon: 'box',
      text: 'Základní tepelná izolace podlah, která udrží teplo v interiéru, sníží náklady na topení a zvýší komfort bydlení.',
      bullets: [
        'Výborné tepelně izolační vlastnosti',
        'Nízká nasákavost a dlouhá životnost',
        'Lehký materiál, snadná manipulace',
        'Skvělý poměr cena / výkon'
      ]
    },
    {
      title: 'Minerální vata',
      img: '/images/mineral.jpg',
      icon: 'waves',
      text: 'Izolace s výbornou akustickou ochranou a požární odolností pro maximální bezpečí a klid domova.',
      bullets: [
        'Skvělá zvuková izolace',
        'Nehořlavý a odolný materiál',
        'Paropropustná – reguluje vlhkost',
        'Vhodná pro podlahy s vyšším zatížením'
      ]
    },
    {
      title: 'Dilatační páska',
      img: '/images/tape.jpg',
      icon: 'roll',
      text: 'Nezbytný prvek pro správnou dilataci podlahy, který zabraňuje vzniku prasklin a poškození.',
      bullets: [
        'Odděluje podlahu od svislých konstrukcí',
        'Umožňuje přirozenou dilataci podlahy',
        'Zabraňuje praskání a vzniku trhlin',
        'Chrání podlahu a prodlužuje životnost'
      ]
    }
  ];

  const suitable = [
    { title: 'Novostavby', text: 'Ideální řešení pro nové stavby, které potřebují kvalitní izolaci od základů.', icon: 'home' },
    { title: 'Rekonstrukce', text: 'Zlepšete tepelný a akustický komfort při rekonstrukci stávajících podlah.', icon: 'hammer' },
    { title: 'Rodinné domy', text: 'Pohodlné a úsporné bydlení pro celou rodinu po celý rok.', icon: 'roof' },
    { title: 'Byty', text: 'Účinná izolace pro byty a bytové domy – klid, teplo a úspora.', icon: 'building' }
  ];

  const process = [
    { title: 'Konzultace', text: 'Probereme vaše potřeby a doporučíme ideální řešení.', icon: 'clipboard' },
    { title: 'Zaměření', text: 'Přesně zaměříme prostor a připravíme návrh izolace.', icon: 'measure' },
    { title: 'Příprava', text: 'Připravíme podklad a přivezeme kvalitní materiál.', icon: 'layers' },
    { title: 'Realizace', text: 'Odborně provedeme pokládku rychle, čistě a precizně.', icon: 'wrench' },
    { title: 'Kontrola', text: 'Zkontrolujeme kvalitu provedení a prostor necháme v pořádku.', icon: 'shield' }
  ];

  const benefits = [
    'Tepelná a kročejová izolace',
    'Úspora energií',
    'Akustický komfort',
    'Pevnost a stabilita',
    'Čistá a rychlá realizace'
  ];

  const icons = {
    box: 'M7 7.5 12 4.5l5 3-5 3-5-3Zm0 1.8v5.8l5 3V11.3l-5-2Zm10 0-5 2v6.8l5-3V9.3Z',
    waves: 'M7 5c2 1.6 2 3.4 0 5s-2 3.4 0 5m5-10c2 1.6 2 3.4 0 5s-2 3.4 0 5m5-10c2 1.6 2 3.4 0 5s-2 3.4 0 5',
    roll: 'M7 12a5 5 0 1 1 10 0v5H7v-5Zm5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
    home: 'M4 11 12 4l8 7v8h-5v-5H9v5H4v-8Z',
    hammer: 'M14 4l6 6-2 2-2-2-7 7-2-2 7-7-2-2 2-2ZM4 20l6-6 2 2-6 6H4v-2Z',
    roof: 'M3 12 12 5l9 7M6 11v8h12v-8',
    building: 'M5 20V5h8v15M13 9h6v11M8 8h2m-2 4h2m-2 4h2m8-4h-2m2 4h-2',
    clipboard: 'M9 5h6v3H9V5ZM7 7H5v14h14V7h-2M9 13h6m-6 4h4',
    measure: 'M4 18 18 4l2 2-14 14-2-2Zm3-3 2 2m2-6 2 2m2-6 2 2',
    layers: 'M12 4 4 8l8 4 8-4-8-4Zm-8 8 8 4 8-4M4 16l8 4 8-4',
    wrench: 'M20 7.5a5 5 0 0 1-6.7 6.7L7 20.5 3.5 17l6.3-6.3A5 5 0 0 1 16.5 4L13 7.5 16.5 11 20 7.5Z',
    shield: 'M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Zm-3 9 2 2 4-5',
    phone: 'M6 4l3 3-2 2c1 3 3 5 6 6l2-2 3 3-2 4c-7-.5-12.5-6-13-13l3-3Z',
    mail: 'M4 6h16v12H4V6Zm0 0 8 7 8-7',
    pin: 'M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
  };

  function closeMenu() {
    menuOpen = false;
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class="site-header">
  <a class="brand" href="#top" aria-label="Izolace Riedl úvod" onclick={closeMenu}>
    <span class="brand-roof" aria-hidden="true"></span>
    <span>
      <strong>IZOLACE RIEDL</strong>
      <small>PRO TEPELNÝ KOMFORT</small>
    </span>
  </a>

  <button
    class="menu-toggle"
    type="button"
    aria-label="Otevřít menu"
    aria-expanded={menuOpen}
    onclick={() => (menuOpen = !menuOpen)}
  >
    <span></span><span></span><span></span>
  </button>

  <nav class:open={menuOpen} aria-label="Hlavní navigace">
    {#each nav as item}
      <a href={item.href} onclick={closeMenu}>{item.label}</a>
    {/each}
    <a class="nav-cta" href="#kontakt" onclick={closeMenu}>Nezávazná poptávka <span>→</span></a>
  </nav>
</header>

<main id="top">
  <section class="hero section-dark">
    <div class="hero-copy">
      <div class="breadcrumb">Domů <span>›</span> Služby</div>
      <p class="eyebrow">Kompletní řešení podlahových izolací</p>
      <h1>Naše <span>služby</span></h1>
      <p class="hero-text">
        Pomáháme vám vytvořit teplo, komfort a úsporu energie pomocí kvalitních materiálů a profesionální realizace.
        Každá podlaha si zaslouží správnou izolaci.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#kontakt">Nezávazně poptat <span>→</span></a>
        <a class="btn btn-outline" href="#sluzby">Naše služby</a>
      </div>
    </div>
    <div class="hero-media" aria-hidden="true">
      <img src="/images/hero-floor.jpg" alt="" />
    </div>
  </section>

  <section id="sluzby" class="services section-light">
    <div class="section-heading center">
      <p class="eyebrow">Naše služby</p>
      <h2>Kompletní řešení podlahových izolací</h2>
    </div>

    <div class="service-grid">
      {#each services as service}
        <article class="service-card">
          <img src={service.img} alt={service.title} loading="lazy" />
          <div class="service-body">
            <span class="icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d={icons[service.icon]} /></svg>
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>
              {#each service.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
            <a href="#kontakt" class="text-link">Nezávazně poptat <span>→</span></a>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="suitable section-light" aria-labelledby="suitable-heading">
    <div class="section-heading center compact">
      <h2 id="suitable-heading">Pro jaké stavby je služba vhodná</h2>
    </div>
    <div class="suitable-grid">
      {#each suitable as item}
        <article>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[item.icon]} /></svg>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </section>

  <section id="proc-my" class="benefits section-dark">
    <div class="section-heading center inverse">
      <p class="eyebrow">Proč si vybrat nás</p>
      <h2>Výhody, které pocítíte každý den</h2>
    </div>
    <div class="benefit-grid">
      {#each benefits as benefit, i}
        <article>
          <span>{String(i + 1).padStart(2, '0')}</span>
          <h3>{benefit}</h3>
          <p>
            Kvalitní provedení, správně zvolený materiál a pečlivá pokládka zajišťují dlouhou životnost celé skladby.
          </p>
        </article>
      {/each}
    </div>
  </section>

  <section id="realizace" class="process section-dark">
    <div class="section-heading center inverse">
      <p class="eyebrow">Jak službu realizujeme</p>
      <h2>Profesionální postup, na který se můžete spolehnout</h2>
    </div>

    <div class="process-grid">
      {#each process as step, i}
        <article class="process-card">
          <span class="step-number">{i + 1}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[step.icon]} /></svg>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="cta-strip">
    <div>
      <h2>Potřebujete poradit s výběrem izolace?</h2>
      <p>Nevíte, která izolace je pro váš projekt ta pravá? Rádi vám pomůžeme vybrat nejvhodnější řešení.</p>
    </div>
    <a class="btn btn-primary" href="#kontakt">Nezávazně poptat <span>→</span></a>
  </section>

  <section id="reference" class="reference section-light">
    <div class="quote">
      <span aria-hidden="true">“</span>
      <p>
        Kvalitní izolace začíná správným návrhem a čistou realizací. Ke každému projektu přistupujeme individuálně
        a držíme se domluveného postupu.
      </p>
    </div>
    <div class="stats">
      <div><strong>10+</strong><span>let zkušeností</span></div>
      <div><strong>100%</strong><span>důraz na kvalitu</span></div>
      <div><strong>ČR</strong><span>možnost realizací</span></div>
    </div>
  </section>

  <section id="kontakt" class="contact section-light">
    <div class="contact-card dark-card">
      <p class="eyebrow">Kontakt</p>
      <h2>Pošlete nám nezávaznou poptávku</h2>
      <p>Stačí pár základních informací. Ozveme se vám a probereme nejvhodnější řešení pro váš projekt.</p>
      <ul class="contact-list">
        <li><svg viewBox="0 0 24 24"><path d={icons.phone} /></svg> +420 731 700 182</li>
        <li><svg viewBox="0 0 24 24"><path d={icons.mail} /></svg> izolaceriedl@gmail.com</li>
        <li><svg viewBox="0 0 24 24"><path d={icons.pin} /></svg> Praha a Středočeský kraj</li>
      </ul>
    </div>

    <form class="form-card" action="mailto:izolaceriedl@gmail.com" method="post" enctype="text/plain">
      <label>
        Jméno a příjmení
        <input name="jmeno" autocomplete="name" placeholder="Vaše jméno" />
      </label>
      <label>
        Telefon
        <input name="telefon" autocomplete="tel" placeholder="Telefonní číslo" />
      </label>
      <label>
        E-mail
        <input name="email" autocomplete="email" placeholder="vas@email.cz" />
      </label>
      <label>
        Typ izolace
        <select name="typ izolace">
          <option>Podlahový polystyren (EPS)</option>
          <option>Minerální vata</option>
          <option>Dilatační páska</option>
          <option>Potřebuji poradit</option>
        </select>
      </label>
      <label class="full">
        Zpráva
        <textarea name="zprava" rows="5" placeholder="Napište nám více o vašem projektu..."></textarea>
      </label>
      <button class="btn btn-primary full" type="submit">Odeslat poptávku <span>→</span></button>
    </form>
  </section>
</main>

<footer class="site-footer">
  <div class="footer-brand">
    <a class="brand" href="#top">
      <span class="brand-roof" aria-hidden="true"></span>
      <span>
        <strong>IZOLACE RIEDL</strong>
        <small>PRO TEPELNÝ KOMFORT</small>
      </span>
    </a>
    <p>Specializujeme se na realizaci podlahových izolací pro tepelný komfort a dokonalý zvukový klid.</p>
  </div>
  <div>
    <h3>Služby</h3>
    <a href="#sluzby">Podlahový polystyren (EPS)</a>
    <a href="#sluzby">Minerální vata</a>
    <a href="#sluzby">Dilatační páska</a>
  </div>
  <div>
    <h3>Rychlý odkaz</h3>
    <a href="#realizace">Realizace</a>
    <a href="#proc-my">Proč my</a>
    <a href="#kontakt">Kontakt</a>
  </div>
  <div>
    <h3>Působíme v</h3>
    <p>Praha a Středočeský kraj<br />Možnost realizací po celé České republice.</p>
  </div>
  <p class="copyright">© 2024 Izolace Riedl. Všechna práva vyhrazena.</p>
</footer>
