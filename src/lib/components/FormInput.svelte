<script lang="ts">
    export let placeholder: string,
        state: boolean,
        label: string,
        block: boolean
</script>

<form class="flex flex-col my-4" class:w-full="{block}">
    <label for="input" class="text-white font-semibold mb-1.5">{ label }</label>
    <input
        name="input"
        placeholder="{placeholder}"
        class="border border-gray-200 rounded-lg text-white bg-transparent px-3 py-2 outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10 transition"
    />
</form>
