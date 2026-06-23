import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { closing, contact } from '../data/data'

// Halaman Penutup: pertanyaan ringan dengan dua tombol jujur.
//  - "Boleh"     -> balasan hangat + kontak Instagram
//  - "Nanti dulu" -> balasan santai, bisa tanya lagi
export default function Closing() {
  const [answer, setAnswer] = useState(null) // 'yes' | 'no' | null

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-y-auto bg-gradient-to-b from-[#f6efe4] to-[#e7dccb] px-6 py-10 text-center">
      <div className="relative z-10 mx-auto my-auto max-w-lg">
        <AnimatePresence mode="wait">
          {!answer && (
            <motion.div
              key="ask"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
            >
              {closing.lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.25 }}
                  className="mb-2 font-body text-sm text-ink/65 sm:text-base"
                >
                  {line}
                </motion.p>
              ))}

              <h2 className="mb-10 mt-6 font-title text-3xl font-medium leading-tight text-ink sm:text-4xl">
                {closing.question}
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAnswer('yes')}
                  className="rounded-full bg-rosegold px-8 py-3 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58]"
                >
                  {closing.yesText}
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAnswer('no')}
                  className="rounded-full border border-ink/20 bg-cream px-8 py-3 font-body font-medium text-ink/70 transition-colors hover:bg-beige"
                >
                  {closing.noText}
                </motion.button>
              </div>
            </motion.div>
          )}

          {answer === 'yes' && (
            <motion.div
              key="yes"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-title text-3xl font-medium text-ink sm:text-4xl">
                {closing.yesReply}
              </p>

              <p className="mt-8 font-body text-sm text-ink/65">
                {closing.yesContactHint}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                <motion.a
                  href={`https://instagram.com/${contact.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-rosegold px-7 py-3 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1 0 18.7 12 6.7 6.7 0 0 0 12 5.3zm0 11a4.3 4.3 0 1 1 4.3-4.3 4.3 4.3 0 0 1-4.3 4.3zm6.9-11.3a1.6 1.6 0 1 1-1.6-1.6 1.6 1.6 0 0 1 1.6 1.6z" />
                  </svg>
                  @{contact.instagram}
                </motion.a>

                <motion.a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full border border-rosegold/40 bg-cream px-7 py-3 font-body font-medium text-rosegold shadow-paper transition-colors hover:bg-beige"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.73c0 4.46-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.05.8.81-2.97-.19-.31a8.05 8.05 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.1-8.1zm4.65 11.55c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.3 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z" />
                  </svg>
                  {contact.whatsappDisplay}
                </motion.a>
              </div>
            </motion.div>
          )}

          {answer === 'no' && (
            <motion.div
              key="no"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="font-title text-2xl font-medium text-ink sm:text-3xl">
                {closing.noReply}
              </p>
              <button
                onClick={() => setAnswer(null)}
                className="mt-8 font-body text-sm text-ink/60 underline underline-offset-4"
              >
                ...atau, tanya lagi?
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
