<script lang="ts">
    import { page } from '$app/stores'

    import SearchBar from './SearchBar.svelte'
    import NavbarUserProfile from './Navbar/NavbarUserProfile.svelte'

    let navItems = [
        {
            id: 1,
            label: 'Início',
            href: '/',
            active: $page?.url?.pathname === '/',
        },
        {
            id: 2,
            label: 'Lista',
            href: '/list',
            active: $page?.url?.pathname === '/list',
        },
        {
            id: 2,
            label: 'Gêneros',
            href: '/genres',
            active: $page?.url?.pathname === '/genres',
        },
        {
            id: 2,
            label: 'Novos episódios',
            href: '/new-episodes',
            active: $page?.url?.pathname === '/new-episodes',
        },
    ]
</script>

<header class="flex items-center justify-between py-12">
    <h1 class="text-blue-500 text-4xl font-medium font-rubik">Ani.me</h1>
    <div class="flex items-center">
        <ul class="flex text-white mr-7">
            {#each navItems as item}
            <li
                class="font-medium mr-12 text-lg cursor-pointer hover:text-blue-500 transition"
                class:text-blue-500="{item.active}"
            >
                <a href="{item.href}">{item.label}</a>
            </li>
            {/each}
        </ul>
        <SearchBar />
        <NavbarUserProfile />
    </div>
</header>
