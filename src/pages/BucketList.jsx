import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrapbookPage from '../components/ScrapbookPage'
import { bucketList, contact, person } from '../data/data'

// Halaman — Kalau Kita Jadi Kenal: checklist interaktif + tombol kirim pilihan.
//
// Pilihan dikirim langsung ke EMAIL (Gmail) kamu lewat Web3Forms
// (contact.web3formsKey). Tidak ada Instagram di sini.
export default function BucketList() {
  const [items, setItems] = useState(bucketList.items)
  const [status, setStatus] = useState('idle') // idle | sending | sent | empty | error

  const toggle = (i) =>
    setItems((prev) =>
      prev.map((it, idx) => (idx === i ? { ...it, done: !it.done } : it)),
    )

  const chosen = items.filter((i) => i.done)

  const buildMessage = () =>
    `Halo ${person.from}! Ini ${person.name}.\n` +
    `Dari halaman "${bucketList.heading}", ini yang aku pilih:\n` +
    chosen.map((i) => `• ${i.text}`).join('\n')

  const send = async () => {
    if (chosen.length === 0) {
      setStatus('empty')
      return
    }
    if (!contact.web3formsKey) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          subject: `Pilihan ${person.name} dari scrapbook 💌`,
          from_name: person.name,
          message: buildMessage(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      setStatus(res.ok && data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
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
              {status === 'error' && (
                <p className="mt-3 font-body text-sm text-rosegold/90">
                  yah, gagal mengirim. coba lagi sebentar, ya
                </p>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-rosegold/20 bg-cream/70 p-6 shadow-paper"
            >
              <p className="font-body font-semibold text-ink">Pilihanmu sudah terkirim ✓</p>
              <p className="mt-1 font-body text-sm text-ink/70">
                Makasih ya, pilihanmu sudah sampai ke {person.from}. 🤍
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </ScrapbookPage>
  )
}
