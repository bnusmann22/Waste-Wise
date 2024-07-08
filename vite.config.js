import react from '@vitejs/plugin-react'
//fixing directory name not defined in vite
import path from "path"
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
