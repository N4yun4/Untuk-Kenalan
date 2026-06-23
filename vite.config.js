import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base diatur otomatis:
//  - saat `npm run dev`   -> '/'                (buka cukup http://localhost:5173)
//  - saat `npm run build` -> '/Untuk-Kenalan/'  (sesuai nama repo GitHub Pages)
//
// Repo: https://github.com/N4yun4/Untuk-Kenalan
// Kalau nanti repo-nya diganti nama, ubah '/Untuk-Kenalan/' di bawah.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Untuk-Kenalan/' : '/',
}))
