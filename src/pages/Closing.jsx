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
              <motion.a
                href={`https://instagram.com/${contact.instagram}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-rosegold px-7 py-3 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1 0 18.7 12 6.7 6.7 0 0 0 12 5.3zm0 11a4.3 4.3 0 1 1 4.3-4.3 4.3 4.3 0 0 1-4.3 4.3zm6.9-11.3a1.6 1.6 0 1 1-1.6-1.6 1.6 1.6 0 0 1 1.6 1.6z" />
                </svg>
                @{contact.instagram}
              </motion.a>
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
