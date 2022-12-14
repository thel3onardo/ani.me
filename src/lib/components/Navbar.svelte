<script lang="ts">
    let navItems = [{ id: 1, label: 'Início' }, { id: 2, label: 'Lista' }]
</script>

<div class="flex items-center justify-between">
    <h1 class="text-blue-500 text-4xl font-medium font-rubik">Ani.me</h1>
    <ul class="flex text-white">
        {#each navItems as item}
            <li class="font-medium mx-12 text-lg">{ item.label }</li>
        {/each}
    </ul>
</div>