import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { twdRemote } from 'twd-relay/vite'
import { twd } from 'twd-js/vite-plugin'
import istanbul from 'vite-plugin-istanbul'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/twd-shadcn/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    twd({
      open: true,
      position: 'left',
      serviceWorker: false,
    }),
    twdRemote() as PluginOption,
    istanbul({
      include: 'src/**/*',
      exclude: ['node_modules', '**/*.twd.test.ts'],
      requireEnv: !process.env.CI,
      extension: ['.ts', '.tsx'],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
