import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrapbookPage from '../components/ScrapbookPage'
import { hiddenMessage } from '../data/data'

// Halaman — Pesan Kecil: tombol sederhana, lalu pesan muncul lembut.
export default function HiddenMessage() {
  const [open, setOpen] = useState(false)

  return (
    <ScrapbookPage heading={hiddenMessage.heading} texture="cream">
      <div className="grid min-h-[60vh] place-items-center">
        <div className="relative w-full max-w-md">
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.div
                key="closed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="mb-5 font-body text-base text-ink/65">
                  {hiddenMessage.closedHint}
                </p>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(true)}
                  className="rounded-full bg-rosegold px-7 py-3 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58]"
                >
                  {hiddenMessage.buttonText}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg bg-[#fffdf9] p-8 text-center shadow-paper"
              >
                <p className="font-body text-lg leading-relaxed text-ink/85 sm:text-xl">
                  {hiddenMessage.message}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrapbookPage>
  )
}
