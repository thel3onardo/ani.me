<script lang="ts">
    import { scale } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'
</script>

<div
    transition:scale={{ easing: quintOut }}
    class="my-5 p-5 bg-dark-500 w-96 rounded-lg absolute top-full right-0 z-20"
>
    <ul class="text-white select-none">
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
</div>
