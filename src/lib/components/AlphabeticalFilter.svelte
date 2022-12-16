<script lang="ts">
    const alphabeticalLetters = [
        'a',
        'b',
        'b',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]

    let filterContainer

    function scrollOnMouseWheel(event) {
        let [x, y] = [event.deltaX, event.deltaY]
        let magnitude

        if (x === 0) {
            magnitude = y > 0 ? -30 : 30
        } else {
            magnitude = x
        }

        //console.log({ x, y, magnitude });
        filterContainer.scrollBy({
            left: magnitude,
        })
        // filterContainer.scrollBy({
        //     left: e.deltaY < 0 ? -60 : 60,
        // })
    }
</script>

<div
    class="flex overflow-y-hidden overflow-x-scroll py-8 mb-20"
    bind:this="{filterContainer}"
    on:mousewheel|preventDefault="{scrollOnMouseWheel}"
>
    <button
        class="rounded-[37px] bg-dark-500 text-white font-medium mr-8 py-2 px-5"
    >
        Todos
    </button>
    {#each alphabeticalLetters as letter}
    <button
        class="rounded-[37px] bg-transparent border border-dark-500 hover:border-blue-500 transition text-gray-200 mr-8 py-2 px-10 uppercase"
    >
        {letter}
    </button>
    {/each}
</div>

<style>
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
        height: 4px;
        border-radius: 50px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #151b26;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #00a3ff;
        border-radius: 50px;
    }

    Handle on hover ::-webkit-scrollbar-thumb:hover {
        background: red;
    }
</style>
