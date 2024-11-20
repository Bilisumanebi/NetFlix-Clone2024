import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/NetFlix-Clone2024",
  plugins: [react()],
  define: {
    "process.env": {},
  },
});
