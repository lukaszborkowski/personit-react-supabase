import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Przełącz motyw">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
