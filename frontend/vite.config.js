/* eslint-disable no-undef */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.VITE_PROXY_URL,
      },
    },
  },
});