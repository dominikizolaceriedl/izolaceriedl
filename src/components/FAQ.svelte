<script>
  import { faqs } from '../lib/data.js';
  let active = $state(0);
</script>

<div class="faq-list">
  {#each faqs as item, i}
    <article class:open={active === i}>
      <button onclick={() => active = active === i ? -1 : i}>
        <span>{item.q}</span><b>{active === i ? '−' : '+'}</b>
      </button>
      {#if active === i}<p>{item.a}</p>{/if}
    </article>
  {/each}
</div>
