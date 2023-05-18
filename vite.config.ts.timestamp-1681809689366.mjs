// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/chenquan/Workspace/nodejs/ink-mde/node_modules/.pnpm/vite@4.1.4_@types+node@18.14.2/node_modules/vite/dist/node/index.js";
import solidjs from "file:///Users/chenquan/Workspace/nodejs/ink-mde/node_modules/.pnpm/vite-plugin-solid@2.5.0_solid-js@1.6.15_vite@4.1.4/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import { externalizeDeps } from "file:///Users/chenquan/Workspace/nodejs/ink-mde/node_modules/.pnpm/vite-plugin-externalize-deps@0.5.0_vite@4.1.4/node_modules/vite-plugin-externalize-deps/dist/index.js";
var __vite_injected_original_dirname = "/Users/chenquan/Workspace/nodejs/ink-mde";
var vite_config_default = defineConfig(({ ssrBuild }) => {
  return {
    build: {
      emptyOutDir: !ssrBuild,
      lib: {
        entry: "./src/index.tsx",
        fileName: "client",
        formats: []
      },
      rollupOptions: {
        output: [
          {
            esModule: true,
            exports: "named",
            format: "es"
          },
          {
            exports: "named",
            format: "cjs",
            inlineDynamicImports: true,
            interop: "esModule"
          }
        ]
      },
      sourcemap: true,
      target: "esnext"
    },
    plugins: [
      externalizeDeps(),
      solidjs({
        solid: {
          generate: ssrBuild ? "ssr" : "dom",
          hydratable: true
        }
      })
    ],
    resolve: {
      alias: {
        "/": resolve(__vite_injected_original_dirname, "./"),
        "ink-mde": resolve(__vite_injected_original_dirname, "./src/index")
      },
      conditions: [
        "browser",
        "node",
        "solid"
      ]
    },
    test: {
      clearMocks: true,
      deps: {
        inline: [
          "solid-js"
        ]
      },
      environment: "jsdom"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnF1YW4vV29ya3NwYWNlL25vZGVqcy9pbmstbWRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnF1YW4vV29ya3NwYWNlL25vZGVqcy9pbmstbWRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaGVucXVhbi9Xb3Jrc3BhY2Uvbm9kZWpzL2luay1tZGUvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBzb2xpZGpzIGZyb20gJ3ZpdGUtcGx1Z2luLXNvbGlkJ1xuaW1wb3J0IHsgZXh0ZXJuYWxpemVEZXBzIH0gZnJvbSAndml0ZS1wbHVnaW4tZXh0ZXJuYWxpemUtZGVwcydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBzc3JCdWlsZCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IHtcbiAgICAgIGVtcHR5T3V0RGlyOiAhc3NyQnVpbGQsXG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6ICcuL3NyYy9pbmRleC50c3gnLFxuICAgICAgICBmaWxlTmFtZTogJ2NsaWVudCcsXG4gICAgICAgIGZvcm1hdHM6IFtdLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZXNNb2R1bGU6IHRydWUsXG4gICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgICBpbmxpbmVEeW5hbWljSW1wb3J0czogdHJ1ZSxcbiAgICAgICAgICAgIGludGVyb3A6ICdlc01vZHVsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgZXh0ZXJuYWxpemVEZXBzKCksXG4gICAgICBzb2xpZGpzKHtcbiAgICAgICAgc29saWQ6IHtcbiAgICAgICAgICBnZW5lcmF0ZTogc3NyQnVpbGQgPyAnc3NyJyA6ICdkb20nLFxuICAgICAgICAgIGh5ZHJhdGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICcvJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLycpLFxuICAgICAgICAnaW5rLW1kZSc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaW5kZXgnKSxcbiAgICAgIH0sXG4gICAgICBjb25kaXRpb25zOiBbXG4gICAgICAgICdicm93c2VyJyxcbiAgICAgICAgJ25vZGUnLFxuICAgICAgICAnc29saWQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgIGNsZWFyTW9ja3M6IHRydWUsXG4gICAgICBkZXBzOiB7XG4gICAgICAgIGlubGluZTogW1xuICAgICAgICAgICdzb2xpZC1qcycsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsdUJBQXVCO0FBTGhDLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxNQUFNO0FBQzVDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLGFBQWEsQ0FBQztBQUFBLE1BQ2QsS0FBSztBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsU0FBUyxDQUFDO0FBQUEsTUFDWjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLFVBQVU7QUFBQSxZQUNWLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1Isc0JBQXNCO0FBQUEsWUFDdEIsU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLFVBQVUsV0FBVyxRQUFRO0FBQUEsVUFDN0IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsSUFBSTtBQUFBLFFBQzVCLFdBQVcsUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDN0M7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osWUFBWTtBQUFBLE1BQ1osTUFBTTtBQUFBLFFBQ0osUUFBUTtBQUFBLFVBQ047QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
