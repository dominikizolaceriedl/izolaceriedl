<script>
  let { eyebrow = '', title = '', text = '', align = 'center' } = $props();
</script>

<div class="section-title {align}">
  {#if eyebrow}<span>{eyebrow}</span>{/if}
  <h2>{@html title}</h2>
  {#if text}<p>{text}</p>{/if}
</div>
