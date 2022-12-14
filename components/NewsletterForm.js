import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Recibe las últimas novedades de DeSci todas las semanas' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Tu correo es inválido - o ya te has suscripto')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('🎉 ¡Ya te has suscripto! Revisa tu casilla de correo 👀')
  }

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center bg-mocca100 px-16 py-16 text-center lg:py-24">
      <div className="pb-6 text-xl font-bold text-gray-100 lg:text-3xl">{title}</div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Dirección de correo electrónico
          </label>
          <input
            autoComplete="email"
            className="w-72  px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-mocca100"
            id="email-input"
            name="email"
            placeholder={subscribed ? '¡Estás suscripto/a!  🎉' : 'Ingresa tu correo'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`w-full  border border-transparent bg-cream py-2 px-4 font-bold text-mocca200 hover:border-teal-500 hover:text-teal-500 dark:bg-mocca200 dark:text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
            } focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? '¡Gracias!' : 'Suscríbete'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
