# 💌 Digital Scrapbook — Sebuah Cerita Kecil

Website **perkenalan** bertema *digital scrapbook* (cottagecore / romantic journal) yang dibuat dengan
**React + Vite + Tailwind CSS + Framer Motion**. Sebuah cara hangat & sopan untuk menyapa
seseorang yang ingin kamu kenal lebih dekat. Terasa seperti membuka album kenangan
fisik premium: sampul buku terbuka, halaman bisa di-flip, polaroid berjatuhan, amplop
terbuka, surat diketik, kertas terlipat membuka diri, hitung mundur, sampai confetti.

## ✨ Isi Halaman
1. **Cover** — sampul buku yang terbuka saat diklik
2. **Kesan Pertama** — sticky notes (tanpa foto)
3. **Surat Kecil** — amplop + efek mesin ketik
4. **Alasan Aku Ingin Mengenalmu** — sticky notes naik saat hover
5. **Kalau Kita Jadi Kenal** — checklist + tombol kirim pilihan
6. **Pesan Kecil** — kertas terlipat blur → unfold
7. **Penutup** — langit malam + confetti + tautan Instagram

## 📩 Tahu apa yang dia pilih & kontak
- **Instagram** kamu (`contact.instagram` di `src/data/data.js`) muncul di halaman
  penutup saat dia menjawab "Boleh, dong", jadi dia bisa langsung menyapamu.
- Di halaman **Kalau Kita Jadi Kenal**, dia mencentang pilihan lalu menekan
  **Kirim pilihanku**. Pilihannya:
  - **otomatis disalin ke clipboard** + diarahkan ke Instagram kamu untuk di-paste, dan
  - **dikirim ke email kamu otomatis** jika kamu mengisi `contact.web3formsKey`
    (daftar gratis di https://web3forms.com, tempel access key-nya di `data.js`).

## 🚀 Menjalankan secara lokal
```bash
npm install
npm run dev
```
Buka alamat yang muncul (biasanya http://localhost:5173).

## ✏️ Mengubah isi (teks / foto / lagu)
Semua konten ada di **`src/data/data.js`** — ganti teks, URL foto, dan daftar lagu di sana.
Untuk memakai foto/musik asli, taruh file di `src/assets/` lalu impor di `data.js`.

## 🌍 Deploy ke GitHub Pages

1. **Atur `base`** di `vite.config.js` sesuai nama repo kamu:
   ```js
   // jika repo: https://github.com/username/nama-repo
   export default defineConfig({
     plugins: [react()],
     base: '/nama-repo/',   // <- WAJIB, perhatikan garis miring depan & belakang
   })
   ```
   > Kalau deploy ke root domain / Vercel / Netlify, pakai `base: '/'`.

2. **Build & deploy** (paket `gh-pages` sudah termasuk):
   ```bash
   npm run build
   npm run deploy
   ```
   Perintah `deploy` mem-push folder `dist` ke branch `gh-pages`.

3. Di GitHub: **Settings → Pages → Build and deployment → Source: `gh-pages` branch**.
   Tunggu sebentar, situs aktif di `https://username.github.io/nama-repo/`.

### Alternatif: GitHub Actions (otomatis tiap push)
Buat file `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push: { branches: [main] }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v4
```
Lalu set **Settings → Pages → Source: GitHub Actions**.

## 🎨 Catatan teknis
- **Tanpa React Router** — navigasi berbasis state + animasi flip Framer Motion,
  jadi aman dari masalah routing di GitHub Pages.
- **Mobile-first** & responsif penuh.
- Placeholder gambar: `picsum.photos`; audio: `soundhelix.com`.
- Menghormati `prefers-reduced-motion`.

Dibuat dengan 🤍 — semoga kalian jadi saling kenal.
