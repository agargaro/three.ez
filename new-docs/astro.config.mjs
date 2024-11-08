// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
					entryPoints: ['../src/index.ts'],
					tsconfig: '../tsconfig.doc.json',
				}),
			],
			title: 'ThreeEz Docs',
			social: {
				github: 'https://github.com/agargaro/three.ez',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				// Add the generated sidebar group to the sidebar.
				typeDocSidebarGroup,
			],
		}),
	],
});
