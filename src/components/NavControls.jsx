import { motion } from 'framer-motion'

// Kontrol navigasi antar-halaman.
//  - Desktop (sm+): panah besar di kiri/kanan + titik indikator di bawah.
//  - Mobile: panah disembunyikan dari sisi (biar tidak menutupi teks) dan
//    dipindah ke dalam bar bawah, mengapit titik halaman.
function Arrow({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
    </svg>
  )
}

export default function NavControls({ index, total, onPrev, onNext, onGoto, pages }) {
  const hasPrev = index > 0
  const hasNext = index < total - 1

  return (
    <>
      {/* Panah samping — hanya tampil di layar besar */}
      {hasPrev && (
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.12, x: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={onPrev}
          aria-label="Halaman sebelumnya"
          className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-cream/80 p-3 text-rosegold shadow-paper backdrop-blur-sm sm:block"
        >
          <Arrow dir="left" />
        </motion.button>
      )}
      {hasNext && (
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.12, x: 3 }}
          whileTap={{ scale: 0.92 }}
          onClick={onNext}
          aria-label="Halaman berikutnya"
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-cream/80 p-3 text-rosegold shadow-paper backdrop-blur-sm sm:block"
        >
          <Arrow dir="right" />
        </motion.button>
      )}

      {/* Bar bawah: [‹ mobile] titik halaman [› mobile] */}
      <div className="fixed bottom-3 left-1/2 z-40 flex max-w-[94vw] -translate-x-1/2 items-center gap-1 rounded-full bg-cream/80 px-2 py-2 shadow-paper backdrop-blur-sm sm:gap-2 sm:px-3">
        {/* panah kiri (mobile saja) */}
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Halaman sebelumnya"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-rosegold transition disabled:opacity-30 sm:hidden"
        >
          <Arrow dir="left" />
        </button>

        <div className="flex items-center gap-1.5 px-1 sm:gap-2">
          {pages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onGoto(i)}
              aria-label={`Ke halaman ${p.label}`}
              title={p.label}
              className="group relative grid shrink-0 place-items-center py-1"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index
                    ? 'h-2 w-5 bg-rosegold sm:h-2.5 sm:w-6'
                    : 'h-2 w-2 bg-rosegold/30 group-hover:bg-rosegold/60 sm:h-2.5 sm:w-2.5'
                }`}
              />
            </button>
          ))}
        </div>

        {/* panah kanan (mobile saja) */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Halaman berikutnya"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-rosegold transition disabled:opacity-30 sm:hidden"
        >
          <Arrow dir="right" />
        </button>
      </div>
    </>
  )
}
