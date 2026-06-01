<script>
  import Icon from './Icon.svelte';
  import { reveal } from '../lib/reveal.js';
  let { project, delay = 0 } = $props();
</script>

<article class="project-card" use:reveal={{ delay }}>
  <img src={project.image} alt={project.title} loading="lazy" />
  <div>
    <span>{project.type}</span>
    <h3>{project.title}</h3>
    <p class="location"><Icon name="pin" size={15}/>{project.location}</p>
    <p>{project.text}</p>
  </div>
</article>
