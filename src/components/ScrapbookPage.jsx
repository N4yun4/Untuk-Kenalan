import { motion } from 'framer-motion'

// Kerangka standar untuk setiap halaman scrapbook.
// Memberi tekstur kertas, butiran (grain), heading bergaya tulisan tangan,
// dan area scroll yang lembut. Dipakai oleh hampir semua halaman.
//
// Props:
//  - heading, intro
//  - texture: 'cream' | 'notebook' | 'dotted'
//  - children
export default function ScrapbookPage({
  heading,
  intro,
  texture = 'cream',
  children,
  className = '',
  headingColor = 'text-rosegold',
}) {
  const textureClass =
    texture === 'notebook'
      ? 'paper-cream notebook-lines'
      : texture === 'dotted'
      ? 'paper-cream dotted'
      : 'paper-cream'

  return (
    <div
      className={`grain soft-scroll relative h-full w-full overflow-y-auto ${textureClass} ${className}`}
    >
      {/* lubang ring binder di tepi kiri (vibe buku) */}
      <div className="pointer-events-none absolute left-2 top-0 hidden h-full flex-col justify-evenly py-10 sm:flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="h-4 w-4 rounded-full bg-[#e3d3c0] shadow-[inset_0_2px_3px_rgba(0,0,0,0.18)]"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-28 pt-8 sm:px-12 sm:pb-20 sm:pl-16 sm:pt-10">
        {heading && (
          <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2
              className={`font-title text-4xl text-shadow-soft sm:text-6xl ${headingColor}`}
            >
              {heading}
            </h2>
            {intro && (
              <p className="mx-auto mt-3 max-w-md font-body text-sm text-ink/70 sm:text-base">
                {intro}
              </p>
            )}
            <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-rosegold/60 to-transparent" />
          </motion.header>
        )}
        {children}
      </div>
    </div>
  )
}
