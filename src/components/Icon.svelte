<script>
  import { iconPath } from '../lib/icons.js';
  let { name = 'check', size = 24, stroke = 'currentColor' } = $props();
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  {@html iconPath(name)}
</svg>
