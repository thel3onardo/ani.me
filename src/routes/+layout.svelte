<script>
    import '@fontsource/inter/400.css';
    import '@fontsource/inter/500.css';
    import '@fontsource/inter/600.css';
    import '@fontsource/rubik/500.css';
    import '@fontsource/rubik/600.css';
    import '@fontsource/rubik/400.css';

    import '../app.css';
</script>

<div class="bg-dark-900">
    <div class="w-full max-w-[1228px] mx-auto">
        <slot />
    </div>
</div>

<style>
    :global(body) {
        font-family: "Inter", sans-serif;
    }
</style>