// =============================================================
//  💌  PUSAT DATA SCRAPBOOK
//  Edit semua teks, kontak, dan daftar di sini saja.
//  Tidak perlu menyentuh file komponen / halaman.
// =============================================================

export const person = {
  // Nama orang yang ingin kamu kenal
  name: 'Bella',
  // Nama kamu (pengirim)
  from: 'Sam',
}

// --- KONTAK ---
export const contact = {
  // Instagram kamu — ditampilkan di halaman "Boleh, dong"
  // supaya dia bisa menghubungimu kalau jawabannya iya.
  instagram: '_nayan_471',

  // (OPSIONAL) Access key Web3Forms untuk menerima PILIHAN dia di halaman
  // "Kalau Kita Jadi Kenal" lewat EMAIL secara otomatis.
  // Daftar gratis ~10 detik di https://web3forms.com (cukup masukkan email kamu),
  // salin access key-nya, lalu tempel di antara tanda kutip di bawah.
  // Kalau dibiarkan kosong, pilihan dia tetap bisa dikirim manual ke Instagram
  // (teksnya otomatis tersalin ke clipboard).
  web3formsKey: '11307163-9fd6-44de-afdb-1938a7354946',
}

// --- COVER ---
export const cover = {
  title: `Hai, ${person.name}`,
  subtitle: 'Ada yang pengin kenalan dan ngobrol santai sama kamu.',
  buttonText: 'Mulai Kenalan',
  hint: 'ketuk untuk mulai',
}

// --- HALAMAN 1: KESAN PERTAMA ---
export const about = {
  heading: 'Kesan Pertama',
  intro: 'Hal-hal kecil yang bikin aku pengin kenalan sama kamu.',
  notes: [
    { text: 'Kayaknya kamu orangnya asik', color: 'softyellow' },
    { text: 'Auranya enak, bikin nyaman', color: 'dusty' },
    { text: 'Jadi pengin ngobrol', color: 'softblue' },
    { text: 'Senyummu ramah', color: 'lavender' },
  ],
}

// --- HALAMAN 2: SURAT PERKENALAN ---
export const letter = {
  heading: 'Surat Kecil',
  envelopeHint: 'Ketuk amplop untuk membuka',
  greeting: `Hai, ${person.name},`,
  body: [
    'Maaf kalau agak tiba-tiba,',
    'tapi aku pengin kenalan sama kamu.',
    '',
    'Kamu kelihatan asik diajak ngobrol —',
    'pengin tahu cerita-cerita kecilmu,',
    'hal yang kamu suka, dan keseharianmu.',
    '',
    'Mulai dari obrolan ringan dulu aja, ya.',
  ],
  signoff: 'Salam,',
  signature: `— ${person.from}`,
}

// --- HALAMAN 3: HAL YANG BIKIN PENASARAN ---
export const reasons = {
  heading: 'Hal yang Bikin Penasaran',
  intro: 'Beberapa hal yang bikin aku pengin kenalan sama kamu.',
  items: [
    { text: 'Senyummu', detail: 'ramah dan enak dilihat', color: 'dusty' },
    { text: 'Caramu bawa diri', detail: 'tenang dan asik', color: 'softyellow' },
    { text: 'Kebaikanmu', detail: 'kelihatan dari hal kecil', color: 'softblue' },
    { text: 'Selera & ceritamu', detail: 'pengin tahu lebih banyak', color: 'lavender' },
    { text: 'Caramu ketawa', detail: 'kayaknya seru', color: 'beige' },
    { text: 'Entah kenapa', detail: 'pokoknya pengin kenal kamu', color: 'dusty' },
  ],
}

// --- HALAMAN 4: HAL YANG INGIN KULAKUKAN ---
export const bucketList = {
  heading: 'Kalau Nanti Jadi Kenal',
  intro: 'Centang yang kamu mau, lalu kirim pilihanmu ke aku ya.',
  items: [
    { text: 'Ngobrol santai sambil ngopi', done: false },
    { text: 'Tukar rekomendasi film & lagu', done: false },
    { text: 'Jalan-jalan tanpa tujuan', done: false },
    { text: 'Lihat sunset di tempat baru', done: false },
    { text: 'Cerita hal random sampai ketawa', done: false },
    { text: 'Pelan-pelan jadi teman ngobrol', done: false },
  ],
  sendButton: 'Kirim pilihanku',
}

// --- HALAMAN 5: PESAN KECIL ---
export const hiddenMessage = {
  heading: 'Pesan Kecil',
  buttonText: 'Buka Pesan',
  closedHint: 'ada yang pengin kusampaikan...',
  message:
    'Sejujurnya aku cuma pengin kenalan. Nggak buru-buru, nggak neko-neko — sekadar pengin tahu, mungkin kita bisa jadi teman ngobrol?',
}

// --- HALAMAN PENUTUP ---
export const closing = {
  lines: [
    'Terima kasih sudah baca sampai sini.',
    'Apa pun jawabannya, makasih sudah meluangkan waktu.',
  ],
  question: 'Jadi... mau kenalan?',
  yesText: 'Boleh',
  noText: 'Nanti dulu',
  yesReply: 'Asik! Makasih udah mau kenalan.',
  yesContactHint: 'Sapa aku di Instagram, ya:',
  noReply: 'Nggak apa-apa, santai aja. Aku senang udah bisa nyapa kamu.',
}

// Daftar urutan halaman (dipakai App.jsx & navigasi)
export const pageMeta = [
  { id: 'cover', label: 'Cover' },
  { id: 'about', label: 'Kesan Pertama' },
  { id: 'letter', label: 'Surat' },
  { id: 'reasons', label: 'Alasan' },
  { id: 'bucket', label: 'Wishlist' },
  { id: 'hidden', label: 'Pesan' },
  { id: 'closing', label: 'Penutup' },
]
