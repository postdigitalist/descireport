import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Oops, no pudimos encontrar la página que estabas buscando.
          </p>
          <p className="mb-8">Pero no te preocupes, puedes volver al inicio.</p>
          <Link href="/">
            <button className="inline border border-transparent bg-cream px-4 py-2 text-sm font-bold leading-5 text-mocca200 transition-colors duration-150 hover:border-cream hover:bg-mocca100 hover:text-cream dark:hover:bg-mocca100">
              Llevame de vuelta
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
