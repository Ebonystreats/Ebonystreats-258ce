// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Homepage',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
			],
			sidebar: [
				{
					label: '← Back to Homepage',
					items: [
						{ label: 'Go to Main Site', href: '/' }  // 👈 Custom external/internal link
					],
				},
				{
					label: 'Orders',
					items: [
						{ label: 'Place an Order', slug: 'guides/example' },
					],
				},
				{
					label: 'Gallery',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});