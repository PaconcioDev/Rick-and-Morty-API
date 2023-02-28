import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/PaconcioDev/rick-and-morty-API",
  plugins: [react()],
})
