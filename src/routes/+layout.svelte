<script lang="ts">
    import '../app.css'
    import Darkmode from "$stores/darkmode"
    import Theme from "$stores/theme"
</script>

<body data-theme={$Theme} class={$Darkmode ? 'dark' : 'light'}>
    <div class="bg-surface-100-800-token text-surface-900-50-token relative h-screen w-screen overflow-hidden p-4">
        <slot />
    </div>
</body>
