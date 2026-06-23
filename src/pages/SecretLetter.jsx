import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrapbookPage from '../components/ScrapbookPage'
import { letter } from '../data/data'

// Halaman — Surat Kecil: amplop sederhana yang dibuka, lalu surat
// muncul lembut (tanpa efek mesin ketik yang berlebihan).
export default function SecretLetter() {
  const [opened, setOpened] = useState(false)

  return (
    <ScrapbookPage heading={letter.heading} texture="cream">
      <div className="grid min-h-[60vh] place-items-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            // ---------- AMPLOP TERTUTUP ----------
            <motion.button
              key="envelope"
              onClick={() => setOpened(true)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -3 }}
              className="relative aspect-[16/10] w-[78vw] max-w-[320px] cursor-pointer"
              aria-label="Buka amplop"
            >
              {/* badan amplop */}
              <div className="absolute inset-0 rounded-md bg-beige shadow-paper" />
              {/* flap atas */}
              <svg
                viewBox="0 0 320 200"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <polygon points="0,0 320,0 160,128" fill="#dccdb8" />
              </svg>
              {/* segel sederhana */}
              <span className="absolute left-1/2 top-1/2 z-10 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rosegold shadow-sm sm:h-11 sm:w-11" />
              <p className="absolute -bottom-10 left-1/2 w-[80vw] max-w-[320px] -translate-x-1/2 text-center font-body text-sm text-ink/60 sm:text-base">
                {letter.envelopeHint}
              </p>
            </motion.button>
          ) : (
            // ---------- SURAT ----------
            <motion.article
              key="letter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-lg bg-[#fffdf9] p-6 shadow-paper sm:p-8"
            >
              <p className="mb-3 font-title text-2xl text-ink">{letter.greeting}</p>
              <p className="whitespace-pre-line font-body text-base leading-relaxed text-ink/85">
                {letter.body.join('\n')}
              </p>
              <div className="mt-6 text-right">
                <p className="font-body text-sm text-ink/60">{letter.signoff}</p>
                <p className="font-title text-xl text-ink">{letter.signature}</p>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </ScrapbookPage>
  )
}
