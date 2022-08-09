import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
    site: 'https://braud.no',
    base: 'ouhndelof.github.io'
});

