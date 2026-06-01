<script>
  import { process } from '../lib/data.js';
  import Icon from './Icon.svelte';
  import { reveal } from '../lib/reveal.js';
  const icons = ['phone', 'ruler', 'layers', 'tool', 'shield'];
</script>

<div class="process-steps">
  {#each process as step, i}
    <article use:reveal={{ delay: i * 80 }}>
      <span class="step-number">{i + 1}</span>
      <Icon name={icons[i]} size={30}/>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </article>
  {/each}
</div>
