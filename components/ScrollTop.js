import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'react-feather'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <div
      className={`fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Volver arriba"
        type="button"
        onClick={handleScrollTop}
        className=" bg-cream p-2 text-mocca100 transition-all hover:bg-gray-300 dark:bg-mocca100 dark:text-gray-400 dark:hover:text-cream"
      >
        <ArrowUp />
      </button>
    </div>
  )
}

export default ScrollTop
