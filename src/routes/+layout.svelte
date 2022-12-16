<script>
    import '@fontsource/inter/400.css'
    import '@fontsource/inter/500.css'
    import '@fontsource/inter/600.css'
    import '@fontsource/rubik/500.css'
    import '@fontsource/rubik/600.css'
    import '@fontsource/rubik/400.css'

    import '../app.css'
</script>

<div class="bg-dark-950 min-h-screen">
    <div class="w-full max-w-[1228px] mx-auto">
        <slot />
    </div>

    <footer class="w-full flex flex-col items-center text-gray-500 pb-8">
        <p>
            Todos os direitos reservados aos criadores e produtores dos animes
        </p>
        <p class="mt-2">
            Made with love by
            <a
                href="https://github.com/thel3onardo"
                target="_blank"
                rel="noreferrer"
                class="text-blue-500"
                >thel3onardo</a
            >
        </p>
    </footer>
</div>

<style>
    :global(body) {
        font-family: 'Inter', sans-serif;
    }
</style>
