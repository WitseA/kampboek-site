import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimale Vite-config. Niets aan te passen voor normaal gebruik.
export default defineConfig({
  plugins: [react()],
})
