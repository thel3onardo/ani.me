<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte'
    import SectionLayout from '$lib/components/SectionLayout.svelte'
    import HeaderPoster from '$lib/components/HeaderPoster.svelte'
    import AnimePoster from '$lib/components/AnimePoster.svelte'
    import AlphabeticalFilter from '$lib/components/AlphabeticalFilter.svelte'

    let animeList = [
        {
            title: 'Nanatsu no Taizai',
            episode: 24,
            backdrop:
                'https://img.elo7.com.br/product/zoom/26BC0D7/big-poster-anime-the-promised-neverland-lo02-90x60-cm-nerd.jpg',
        },
        {
            title: 'Darling in the Franxx',
            episode: 1,
            backdrop:
                'https://cf.shopee.com.br/file/94fa0a9b673e1d39ddc999b77b70b414',
        },
        {
            title: 'Douluo Dalu',
            episode: 214,
            backdrop: 'https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg',
        },
        {
            title: 'Nanatsu no Taizai',
            episode: 24,
            backdrop:
                'https://img.elo7.com.br/product/zoom/26BC0D7/big-poster-anime-the-promised-neverland-lo02-90x60-cm-nerd.jpg',
        },
        {
            title: 'Darling in the Franxx',
            episode: 1,
            backdrop:
                'https://cf.shopee.com.br/file/94fa0a9b673e1d39ddc999b77b70b414',
        },
        {
            title: 'Douluo Dalu',
            episode: 214,
            backdrop: 'https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg',
        },
        {
            title: 'Nanatsu no Taizai',
            episode: 24,
            backdrop:
                'https://img.elo7.com.br/product/zoom/26BC0D7/big-poster-anime-the-promised-neverland-lo02-90x60-cm-nerd.jpg',
        },
        {
            title: 'Darling in the Franxx',
            episode: 1,
            backdrop:
                'https://cf.shopee.com.br/file/94fa0a9b673e1d39ddc999b77b70b414',
        },
        {
            title: 'Douluo Dalu',
            episode: 214,
            backdrop: 'https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg',
        },
    ]
</script>

<svelte:head>
    <title>Ani.me - In??cio</title>
</svelte:head>

<Navbar />
<AlphabeticalFilter />

<main class="w-full flex flex-col">
    <SectionLayout
        title="??ltimas novidades"
        subtitle="O que voc?? vai assistir hoje?"
    >
        <HeaderPoster
            title="ONE PUNCH MAN TER?? 3 TEMPORADA"
            description="Como relatado anteriormente, a franquia baseada no mang?? escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produ????o de uma terceira temporada da adapta????o para o anime [???]"
            bgUrl="https://images8.alphacoders.com/749/749455.png"
        />
    </SectionLayout>

    <SectionLayout title="??ltimas atualiza????es">
        <div class="flex flex-col items-center">
            <div class="grid grid-cols-6 gap-x-5 gap-y-12 my-10">
                {#each animeList as { title, episode, backdrop }}
                <AnimePoster {title} {episode} {backdrop} />
                {/each}
            </div>
            <div>
                <button
                    class="bg-dark-500 px-12 py-2 text-white font-bold rounded"
                >
                    Ver mais
                </button>
            </div>
        </div>
    </SectionLayout>
</main>
