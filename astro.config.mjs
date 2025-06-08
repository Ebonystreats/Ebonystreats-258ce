import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Ebonys Treats and More',
      customCss: 'src/styles/custom.css', // ✅ This line adds your styles
      sidebar: [
        {
          label: '← Back to Homepage',
          items: [{ label: '🏠 Home', href: '/' }],
        },
        {
          label: 'Orders',
          items: [{ label: 'Place an Order', slug: 'guides/example' }],
        },
        {
          label: 'Gallery',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});