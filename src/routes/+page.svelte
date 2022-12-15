<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import SectionLayout from '$lib/components/SectionLayout.svelte'
    import HeaderPoster from '$lib/components/HeaderPoster.svelte'
</script>

<svelte:head>
    <title>Ani.me - Início</title>
</svelte:head>

<Navbar />

<main class="w-full flex flex-col">
    <SectionLayout title="Últimas novidades" subtitle="O que você vai assistir hoje?">
        <HeaderPoster title="ONE PUNCH MAN TERÁ 3 TEMPORADA" description="Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]" bgUrl="https://wallpaperaccess.com/full/6319352.jpg" />
    </SectionLayout>
</main>