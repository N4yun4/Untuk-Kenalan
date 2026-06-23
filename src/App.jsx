import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { pageMeta } from './data/data'
import NavControls from './components/NavControls'

import Cover from './pages/Cover'
import About from './pages/About'
import SecretLetter from './pages/SecretLetter'
import Reasons from './pages/Reasons'
import BucketList from './pages/BucketList'
import HiddenMessage from './pages/HiddenMessage'
import Closing from './pages/Closing'

// Urutan halaman sesuai pageMeta di data.js
const PAGES = [
  Cover,
  About,
  SecretLetter,
  Reasons,
  BucketList,
  HiddenMessage,
  Closing,
]

// Transisi antar-halaman: cross-fade lembut + sedikit geser (tanpa flip 3D).
const pageVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -24 : 24,
    transition: { duration: 0.3, ease: 'easeIn' },
  }),
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = useCallback(
    (next) => {
      setDirection(next > index ? 1 : -1)
      setIndex(Math.max(0, Math.min(PAGES.length - 1, next)))
    },
    [index],
  )

  const ActivePage = PAGES[index]
  const isCover = index === 0
  const isFullBleed = isCover || index === PAGES.length - 1 // cover & penutup tanpa frame kertas

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-[#efe7db]">
      {/* latar hangat yang lembut */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#e3d8c6,transparent_60%)]" />

      {/* Panggung halaman */}
      <div className="relative mx-auto flex h-full w-full max-w-5xl items-center justify-center sm:p-6">
        <div
          className={`relative h-full w-full overflow-hidden sm:rounded-2xl ${
            isFullBleed ? '' : 'shadow-[0_18px_50px_rgba(74,71,66,0.22)]'
          }`}
        >
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {isCover ? (
                <Cover onOpen={() => paginate(1)} />
              ) : (
                <ActivePage />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigasi muncul setelah buku dibuka */}
      {!isCover && (
        <NavControls
          index={index}
          total={PAGES.length}
          pages={pageMeta}
          onPrev={() => paginate(index - 1)}
          onNext={() => paginate(index + 1)}
          onGoto={(i) => paginate(i)}
        />
      )}
    </div>
  )
}
