import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase hover:text-teal-500 dark:hover:text-teal-500">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
