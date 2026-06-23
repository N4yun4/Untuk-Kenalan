import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrapbookPage from '../components/ScrapbookPage'
import { bucketList, contact, person } from '../data/data'

// Halaman — Kalau Kita Jadi Kenal: checklist interaktif + tombol kirim pilihan.
//
// Bagaimana kamu tahu apa yang dia pilih?
//  1) Kalau contact.web3formsKey diisi -> pilihannya dikirim ke EMAIL kamu otomatis.
//  2) Selalu (dengan/tanpa key) -> teks pilihannya disalin ke clipboard dan dia
//     diarahkan untuk mengirimnya ke Instagram kamu (tinggal paste).
export default function BucketList() {
  const [items, setItems] = useState(bucketList.items)
  const [status, setStatus] = useState('idle') // idle | sending | sent | empty
  const [copied, setCopied] = useState(false)

  const toggle = (i) =>
    setItems((prev) =>
      prev.map((it, idx) => (idx === i ? { ...it, done: !it.done } : it)),
    )

  const chosen = items.filter((i) => i.done)
  const igUrl = `https://instagram.com/${contact.instagram}`

  const buildMessage = () =>
    `Halo ${person.from}! Ini ${person.name}.\n` +
    `Dari halaman "${bucketList.heading}", ini yang aku pilih:\n` +
    chosen.map((i) => `• ${i.text}`).join('\n')

  const send = async () => {
    if (chosen.length === 0) {
      setStatus('empty')
      return
    }
    const message = buildMessage()

    // 1) kirim ke email lewat Web3Forms (kalau key tersedia) — fire & forget
    if (contact.web3formsKey) {
      try {
        setStatus('sending')
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: contact.web3formsKey,
            subject: `Pilihan ${person.name} dari scrapbook 💌`,
            from_name: person.name,
            message,
          }),
        })
      } catch {
        // diabaikan — tetap lanjut ke fallback clipboard
      }
    }

    // 2) salin ke clipboard supaya gampang di-paste ke DM Instagram
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
    setStatus('sent')
  }

  return (
    <ScrapbookPage heading={bucketList.heading} intro={bucketList.intro} texture="notebook">
      <div className="mx-auto max-w-lg">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center gap-4 rounded-xl bg-cream/70 px-4 py-3 text-left shadow-paper transition hover:bg-beige/60"
              >
                {/* checkbox */}
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 transition-colors ${
                    item.done ? 'border-rosegold bg-rosegold' : 'border-rosegold/50 bg-white'
                  }`}
                >
                  {item.done && (
                    <motion.svg
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-cream"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </span>
                <span
                  className={`font-body text-base transition ${
                    item.done ? 'text-ink/40 line-through' : 'text-ink'
                  }`}
                >
                  {item.text}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Aksi kirim */}
        <div className="mt-8 text-center">
          {status !== 'sent' ? (
            <>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={send}
                disabled={status === 'sending'}
                className="rounded-full bg-rosegold px-7 py-3 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58] disabled:opacity-60"
              >
                {status === 'sending'
                  ? 'Mengirim...'
                  : `${bucketList.sendButton} (${chosen.length})`}
              </motion.button>
              {status === 'empty' && (
                <p className="mt-3 font-body text-sm text-rosegold/90">
                  centang dulu minimal satu, ya
                </p>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-rosegold/20 bg-cream/70 p-5 shadow-paper"
            >
              <p className="font-body font-semibold text-ink">Pilihanmu tersimpan</p>
              <p className="mt-1 font-body text-sm text-ink/70">
                {copied
                  ? `Pilihanmu sudah disalin. Tinggal buka Instagram ${person.from} lalu paste & kirim, ya.`
                  : `Buka Instagram ${person.from} dan kabari pilihanmu, ya.`}
              </p>
              <a
                href={igUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-rosegold px-6 py-2.5 font-body font-medium text-cream shadow-paper transition-colors hover:bg-[#8a6a58]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1 0 18.7 12 6.7 6.7 0 0 0 12 5.3zm0 11a4.3 4.3 0 1 1 4.3-4.3 4.3 4.3 0 0 1-4.3 4.3zm6.9-11.3a1.6 1.6 0 1 1-1.6-1.6 1.6 1.6 0 0 1 1.6 1.6z" />
                </svg>
                @{contact.instagram}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </ScrapbookPage>
  )
}
