<script>
  import { benefits } from '../lib/data.js';
  import Icon from './Icon.svelte';
  import { reveal } from '../lib/reveal.js';
</script>

<div class="benefit-grid">
  {#each benefits as benefit, i}
    <article use:reveal={{ delay: i * 70 }}>
      <Icon name={benefit.icon} size={34}/>
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
    </article>
  {/each}
</div>
