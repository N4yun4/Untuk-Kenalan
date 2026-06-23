import ScrapbookPage from '../components/ScrapbookPage'
import StickyNote from '../components/StickyNote'
import { about } from '../data/data'

// Halaman 1 — Kesan Pertama: catatan-catatan kecil yang sederhana.
export default function About() {
  return (
    <ScrapbookPage heading={about.heading} intro={about.intro} texture="dotted">
      <p className="mb-8 text-center font-body text-base text-ink/70">
        kesan pertamaku tentang kamu...
      </p>

      {/* catatan kecil */}
      <div className="flex flex-wrap items-center justify-center gap-5 py-2">
        {about.notes.map((n, i) => (
          <StickyNote key={i} color={n.color} index={i}>
            {n.text}
          </StickyNote>
        ))}
      </div>
    </ScrapbookPage>
  )
}
