import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Resolve to react-native-web's actual entry file, not the directory
const rnwPath = path.resolve(__dirname, 'node_modules/react-native-web/dist/index.js');

export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/',
  resolve: {
    alias: [
      // Redirect react-native/Libraries/* to stub (must come first)
      {
        find: /^react-native\/Libraries\/.*/,
        replacement: path.resolve(__dirname, 'src/stubs/empty.js'),
      },
      // Redirect react-native-svg to stub
      {
        find: /^react-native-svg(\/.*)?$/,
        replacement: path.resolve(__dirname, 'src/stubs/empty.js'),
      },
      // Redirect react-native-document-picker to stub
      {
        find: /^react-native-document-picker(\/.*)?$/,
        replacement: path.resolve(__dirname, 'src/stubs/empty.js'),
      },
      // Redirect react-native-image-picker to stub
      {
        find: /^react-native-image-picker(\/.*)?$/,
        replacement: path.resolve(__dirname, 'src/stubs/empty.js'),
      },
      // Main react-native -> react-native-web redirect (must come last)
      {
        find: 'react-native',
        replacement: rnwPath,
      },
    ],
    extensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-native-web'],
    exclude: ['react-native-svg'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
