import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { twdRemote } from 'twd-relay/vite'
import { twd } from 'twd-js/vite-plugin'

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
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
