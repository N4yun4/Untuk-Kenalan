import ScrapbookPage from '../components/ScrapbookPage'
import StickyNote from '../components/StickyNote'
import { reasons } from '../data/data'

// Halaman — Hal yang Bikin Penasaran: kartu catatan rata & rapi.
export default function Reasons() {
  return (
    <ScrapbookPage heading={reasons.heading} intro={reasons.intro} texture="dotted">
      <div className="flex flex-wrap items-start justify-center gap-5 py-4">
        {reasons.items.map((r, i) => (
          <StickyNote
            key={i}
            color={r.color}
            index={i}
            className="min-h-[140px] w-[180px]"
          >
            <span className="block font-title text-2xl text-ink">{r.text}</span>
            <span className="mt-1 block font-body text-sm text-ink/70">{r.detail}</span>
          </StickyNote>
        ))}
      </div>
    </ScrapbookPage>
  )
}
