<script lang="ts">
    import { scale } from 'svelte/transition'

    export let placeholder: string,
        label: string,
        block: boolean,
        autocomplete: boolean,
        type: string = 'text',
        invalidText: string,
        validate: object

    let isValid = true

    function validateInput(event): boolean {
        if (!validate) return (isValid = false)

        const value = event?.target?.value

        if (validate && validate(value)) return (isValid = true)
        else isValid = false
    }
</script>

<form class="flex flex-col my-4" class:w-full="{block}">
    <label for="input" class="text-white/70 font-semibold mb-1.5"
        >{ label }</label
    >
    <input
        on:input="{validateInput}"
        name="input"
        placeholder="{placeholder}"
        autocomplete="{autocomplete}"
        type="{type}"
        class="border border-gray-200 rounded-lg text-white bg-transparent px-3 py-2 outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10 transition"
        class:border-red-500="{!isValid}"
        class:focus:border-red-500="{!isValid}"
    />
    {#if !isValid}
    <span transition:scale class="text-red-500 text-sm mt-2 ml-1"
        >{ invalidText }</span
    >
    {/if}
</form>
