import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'react-feather'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Activar o desactivar modo oscuro"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <Sun size={24} />
      ) : (
        <Moon size={24} />
      )}
    </button>
  )
}

export default ThemeSwitch
