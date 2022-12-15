<script lang="ts">
    export let title: string, episode: number, backdrop: string
</script>

<div class="flex flex-col items-center">
    <div class="flex justify-center items-end bg-center bg-cover rounded-xl h-[195px] lg:h-[254px] lg:w-[188px] anime-poster-backdrop relative z-10" style="background-image: url('{backdrop}')">
        <span class="font-medium font-lg text-gray-200 m-6">Episódio {episode}</span>
    </div>
    <h3 class="font-rubik text-lg text-white mt-4">{ title }</h3>
</div>

<style>
    .anime-poster-backdrop:before {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%);
    }
</style>