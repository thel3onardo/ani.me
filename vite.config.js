import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    server: {
        host: true,
        port: 8181,
    },
}

export default config
