// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
  site: "https://agargaro.github.io",
  base: "/three.ez",
  integrations: [
    starlight({
      plugins: [
        // Generate the documentation.
        starlightTypeDoc({
          entryPoints: ["../src/index.ts"],
          tsconfig: "../tsconfig.doc.json",
        }),
      ],
      title: "ThreeEz Docs",
      logo: {
        src: "./src/assets/samoyed-mascot.png",
        alt: "logo-samoyed-mascot",
      },
      favicon: "./favicon.ico",
      social: {
        github: "https://github.com/agargaro/three.ez",
        discord: "https://discord.gg/MVTwrdX3JM",
      },
      sidebar: [
        "introduction",
        {
          label: "Gettings Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        // Add the generated sidebar group to the sidebar.
        typeDocSidebarGroup,
      ],
    }),
  ],
});
