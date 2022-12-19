<script lang="ts">
    export let background: boolean, block: boolean
</script>

<button
    class="px-12 py-2 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition"
    class:w-full="{block}"
    class:bg-blue-500="{background}"
>
    <slot />
</button>
