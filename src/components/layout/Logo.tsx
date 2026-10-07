import logoDarkText from '@/assets/personit-logo-dark-text.svg'
import logoLightText from '@/assets/personit-logo-light-text.svg'
import { cn } from '@/lib/utils'

// Oryginalne logo ma biały napis – na jasnym tle podmieniamy wariant z ciemnym napisem
export function Logo({ className }: { className?: string }) {
  return (
    <>
      <img src={logoDarkText} alt="Personit" className={cn('dark:hidden', className)} />
      <img src={logoLightText} alt="Personit" className={cn('hidden dark:block', className)} />
    </>
  )
}
