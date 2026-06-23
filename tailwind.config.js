/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palet kalem & hangat — nada netral/tanah, satu aksen tenang
        dusty: '#E6D3CA',      // clay-blush lembut (dulu pink)
        cream: '#FBF7F1',      // off-white hangat
        beige: '#E7DDCD',      // beige kertas
        lavender: '#DAD2DB',   // mauve abu (sangat diredam)
        softblue: '#CFD8D6',   // sage-biru abu
        // Aksen tunggal
        rosegold: '#9C7A66',   // clay/terracotta lembut (aksen utama)
        brown: '#6B5D4F',
        softyellow: '#EDE2C8', // sand (dulu kuning terang)
        ink: '#4A4742',        // abu hangat untuk teks
      },
      fontFamily: {
        // Judul: serif hangat yang bersih
        title: ['"Fraunces"', 'Georgia', 'serif'],
        caveat: ['"Fraunces"', 'Georgia', 'serif'],
        // Body
        body: ['"Poppins"', 'system-ui', 'sans-serif'],
        nunito: ['"Nunito"', 'system-ui', 'sans-serif'],
        // "Catatan" sekarang pakai body biasa (tanpa tulisan tangan)
        hand: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 1px 2px rgba(90,74,66,0.10), 0 8px 24px rgba(90,74,66,0.12)',
        polaroid: '0 6px 18px rgba(90,74,66,0.22), 0 1px 3px rgba(0,0,0,0.10)',
        lift: '0 18px 40px rgba(90,74,66,0.28)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-110vh) rotate(220deg)', opacity: '0' },
        },
        sway: {
          '0%,100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(18px)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatUp: 'floatUp linear infinite',
        sway: 'sway 4s ease-in-out infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        spinSlow: 'spinSlow 6s linear infinite',
      },
    },
  },
  plugins: [],
}
