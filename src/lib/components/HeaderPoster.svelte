<script lang="ts">
    export let title, description, bgUrl;
</script>

<div class="w-full flex flex-col justify-end px-11 py-10 rounded-lg min-h-[400px] poster-bg relative z-10" style="background-image: url('{bgUrl}')">
    <div class="w-full">
        <h2 class="text-white font-rubik text-4xl font-medium uppercase mb-2">{ title }</h2>
        <p class="font-inter text-gray-200 w-2/4">{ description }</p>
    </div>
</div>

<style>
    .poster-bg:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(270deg, rgba(6, 9, 15, 0.32) 0%, rgba(6, 9, 15, 0.9) 100%);
    }
</style>