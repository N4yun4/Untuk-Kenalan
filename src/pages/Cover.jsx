import { motion } from 'framer-motion'
import { cover } from '../data/data'

// Halaman cover: kartu sambutan yang tenang & bersih.
// Props: onOpen()
export default function Cover({ onOpen }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-y-auto bg-gradient-to-b from-[#f6efe4] to-[#ece2d2] p-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[88vw] max-w-[380px] rounded-2xl bg-cream px-8 py-14 text-center shadow-[0_18px_50px_rgba(74,71,66,0.18)]"
      >
        <p className="font-body text-sm uppercase tracking-[0.22em] text-rosegold/80">
          salam kenal
        </p>
        <h1 className="my-3 font-title text-5xl font-medium text-ink sm:text-6xl">
          {cover.title}
        </h1>
        <p className="mx-auto mt-2 max-w-[18rem] font-body text-sm leading-relaxed text-ink/70">
          {cover.subtitle}
        </p>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="mt-9 rounded-full bg-rosegold px-7 py-3 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58]"
        >
          {cover.buttonText}
        </motion.button>

        <p className="mt-4 font-body text-xs text-ink/45">{cover.hint}</p>
      </motion.div>
    </div>
  )
}
