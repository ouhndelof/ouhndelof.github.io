import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            external: ["svgo"],
        }
    },
    site: 'https://braud.no',
    base: 'ouhndelof.github.io',
    integrations: [react()],
    server: {
        host: true
    },
});

