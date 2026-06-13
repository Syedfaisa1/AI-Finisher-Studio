import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],   // <-- this was missing
  server: {
    port: 9000,
    strictPort: true
  }
})