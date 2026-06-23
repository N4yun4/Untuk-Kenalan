import { motion } from 'framer-motion'

// Kartu catatan sederhana — rata, lurus, sedikit terangkat saat di-hover.
// Props:
//  - color: nama warna dari palet ('softyellow' | 'dusty' | 'softblue' | 'lavender' | 'beige')
//  - index (untuk delay muncul). `rotate` dibiarkan demi kompatibilitas, tak dipakai.
const colorMap = {
  softyellow: 'bg-softyellow',
  dusty: 'bg-dusty',
  softblue: 'bg-softblue',
  lavender: 'bg-lavender',
  beige: 'bg-beige',
  cream: 'bg-cream',
}

export default function StickyNote({
  children,
  color = 'softyellow',
  index = 0,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`${colorMap[color] || 'bg-softyellow'} relative flex min-h-[120px] w-[160px] flex-col justify-center rounded-xl p-4 shadow-paper ${className}`}
    >
      <div className="font-body text-base leading-snug text-ink">{children}</div>
    </motion.div>
  )
}
