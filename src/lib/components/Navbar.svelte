<script lang="ts">
    import SearchBar from './SearchBar.svelte'
    import Icon from '@iconify/svelte/'

    let navItems = [
        { id: 1, label: 'Início', href: '/' },
        { id: 2, label: 'Lista', href: '/list' },
        { id: 2, label: 'Gêneros', href: '/genres' },
        { id: 2, label: 'Novos episódios', href: '/new-episodes' },
    ]
</script>

<header class="flex items-center justify-between py-12">
    <h1 class="text-blue-500 text-4xl font-medium font-rubik">Ani.me</h1>
    <div class="flex items-center">
        <ul class="flex text-white mr-7">
            {#each navItems as item}
            <li
                class="font-medium mr-12 text-lg cursor-pointer hover:text-blue-500 transition"
            >
                <a href="{item.href}">{item.label}</a>
            </li>
            {/each}
        </ul>
        <SearchBar />
        <Icon
            icon="ph:user-light"
            class="text-white ml-5 cursor-pointer hover:text-blue-500 transition"
            width="2rem"
        />
    </div>
</header>
