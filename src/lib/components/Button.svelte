<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    function emitClick() {
        dispatch('click')
    }

    export let background: boolean, block: boolean, loading: boolean
</script>

<button
    class="px-12 py-2 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition min-h-8"
    class:w-full="{block}"
    class:bg-blue-500="{background}"
    on:click="{emitClick}"
>
    {#if loading}
    <div class="flex items-center justify-center">
        <span class="loader" />
    </div>
    {:else}
    <slot />
    {/if}
</button>

<style>
    .loader {
        width: 25px;
        height: 25px;
        border: 2px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
