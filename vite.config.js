import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio/", 
  build: {
    rollupOptions: {
      external: [
        'lucide-react', 
        '/react-portfolio/node_modules/rollup/dist/shared/node-entry.js',
        '/react-portfolio/node_modules/dist/shared/node-entry.js',
      ],
    },
  }

})
