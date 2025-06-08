// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Homepage',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Orders',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Place an Order', slug: 'guides/example' },
					],
				},
				{
					label: 'Gallery',
					autogenerate: { directory: 'Photos' },
				},
			],
		}),
	],
});
