<script lang="ts">
    import { scale } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'

    import Icon from '@iconify/svelte'

    let loggedIn: boolean = true
    let menuVisible: boolean = false

    function toggleMenu() {
        menuVisible = !menuVisible
    }
</script>

<div class="relative">
    <div class="ml-7" on:click="{toggleMenu}">
        {#if loggedIn}
        <div class="flex items-center">
            <div class="w-10 h-10 rounded-full overflow-hidden">
                <img
                    src="https://play-lh.googleusercontent.com/03URhAXU-IrK5PB-DiN6lyLGITlp-6xTizXkW5l98AUvpzOxQej6ss_zM4f8zxN0ofEf"
                    class="w-full h-full object-cover"
                />
            </div>
            <Icon
                icon="ic:round-arrow-drop-down"
                class="text-gray-200"
                width="2rem"
            />
        </div>
        {:else}
        <Icon
            icon="ph:user-light"
            class="text-white cursor-pointer hover:text-blue-500 transition"
            width="2rem"
        />
        {/if}
    </div>

    {#if menuVisible}
    <div
        transition:scale={{ easing: quintOut }}
        class="my-5 p-5 bg-dark-500 rounded-lg absolute top-full right-0 z-20"
    >
        {#if loggedIn}
        <ul class="w-48 text-white">
            <li class="flex items-center">
                <Icon icon="material-symbols:manage-accounts-outline" width="1.5rem" />
                <span class="ml-2 font-medium">Minha conta</span>
            </li>
            <li class="flex items-center my-3">
                <Icon icon="material-symbols:history-rounded" width="1.5rem" />
                <span class="ml-2 font-medium">Histórico</span>
            </li>
            <li class="flex items-center pt-3 border-t border-dark-700/50">
                <Icon icon="material-symbols:logout" width="1.5rem" />
                <span class="ml-2 font-medium">Sair</span>
            </li>
        </ul>
        {:else}
        <ul class="text-white select-none w-96">
            <li class="flex flex-col">
                <a href="">
                    <h3 class="font-rubik text-normal text-white text-lg">Criar conta</h3>
                    <p class="text-gray-200 text-sm mt-1">Crie uma nova conta e aproveite de todas as vantagens da plataforma!</p>
                </a>
            </li>
            <li class="flex flex-col pt-4">
                <a href="">
                    <h3 class="font-rubik text-normal text-white text-lg">Login</h3>
                    <p class="text-gray-200 text-sm mt-1">Já é um membro? Realize o login na plataforma</p>
                </a>
            </li>

            <li>
                <button class="bg-blue-500 font-bold font-rubik uppercase w-full mt-6 py-3 rounded">torne-se premium</button>
            </li>
        </ul>
        {/if}
    </div>
    {/if}
</div>