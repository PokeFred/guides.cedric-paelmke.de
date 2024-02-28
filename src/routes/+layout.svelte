<script lang="ts">
    import '../app.css'
    import { writable } from 'svelte/store'
    import type { Writable } from 'svelte/store'

    type Theme = 'skeleton'
    const theme: Writable<Theme> = writable<Theme>('skeleton')
    const darkmode: Writable<boolean> = writable<boolean>(true)
</script>

<body data-theme={$theme} class={$darkmode ? 'dark' : 'light'}>
    <div class="bg-surface-100-800-token text-surface-900-50-token relative h-screen w-screen overflow-hidden p-4">
        <slot />
    </div>
</body>
