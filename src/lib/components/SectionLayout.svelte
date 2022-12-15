<script lang="ts">
    export let title:string, subtitle:string;
</script>

<div class="w-full flex flex-col">
    <h1 class="text-white font-rubik text-[2rem]">{ title }</h1>
    <h3 class="font-normal text-2xl text-gray-200 mb-10">{ subtitle }</h3>
    <slot />
</div>