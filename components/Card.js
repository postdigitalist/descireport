import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${imgSrc && 'h-full'}  overflow-hidden border border-cream dark:border-mocca100`}
    >
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-mocca200 hover:text-teal-500 dark:text-cream dark:hover:text-teal-500"
            aria-label={`Link to ${title}`}
          >
            Seguí leyendo &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
