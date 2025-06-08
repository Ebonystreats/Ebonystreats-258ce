// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Ebonys Treats and More',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: '← Back to Homepage',
          items: [
            {
              label: '🏠 Home',
              href: '/', // ✅ This is valid in Starlight
            },
          ],
        },
        {
          label: 'Orders',
          items: [
            {
              label: 'Place an Order',
              slug: 'guides/example',
            },
          ],
        },
        {
          label: 'Gallery',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
  ],
});