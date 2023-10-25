import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/10.25.23/',
  build: {
    outDir,
    emptyOutDir: true
}})
