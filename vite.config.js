import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'case-rewrite-documents',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/documents/')) {
            req.url = req.url.replace(/^\/documents\//, '/DOCUMENTS/');
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/documents/')) {
            req.url = req.url.replace(/^\/documents\//, '/DOCUMENTS/');
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false
  }
});
